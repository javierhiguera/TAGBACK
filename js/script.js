document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    const canvas = $("#neural-canvas");

    if (canvas) {
        const gl = canvas.getContext("webgl", { alpha: true, antialias: true }) || canvas.getContext("experimental-webgl", { alpha: true, antialias: true });

        if (gl) {
            const vertexSource = `
                attribute vec2 a_position;
                varying vec2 vUv;
                void main() {
                    vUv = 0.5 * (a_position + 1.0);
                    gl_Position = vec4(a_position, 0.0, 1.0);
                }
            `;

            const fragmentSource = `
                precision mediump float;
                varying vec2 vUv;
                uniform float u_time;
                uniform float u_ratio;
                uniform vec2 u_pointer_position;
                uniform vec3 u_color;
                uniform float u_speed;

                vec2 rotate(vec2 uv, float angle) {
                    return mat2(cos(angle), sin(angle), -sin(angle), cos(angle)) * uv;
                }

                float neuro_shape(vec2 uv, float time, float pointer) {
                    vec2 sine_acc = vec2(0.0);
                    vec2 result = vec2(0.0);
                    float scale = 8.0;

                    for (int i = 0; i < 15; i++) {
                        uv = rotate(uv, 1.0);
                        sine_acc = rotate(sine_acc, 1.0);
                        vec2 layer = uv * scale + float(i) + sine_acc - time;
                        sine_acc += sin(layer) + 2.4 * pointer;
                        result += (0.5 + 0.5 * cos(layer)) / scale;
                        scale *= 1.2;
                    }

                    return result.x + result.y;
                }

                void main() {
                    vec2 uv = 0.5 * vUv;
                    uv.x *= u_ratio;

                    vec2 pointer = vUv - u_pointer_position;
                    pointer.x *= u_ratio;

                    float influence = 0.5 * pow(1.0 - clamp(length(pointer), 0.0, 1.0), 2.0);
                    float time = u_speed * u_time;
                    float noise = neuro_shape(uv, time, influence);

                    noise = 1.2 * pow(noise, 3.0);
                    noise += pow(noise, 10.0);
                    noise = max(0.0, noise - 0.5);
                    noise *= 1.0 - length(vUv - 0.5);

                    gl_FragColor = vec4(u_color * noise, noise);
                }
            `;

            const compileShader = (source, type) => {
                const shader = gl.createShader(type);

                if (!shader) return null;

                gl.shaderSource(shader, source);
                gl.compileShader(shader);

                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                    console.error(gl.getShaderInfoLog(shader));
                    gl.deleteShader(shader);
                    return null;
                }

                return shader;
            };

            const vertexShader = compileShader(vertexSource, gl.VERTEX_SHADER);
            const fragmentShader = compileShader(fragmentSource, gl.FRAGMENT_SHADER);

            if (vertexShader && fragmentShader) {
                const program = gl.createProgram();

                if (program) {
                    gl.attachShader(program, vertexShader);
                    gl.attachShader(program, fragmentShader);
                    gl.linkProgram(program);

                    if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
                        gl.useProgram(program);

                        const positionLocation = gl.getAttribLocation(program, "a_position");
                        const buffer = gl.createBuffer();

                        if (buffer && positionLocation !== -1) {
                            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
                            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                                -1, -1,
                                1, -1,
                                -1, 1,
                                1, 1
                            ]), gl.STATIC_DRAW);

                            gl.enableVertexAttribArray(positionLocation);
                            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

                            const uniform = (name) => gl.getUniformLocation(program, name);
                            const timeLocation = uniform("u_time");
                            const ratioLocation = uniform("u_ratio");
                            const pointerLocation = uniform("u_pointer_position");
                            const colorLocation = uniform("u_color");
                            const speedLocation = uniform("u_speed");

                            gl.uniform3f(colorLocation, 139 / 255, 163 / 255, 199 / 255);
                            gl.uniform1f(speedLocation, 0.001);

                            const pointer = {
                                x: 0.5,
                                y: 0.5,
                                targetX: 0.5,
                                targetY: 0.5
                            };

                            let frameId = 0;
                            let lastWidth = 0;
                            let lastHeight = 0;
                            let isVisible = !document.hidden;

                            const draw = (time) => {
                                pointer.x += (pointer.targetX - pointer.x) * 0.12;
                                pointer.y += (pointer.targetY - pointer.y) * 0.12;

                                gl.uniform1f(timeLocation, reducedMotion ? 0 : time);
                                gl.uniform2f(pointerLocation, pointer.x, 1 - pointer.y);
                                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                            };

                            const animate = (time) => {
                                if (!isVisible || reducedMotion) return;

                                draw(time);
                                frameId = window.requestAnimationFrame(animate);
                            };

                            const startAnimation = () => {
                                if (reducedMotion || !isVisible || frameId) return;
                                frameId = window.requestAnimationFrame(animate);
                            };

                            const stopAnimation = () => {
                                if (!frameId) return;
                                window.cancelAnimationFrame(frameId);
                                frameId = 0;
                            };

                            const resizeCanvas = () => {
                                const rect = canvas.getBoundingClientRect();
                                const ratio = Math.min(window.devicePixelRatio || 1, 2);
                                const width = Math.max(1, Math.round(rect.width * ratio));
                                const height = Math.max(1, Math.round(rect.height * ratio));

                                if (width === lastWidth && height === lastHeight) return;

                                lastWidth = width;
                                lastHeight = height;

                                canvas.width = width;
                                canvas.height = height;

                                gl.viewport(0, 0, width, height);
                                gl.uniform1f(ratioLocation, width / height);

                                draw(performance.now());
                            };

                            const updatePointer = (event) => {
                                const rect = canvas.getBoundingClientRect();

                                if (!rect.width || !rect.height) return;

                                pointer.targetX = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
                                pointer.targetY = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
                            };

                            canvas.addEventListener("pointermove", updatePointer, { passive: true });

                            if ("ResizeObserver" in window) {
                                const observer = new ResizeObserver(resizeCanvas);
                                observer.observe(canvas);
                            } else {
                                window.addEventListener("resize", resizeCanvas, { passive: true });
                            }

                            document.addEventListener("visibilitychange", () => {
                                isVisible = !document.hidden;

                                if (isVisible) {
                                    resizeCanvas();
                                    startAnimation();
                                } else {
                                    stopAnimation();
                                }
                            });

                            resizeCanvas();
                            startAnimation();
                        }
                    } else {
                        console.error(gl.getProgramInfoLog(program));
                    }

                    gl.deleteShader(vertexShader);
                    gl.deleteShader(fragmentShader);
                }
            }
        }
    }

    const cookieKey = "tagback-cookies-accepted";
    const cookieBanner = $("#cookie-banner");

    if (cookieBanner) {
        let cookieChoice = null;

        try {
            cookieChoice = localStorage.getItem(cookieKey);
        } catch (_) {}

        const closeCookieBanner = (value) => {
            try {
                localStorage.setItem(cookieKey, value);
            } catch (_) {}

            cookieBanner.classList.remove("is-visible");

            window.setTimeout(() => {
                cookieBanner.remove();
            }, 450);
        };

        if (cookieChoice === "0" || cookieChoice === "1") {
            cookieBanner.remove();
        } else {
            window.setTimeout(() => {
                if (cookieBanner.isConnected) {
                    cookieBanner.classList.add("is-visible");
                }
            }, 1200);
        }

        const acceptButton = $("[data-cookie-accept]", cookieBanner);
        const rejectButton = $("[data-cookie-reject]", cookieBanner);

        if (acceptButton) {
            acceptButton.addEventListener("click", () => closeCookieBanner("1"));
        }

        if (rejectButton) {
            rejectButton.addEventListener("click", () => closeCookieBanner("0"));
        }
    }

    const menuToggle = $(".menu-toggle");
    const mainNav = $(".main-nav");
    const header = $(".site-header");

    if (menuToggle && mainNav && header) {
        const closeMenu = () => {
            header.classList.remove("menu-open");
            document.body.classList.remove("menu-open");
            mainNav.classList.remove("is-open");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");
        };

        const openMenu = () => {
            header.classList.add("menu-open");
            document.body.classList.add("menu-open");
            mainNav.classList.add("is-open");
            menuToggle.classList.add("active");
            menuToggle.setAttribute("aria-expanded", "true");
            menuToggle.setAttribute("aria-label", "Cerrar menú");
        };

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");

        menuToggle.addEventListener("click", () => {
            if (mainNav.classList.contains("is-open")) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        $$("a", mainNav).forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("click", (event) => {
            if (mainNav.classList.contains("is-open") && !header.contains(event.target)) {
                closeMenu();
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && mainNav.classList.contains("is-open")) {
                closeMenu();
                menuToggle.focus();
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 780) {
                closeMenu();
            }
        }, { passive: true });
    }

    if (header) {
        let ticking = false;

        const updateHeader = () => {
            header.classList.toggle("scrolled", window.scrollY > 20);
            ticking = false;
        };

        window.addEventListener("scroll", () => {
            if (ticking) return;

            ticking = true;
            window.requestAnimationFrame(updateHeader);
        }, { passive: true });

        updateHeader();
    }

    $$(".service-card").forEach((item) => {
        const button = $(".service-card-header", item);

        if (!button) return;

        button.setAttribute("aria-expanded", String(item.classList.contains("is-open")));

        button.addEventListener("click", () => {
            const shouldOpen = !item.classList.contains("is-open");
            const group = item.parentElement;

            if (group) {
                $$(".service-card", group).forEach((sibling) => {
                    sibling.classList.remove("is-open");

                    const siblingButton = $(".service-card-header", sibling);

                    if (siblingButton) {
                        siblingButton.setAttribute("aria-expanded", "false");
                    }
                });
            }

            item.classList.toggle("is-open", shouldOpen);
            button.setAttribute("aria-expanded", String(shouldOpen));
        });
    });

    const faqItems = $$(".faq-item");

    faqItems.forEach((item) => {
        if (item.tagName !== "DETAILS") return;

        item.addEventListener("toggle", () => {
            if (!item.open) return;

            faqItems.forEach((other) => {
                if (other !== item && other.tagName === "DETAILS") {
                    other.open = false;
                }
            });
        });
    });

    const projectRadios = $$('input[name="project_type"]');

    const choosePlan = (value) => {
        if (!value) return false;

        const radio = projectRadios.find((item) => item.value === value);

        if (!radio) return false;

        radio.checked = true;
        radio.dispatchEvent(new Event("change", { bubbles: true }));

        const fieldset = radio.closest("fieldset");

        if (fieldset) {
            fieldset.classList.add("is-prefilled");

            window.setTimeout(() => {
                fieldset.classList.remove("is-prefilled");
            }, 1400);
        }

        return true;
    };

    $$("[data-plan]").forEach((card) => {
        const selectCardPlan = () => {
            const plan = card.getAttribute("data-plan");

            if (!plan) return;

            try {
                sessionStorage.setItem("tagback-selected-plan", plan);
            } catch (_) {}

            choosePlan(plan);
        };

        card.addEventListener("click", (event) => {
            if (event.target.closest("a, button, input, select, textarea, label")) return;

            selectCardPlan();
        });

        if (!["A", "BUTTON"].includes(card.tagName) && !card.hasAttribute("tabindex")) {
            card.setAttribute("tabindex", "0");
        }

        card.addEventListener("keydown", (event) => {
            if (event.target !== card || !["Enter", " "].includes(event.key)) return;
            if (["A", "BUTTON"].includes(card.tagName)) return;

            event.preventDefault();
            selectCardPlan();
        });
    });

    const applyPlanFromLocation = () => {
        let selected = "";

        try {
            selected = sessionStorage.getItem("tagback-selected-plan") || "";
        } catch (_) {}

        const params = new URLSearchParams(window.location.search);
        selected = params.get("plan") || selected;

        if (selected && choosePlan(selected)) {
            try {
                sessionStorage.removeItem("tagback-selected-plan");
            } catch (_) {}
        }
    };

    applyPlanFromLocation();

    const quoteForm = $(".quote-form");

    if (quoteForm) {
        const formSubmit = $(".quote-form-submit", quoteForm);
        const submitButton = $('button[type="submit"]', quoteForm);
        const defaultButtonText = submitButton ? submitButton.textContent : "";

        const showFeedback = (type, message) => {
            if (!formSubmit) return;

            let feedback = $(".form-feedback", quoteForm);

            if (!feedback) {
                feedback = document.createElement("p");
                feedback.className = "form-feedback";
                formSubmit.appendChild(feedback);
            }

            feedback.className = `form-feedback form-feedback--${type}`;
            feedback.textContent = message;
            feedback.setAttribute("role", "status");
            feedback.setAttribute("aria-live", "polite");
        };

        const clearFeedback = () => {
            const feedback = $(".form-feedback", quoteForm);

            if (feedback) {
                feedback.remove();
            }
        };

        const getFieldError = (field) => {
            if (field.validity.valueMissing) {
                return "Este campo es obligatorio.";
            }

            if (field.validity.typeMismatch && field.type === "email") {
                return "Ingresá un correo electrónico válido.";
            }

            if (!field.checkValidity()) {
                return "Revisá este dato.";
            }

            return "";
        };

        const setFieldError = (field, message) => {
            const wrapper = field.closest(".form-field") || field.closest(".form-fieldset");

            if (!wrapper) return;

            let error = $(".form-field-error", wrapper);

            if (!error) {
                error = document.createElement("span");
                error.className = "form-field-error";
                wrapper.appendChild(error);
            }

            if (message) {
                field.setAttribute("aria-invalid", "true");
                error.textContent = message;
                error.classList.add("is-visible");
            } else {
                field.removeAttribute("aria-invalid");
                error.textContent = "";
                error.classList.remove("is-visible");
            }
        };

        const validateField = (field) => {
            const message = getFieldError(field);

            setFieldError(field, message);

            return !message;
        };

        const validateRadioGroup = (field) => {
            const group = $$(`input[name="${CSS.escape(field.name)}"]`, quoteForm);

            if (!group.length) return true;

            const valid = group.some((radio) => radio.checked);

            group.forEach((radio) => {
                setFieldError(radio, valid ? "" : "Seleccioná una opción.");
            });

            return valid;
        };

        $$("input, textarea, select", quoteForm).forEach((field) => {
            field.addEventListener("blur", () => {
                if (field.type === "radio") {
                    validateRadioGroup(field);
                } else {
                    validateField(field);
                }
            });

            field.addEventListener("input", () => {
                if (field.getAttribute("aria-invalid") === "true") {
                    validateField(field);
                }
            });

            field.addEventListener("change", () => {
                if (field.type === "radio") {
                    validateRadioGroup(field);
                } else if (field.getAttribute("aria-invalid") === "true") {
                    validateField(field);
                }
            });
        });

        quoteForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            clearFeedback();

            const fields = $$("input, textarea, select", quoteForm);
            const processedGroups = new Set();
            let valid = true;

            fields.forEach((field) => {
                if (field.type === "radio") {
                    if (processedGroups.has(field.name)) return;

                    processedGroups.add(field.name);

                    if (!validateRadioGroup(field)) {
                        valid = false;
                    }
                } else if (!validateField(field)) {
                    valid = false;
                }
            });

            if (!valid) {
                const firstInvalid = $('[aria-invalid="true"]', quoteForm);

                if (firstInvalid) {
                    firstInvalid.focus();
                }

                return;
            }

            const action = quoteForm.getAttribute("action") || "";

            if (!action || action === "#" || action.includes("TU_ID")) {
                showFeedback(
                    "info",
                    "El formulario todavía no está configurado. Mientras tanto, escribinos a hola@tagback.com."
                );

                return;
            }

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.setAttribute("aria-busy", "true");
                submitButton.textContent = "Enviando...";
            }

            try {
                const response = await fetch(action, {
                    method: "POST",
                    body: new FormData(quoteForm),
                    headers: {
                        Accept: "application/json"
                    }
                });

                if (!response.ok) {
                    throw new Error("No se pudo enviar el formulario.");
                }

                showFeedback("success", "Tu consulta fue enviada correctamente.");
                quoteForm.reset();

                $$('[aria-invalid="true"]', quoteForm).forEach((field) => {
                    field.removeAttribute("aria-invalid");
                });

                $$(".form-field-error", quoteForm).forEach((error) => {
                    error.textContent = "";
                    error.classList.remove("is-visible");
                });
            } catch (_) {
                showFeedback(
                    "error",
                    "No pudimos enviar tu consulta. Intentá nuevamente o escribinos a hola@tagback.com."
                );
            } finally {
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.removeAttribute("aria-busy");
                    submitButton.textContent = defaultButtonText;
                }
            }
        });
    }

    if (!reducedMotion && finePointer) {
        let frameId = 0;
        let x = window.innerWidth * 0.5;
        let y = window.innerHeight * 0.35;
        let targetX = x;
        let targetY = y;

        const updateCursorLight = () => {
            x += (targetX - x) * 0.12;
            y += (targetY - y) * 0.12;

            document.documentElement.style.setProperty("--mouse-x", `${x}px`);
            document.documentElement.style.setProperty("--mouse-y", `${y}px`);

            if (Math.abs(targetX - x) > 0.4 || Math.abs(targetY - y) > 0.4) {
                frameId = window.requestAnimationFrame(updateCursorLight);
            } else {
                frameId = 0;
            }
        };

        document.addEventListener("pointermove", (event) => {
            targetX = event.clientX;
            targetY = event.clientY;

            if (!frameId) {
                frameId = window.requestAnimationFrame(updateCursorLight);
            }
        }, { passive: true });

        window.addEventListener("blur", () => {
            targetX = window.innerWidth * 0.5;
            targetY = window.innerHeight * 0.35;

            if (!frameId) {
                frameId = window.requestAnimationFrame(updateCursorLight);
            }
        });
    }

    $$("[data-current-year]").forEach((element) => {
        element.textContent = new Date().getFullYear();
    });
});
