/* =========================================================
   TAGBACK — JAVASCRIPT
   ========================================================= */

const translations = {
    es: {
        skip_link: "Saltar al contenido principal",
        nav_services: "Servicios",
        nav_solutions: "Qué necesitás",
        nav_benefits: "Por qué tagback",
        nav_projects: "Ideas",
        nav_process: "Cómo trabajamos",
        nav_plans: "Planes",
        nav_faq: "Preguntas",
        nav_contact: "Pedí presupuesto",
        nav_home: "Inicio",
        nav_privacy: "Política de Privacidad",
        nav_cookies: "Política de Cookies",

        hero_eyebrow: "WEBS, APPS A MEDIDA, MANTENIMIENTO Y PUBLICIDAD ONLINE",
        hero_title_aria: "Tu web no debería costarte plata. Debería ganártela.",
        hero_lead: "Creamos tu web o app a medida, la mantenemos al día y la hacemos crecer con publicidad online. Todo en un solo equipo, pensado para que tu inversión vuelva en clientes.",
        hero_cta_primary: "Quiero mi presupuesto gratis",
        hero_cta_secondary: "Ver servicios y precios",
        
        trust_1: "✓ Web desde USD 200",
        trust_2: "✓ Entrega desde 15 días",
        trust_3: "✓ Hosting el primer año incluido",
        trust_4: "✓ Presupuesto sin cargo",

        services_title: "Todo lo que tu negocio necesita online, en un solo lugar",
        services_desc: "Desde la web hasta los anuncios. Vos atendés a tus clientes, nosotros nos ocupamos del resto.",

        solutions_title: "¿Qué necesitás para tu negocio?",
        solutions_desc: "Elegí tu objetivo y te decimos cuál es la mejor opción.",

        why_title: "Por qué trabajar con tagback",
        why_desc: "Te decimos qué vas a recibir, cuándo y cuánto sale. Sin sorpresas.",

        work_title: "Mirá qué podés tener en tu negocio",
        work_desc: "Algunas ideas de lo que armamos a medida de cada cliente.",
        work_link: "Quiero algo así →",
        
        process_title: "Cómo trabajamos",
        process_desc: "Cinco pasos simples, siempre sabés en cuál estamos.",

        plans_title: "Elegí el plan para tu etapa",
        plans_desc: "Precios claros, pago único y plazo de entrega definido.",
        plan_badge: "MÁS ELEGIDO",

        care_title: "Tu web no termina cuando la publicamos",
        care_desc: "Una web sin cuidado se rompe, se queda vieja y deja de traer clientes. Nosotros la mantenemos y la hacemos crecer.",

        faq_title: "Preguntas frecuentes",
        faq_desc: "Lo que más nos preguntan antes de empezar.",

        contact_title: "Pedí tu presupuesto sin cargo",
        contact_desc: "Contanos qué necesitás y te respondemos con una propuesta clara. Sin compromiso.",
        
        form_title: "Contanos tu proyecto",
        form_lead: "Completá los datos y te contactamos.",
        form_name: "Nombre *",
        form_name_ph: "Tu nombre",
        form_email: "Correo electrónico *",
        form_email_ph: "tu@correo.com",
        form_phone: "WhatsApp o teléfono",
        form_phone_ph: "Ingresá tu número de teléfono",
        form_budget: "¿Cuánto pensás invertir? (opcional)",
        form_budget_ph: "Seleccioná un rango",
        form_type: "¿Qué necesitás? *",
        form_msg: "Contanos tu idea *",
        form_msg_ph: "Ej: Tengo un local de ropa y quiero vender por internet",
        form_submit: "Quiero mi presupuesto",
        form_response_time: "Te respondemos de lunes a viernes, de 9 a 18 h. Al enviar aceptás nuestra Política de Privacidad.",
        
        form_sending: "Enviando...",
        form_success: "Tu consulta fue enviada correctamente. Te vamos a contactar a la brevedad.",
        form_error: "No pudimos enviar tu consulta. Intentá nuevamente o escribinos a hola@tagback.com.",
        form_pending: "Estamos configurando el formulario. Mientras tanto, escribinos a hola@tagback.com o por WhatsApp.",
        form_err_required: "Este campo es obligatorio.",
        form_err_email: "Ingresá un correo electrónico válido.",
        form_err_check: "Revisá este dato.",

        foot_contact: "CONTACTO",
        foot_privacy: "PRIVACIDAD / LEGAL",
        foot_phone: "TELÉFONO",
        foot_location: "UBICACIÓN",
        foot_hours: "HORARIO DE ATENCIÓN",
        foot_nav: "NAVEGACIÓN",
        foot_legal: "LEGAL",
        foot_rights: "Webs, apps y publicidad online para negocios argentinos.",
        foot_credit: "Diseño y desarrollo por",

        cookie_title: "Uso de cookies",
        cookie_desc: "Usamos cookies para medir cómo se usa el sitio y mejorarlo. Podés aceptarlas o rechazarlas.",
        cookie_accept: "Aceptar",
        cookie_reject: "Rechazar",

        back_home: "← Volver al inicio",
        legal_eyebrow: "LEGAL",
        legal_updated: "Última actualización: 2026",
        privacy_title: "Política de Privacidad",
        privacy_intro: "En tagback respetamos tu privacidad y nos comprometemos a proteger los datos personales que nos compartís.",
        privacy_h2_1: "1. Responsable del tratamiento",
        privacy_p_1: "El responsable del tratamiento de los datos personales recopilados a través de este sitio es tagback, con correo de contacto hola@tagback.com.",
        privacy_h2_2: "2. Qué datos recopilamos",
        privacy_p_2: "Recopilamos únicamente los datos que nos brindás voluntariamente:",
        privacy_li_1: "Nombre",
        privacy_li_2: "Correo electrónico",
        privacy_li_3: "Teléfono (opcional)",
        privacy_li_4: "Tipo de proyecto y mensaje que nos enviás",
        privacy_h2_3: "3. Para qué usamos los datos",
        privacy_li_5: "Responder consultas y solicitudes de presupuesto",
        privacy_li_6: "Coordinar reuniones y propuestas comerciales",
        privacy_li_7: "Enviarte información relacionada con tu proyecto",
        privacy_li_8: "Analizar el uso del sitio para mejorarlo",
        privacy_p_3: "No usamos tus datos para fines distintos a los que los proporcionaste.",
        privacy_h2_4: "4. Base legal",
        privacy_p_4: "Tratamos tus datos en base a tu consentimiento expreso al enviarnos el formulario de contacto.",
        privacy_h2_5: "5. Con quién compartimos los datos",
        privacy_p_5: "No vendemos ni compartimos tus datos con terceros con fines comerciales.",
        privacy_h2_6: "6. Cuánto tiempo conservamos los datos",
        privacy_p_6: "Conservamos los datos de contacto mientras exista una relación comercial activa o potencial.",
        privacy_h2_7: "7. Tus derechos",
        privacy_p_7: "De acuerdo con la Ley 25.326 de Protección de Datos Personales de Argentina, tenés derecho a:",
        privacy_li_9: "Acceder a los datos que tenemos sobre vos",
        privacy_li_10: "Rectificarlos si están incorrectos",
        privacy_li_11: "Solicitar su eliminación",
        privacy_li_12: "Oponerte a su tratamiento",
        privacy_li_13: "Retirar tu consentimiento en cualquier momento",
        privacy_p_8: "Para ejercer cualquiera de estos derechos, escribinos a hola@tagback.com.",
        privacy_h2_8: "8. Seguridad",
        privacy_p_9: "Aplicamos medidas técnicas y organizativas razonables para proteger tus datos.",
        privacy_h2_9: "9. Menores de edad",
        privacy_p_10: "Este sitio no está dirigido a menores de 18 años.",
        privacy_h2_10: "10. Cambios en esta política",
        privacy_p_11: "Podemos actualizar esta Política de Privacidad cuando sea necesario.",
        privacy_h2_11: "11. Contacto",
        privacy_p_12: "Para cualquier consulta escribinos a hola@tagback.com.",
        cookies_title: "Política de Cookies",
        cookies_intro: "Esta política explica qué son las cookies y cómo podés gestionarlas.",
        cookies_h2_1: "1. Qué son las cookies",
        cookies_p_1: "Las cookies son pequeños archivos de texto que los sitios web guardan en tu dispositivo.",
        cookies_h2_2: "2. Qué cookies usamos",
        cookies_h3_1: "Cookies necesarias",
        cookies_p_2: "Son imprescindibles para que el sitio funcione correctamente.",
        cookies_li_1: "Preferencia de consentimiento de cookies (localStorage)",
        cookies_li_2: "Funcionamiento básico del sitio y seguridad",
        cookies_h3_2: "Cookies analíticas",
        cookies_p_3: "Nos ayudan a entender cómo se usa el sitio.",
        cookies_li_3: "Google Analytics (si está activado)",
        cookies_li_4: "Métricas de rendimiento y errores",
        cookies_h3_3: "Cookies de marketing",
        cookies_p_4: "Se usan para mostrarte anuncios relevantes en otros sitios.",
        cookies_li_5: "Google Ads (si está activado)",
        cookies_li_6: "Meta Ads (si está activado)",
        cookies_h2_3: "3. Cookies de terceros",
        cookies_p_5: "Algunos servicios que usamos pueden instalar sus propias cookies:",
        cookies_li_7: "para analítica web",
        cookies_li_8: "para gestionar el formulario de contacto",
        cookies_h2_4: "4. Cómo gestionar las cookies",
        cookies_p_6: "Podés cambiar tus preferencias en cualquier momento desde la configuración de tu navegador:",
        cookies_p_7: "Si bloqueás todas las cookies, algunas funciones del sitio podrían no funcionar.",
        cookies_h2_5: "5. Cómo revocar tu consentimiento",
        cookies_p_8_a: "Podés eliminar las cookies guardadas desde tu navegador. Si querés resetear tu elección actual, escribinos a",
        cookies_h2_6: "6. Actualizaciones",
        cookies_p_9: "Podemos actualizar esta Política de Cookies cuando cambien las herramientas.",
        cookies_h2_7: "7. Contacto",
        cookies_p_10_a: "Para consultas sobre cookies, escribinos a"
    },
    en: {
        skip_link: "Skip to main content",
        nav_services: "Services",
        nav_solutions: "What you need",
        nav_benefits: "Why tagback",
        nav_projects: "Ideas",
        nav_process: "How we work",
        nav_plans: "Plans",
        nav_faq: "FAQ",
        nav_contact: "Get a quote",
        nav_home: "Home",
        nav_privacy: "Privacy Policy",
        nav_cookies: "Cookie Policy",

        hero_eyebrow: "WEBSITES, CUSTOM APPS, MAINTENANCE AND ONLINE ADVERTISING",
        hero_title_aria: "Your website shouldn't cost you money. It should make you money.",
        hero_lead: "We create your custom website or app, keep it up to date, and grow it with online advertising. All in one team, designed so your investment returns in clients.",
        hero_cta_primary: "I want my free quote",
        hero_cta_secondary: "See services and prices",
        
        trust_1: "✓ Websites from USD 200",
        trust_2: "✓ Delivery from 15 days",
        trust_3: "✓ First year hosting included",
        trust_4: "✓ Free quote",

        services_title: "Everything your business needs online, in one place",
        services_desc: "From the website to the ads. You take care of your clients, we take care of the rest.",

        solutions_title: "What do you need for your business?",
        solutions_desc: "Choose your goal and we'll tell you the best option.",

        why_title: "Why work with tagback",
        why_desc: "We tell you what you'll receive, when, and how much it costs. No surprises.",

        work_title: "See what you can have in your business",
        work_desc: "Some ideas of what we build tailored to each client.",
        work_link: "I want something like this →",
        
        process_title: "How we work",
        process_desc: "Five simple steps, you always know where we are.",

        plans_title: "Choose the plan for your stage",
        plans_desc: "Clear prices, one-time payment, and defined delivery time.",
        plan_badge: "MOST CHOSEN",

        care_title: "Your website doesn't end when we publish it",
        care_desc: "A website without care breaks, gets old, and stops bringing clients. We maintain it and make it grow.",

        faq_title: "Frequently asked questions",
        faq_desc: "What they ask us most before starting.",

        contact_title: "Request your free quote",
        contact_desc: "Tell us what you need and we'll reply with a clear proposal. No commitment.",
        
        form_title: "Tell us about your project",
        form_lead: "Fill in the details and we'll contact you.",
        form_name: "Name *",
        form_name_ph: "Your name",
        form_email: "Email address *",
        form_email_ph: "you@email.com",
        form_phone: "WhatsApp or phone",
        form_phone_ph: "Enter your phone number",
        form_budget: "How much do you plan to invest? (optional)",
        form_budget_ph: "Select a range",
        form_type: "What do you need? *",
        form_msg: "Tell us your idea *",
        form_msg_ph: "E.g.: I have a clothing store and I want to sell online",
        form_submit: "I want my quote",
        form_response_time: "We reply Monday to Friday, 9am to 6pm. By submitting you accept our Privacy Policy.",
        
        form_sending: "Sending...",
        form_success: "Your inquiry was sent successfully. We'll contact you shortly.",
        form_error: "We couldn't send your inquiry. Try again or email hola@tagback.com.",
        form_pending: "The form is being configured. In the meantime, email hola@tagback.com or reach us on WhatsApp.",
        form_err_required: "This field is required.",
        form_err_email: "Enter a valid email address.",
        form_err_check: "Check this field.",

        foot_contact: "CONTACT",
        foot_privacy: "PRIVACY / LEGAL",
        foot_phone: "PHONE",
        foot_location: "LOCATION",
        foot_hours: "BUSINESS HOURS",
        foot_nav: "NAVIGATION",
        foot_legal: "LEGAL",
        foot_rights: "Websites, apps and online advertising for Argentine businesses.",
        foot_credit: "Design & development by",

        cookie_title: "Cookie usage",
        cookie_desc: "We use cookies to measure how the site is used and improve it. You can accept or reject them.",
        cookie_accept: "Accept",
        cookie_reject: "Reject",

        back_home: "← Back to home",
        legal_eyebrow: "LEGAL",
        legal_updated: "Last updated: 2026",
        privacy_title: "Privacy Policy",
        privacy_intro: "At tagback we respect your privacy and are committed to protecting the personal data you share with us.",
        privacy_h2_1: "1. Data controller",
        privacy_p_1: "The data controller is tagback, contact email hola@tagback.com.",
        privacy_h2_2: "2. What data we collect",
        privacy_p_2: "We only collect the data you voluntarily provide:",
        privacy_li_1: "Name",
        privacy_li_2: "Email address",
        privacy_li_3: "Phone (optional)",
        privacy_li_4: "Project type and message you send us",
        privacy_h2_3: "3. How we use the data",
        privacy_li_5: "Respond to inquiries and quote requests",
        privacy_li_6: "Coordinate meetings and commercial proposals",
        privacy_li_7: "Send you information related to your project",
        privacy_li_8: "Analyze site usage to improve it",
        privacy_p_3: "We do not use your data for purposes other than those you provided it for.",
        privacy_h2_4: "4. Legal basis",
        privacy_p_4: "We process your data based on your express consent when sending us the contact form.",
        privacy_h2_5: "5. Who we share data with",
        privacy_p_5: "We do not sell or share your data with third parties for commercial purposes.",
        privacy_h2_6: "6. How long we keep the data",
        privacy_p_6: "We keep contact data while there is an active or potential commercial relationship.",
        privacy_h2_7: "7. Your rights",
        privacy_p_7: "According to Law 25.326 in Argentina, you have the right to:",
        privacy_li_9: "Access the data we have about you",
        privacy_li_10: "Rectify it if it is incorrect",
        privacy_li_11: "Request its deletion",
        privacy_li_12: "Object to its processing",
        privacy_li_13: "Withdraw your consent at any time",
        privacy_p_8: "To exercise these rights, write to hola@tagback.com.",
        privacy_h2_8: "8. Security",
        privacy_p_9: "We apply reasonable technical and organizational measures to protect your data.",
        privacy_h2_9: "9. Minors",
        privacy_p_10: "This site is not directed at minors under 18.",
        privacy_h2_10: "10. Changes to this policy",
        privacy_p_11: "We may update this Privacy Policy when necessary.",
        privacy_h2_11: "11. Contact",
        privacy_p_12: "For any questions write to hola@tagback.com.",
        cookies_title: "Cookie Policy",
        cookies_intro: "This policy explains what cookies are and how you can manage them.",
        cookies_h2_1: "1. What are cookies",
        cookies_p_1: "Cookies are small text files that websites store on your device.",
        cookies_h2_2: "2. What cookies we use",
        cookies_h3_1: "Necessary cookies",
        cookies_p_2: "They are essential for the site to function correctly.",
        cookies_li_1: "Cookie consent preference (localStorage)",
        cookies_li_2: "Basic site operation and security",
        cookies_h3_2: "Analytical cookies",
        cookies_p_3: "They help us understand how the site is used.",
        cookies_li_3: "Google Analytics (if activated)",
        cookies_li_4: "Performance and error metrics",
        cookies_h3_3: "Marketing cookies",
        cookies_p_4: "They are used to show you relevant ads on other sites.",
        cookies_li_5: "Google Ads (if activated)",
        cookies_li_6: "Meta Ads (if activated)",
        cookies_h2_3: "3. Third-party cookies",
        cookies_p_5: "Some services we use may install their own cookies:",
        cookies_li_7: "for web analytics",
        cookies_li_8: "to manage the contact form",
        cookies_h2_4: "4. How to manage cookies",
        cookies_p_6: "You can change your preferences at any time from your browser settings:",
        cookies_p_7: "If you block all cookies, some site functions may not work correctly.",
        cookies_h2_5: "5. How to withdraw your consent",
        cookies_p_8_a: "You can delete saved cookies from your browser. If you want to reset your current choice, write to",
        cookies_h2_6: "6. Updates",
        cookies_p_9: "We may update this Cookie Policy when the tools we use change.",
        cookies_h2_7: "7. Contact",
        cookies_p_10_a: "For cookie inquiries, write to"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* HERO */
    const canvas = document.getElementById('neural-canvas');
    if (canvas) {
        let gl;
        let uniforms;
        let animationFrameId;
        const pointer = { x: 0, y: 0, tX: 0, tY: 0 };
        const color = [230 / 255, 115 / 255, 159 / 255]; // Rosa
        const speed = 0.001;

        const initShader = () => {
            const vsSource = `
                precision mediump float;
                varying vec2 vUv;
                attribute vec2 a_position;
                void main() {
                    vUv = 0.5 * (a_position + 1.0);
                    gl_Position = vec4(a_position, 0.0, 1.0);
                }
            `;
            const fsSource = `
                precision mediump float;
                varying vec2 vUv;
                uniform float u_time;
                uniform float u_ratio;
                uniform vec2 u_pointer_position;
                uniform vec3 u_color;
                uniform float u_speed;
                vec2 rotate(vec2 uv, float th) {
                    return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
                }
                float neuro_shape(vec2 uv, float t, float p) {
                    vec2 sine_acc = vec2(0.0);
                    vec2 res = vec2(0.0);
                    float scale = 8.0;
                    for (int j = 0; j < 15; j++) {
                        uv = rotate(uv, 1.0);
                        sine_acc = rotate(sine_acc, 1.0);
                        vec2 layer = uv * scale + float(j) + sine_acc - t;
                        sine_acc += sin(layer) + 2.4 * p;
                        res += (0.5 + 0.5 * cos(layer)) / scale;
                        scale *= 1.2;
                    }
                    return res.x + res.y;
                }
                void main() {
                    vec2 uv = 0.5 * vUv;
                    uv.x *= u_ratio;
                    vec2 pointer = vUv - u_pointer_position;
                    pointer.x *= u_ratio;
                    float p = clamp(length(pointer), 0.0, 1.0);
                    p = 0.5 * pow(1.0 - p, 2.0);
                    float t = u_speed * u_time;
                    vec3 col = vec3(0.0);
                    float noise = neuro_shape(uv, t, p);
                    noise = 1.2 * pow(noise, 3.0);
                    noise += pow(noise, 10.0);
                    noise = max(0.0, noise - 0.5);
                    noise *= (1.0 - length(vUv - 0.5));
                    col = u_color * noise;
                    gl_FragColor = vec4(col, noise);
                }
            `;

            gl = canvas.getContext('webgl', { alpha: true, antialias: true }) || canvas.getContext('experimental-webgl', { alpha: true, antialias: true });
            if (!gl) return null;

            const createShader = (source, type) => {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return null;
                return shader;
            };

            const createProgram = (vs, fs) => {
                const program = gl.createProgram();
                gl.attachShader(program, vs);
                gl.attachShader(program, fs);
                gl.linkProgram(program);
                if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
                return program;
            };

            const vertexShader = createShader(vsSource, gl.VERTEX_SHADER);
            const fragmentShader = createShader(fsSource, gl.FRAGMENT_SHADER);
            const shaderProgram = createProgram(vertexShader, fragmentShader);
            if (!shaderProgram) return null;

            uniforms = {};
            const uniformCount = gl.getProgramParameter(shaderProgram, gl.ACTIVE_UNIFORMS);
            for (let i = 0; i < uniformCount; i++) {
                const uniformName = gl.getActiveUniform(shaderProgram, i).name;
                uniforms[uniformName] = gl.getUniformLocation(shaderProgram, uniformName);
            }

            const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
            const vertexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
            gl.useProgram(shaderProgram);

            const positionLocation = gl.getAttribLocation(shaderProgram, 'a_position');
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            gl.uniform3f(uniforms.u_color, color[0], color[1], color[2]);
            gl.uniform1f(uniforms.u_speed, speed);

            return gl;
        };

        const resizeCanvas = () => {
            const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
            canvas.width = canvas.clientWidth * devicePixelRatio;
            canvas.height = canvas.clientHeight * devicePixelRatio;
            if (uniforms && uniforms.u_ratio) {
                gl.uniform1f(uniforms.u_ratio, canvas.width / canvas.height);
            }
            gl.viewport(0, 0, canvas.width, canvas.height);
        };

        const render = () => {
            const currentTime = performance.now();
            pointer.x += (pointer.tX - pointer.x) * 0.2;
            pointer.y += (pointer.tY - pointer.y) * 0.2;

            if (gl && uniforms) {
                gl.uniform1f(uniforms.u_time, currentTime);
                const rect = canvas.getBoundingClientRect();
                const relX = (pointer.x - rect.left) / rect.width;
                const relY = 1 - ((pointer.y - rect.top) / rect.height);
                gl.uniform2f(uniforms.u_pointer_position, relX, relY);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            }
            animationFrameId = requestAnimationFrame(render);
        };

        const setupEvents = () => {
            const updateMousePosition = (x, y) => {
                pointer.tX = x;
                pointer.tY = y;
            };
            const pointermove = (e) => updateMousePosition(e.clientX, e.clientY);
            const touchmove = (e) => {
                if (e.targetTouches[0]) updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
            };

            window.addEventListener('pointermove', pointermove, { passive: true });
            window.addEventListener('touchmove', touchmove, { passive: true });
        };

        if (!reducedMotion) {
            gl = initShader();
            if (gl) {
                setupEvents();
                resizeCanvas();
                window.addEventListener('resize', resizeCanvas);
                render();
            }
        }
    }

    /* LANGUAGE */
    const applyLanguage = (lang) => {
        const dict = translations[lang];
        if (!dict) return;

        document.documentElement.lang = lang;

        try {
            localStorage.setItem("tagback-lang", lang);
        } catch (_) {}

        $$("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (Object.prototype.hasOwnProperty.call(dict, key)) {
                el.textContent = dict[key];
            }
        });

        $$("[data-i18n-placeholder]").forEach((el) => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (Object.prototype.hasOwnProperty.call(dict, key)) {
                el.setAttribute("placeholder", dict[key]);
            }
        });

        const heroTitle = $(".hero-title");
        if (heroTitle) {
            const wordsByLang = {
                es: ["Tu", "web", "no", "debería", "costarte", "plata.", "Debería", "ganártela."],
                en: ["Your", "website", "shouldn't", "cost", "you", "money.", "It", "should", "make", "you", "money."]
            };
            const words = wordsByLang[lang] || wordsByLang.es;
            const accentIndex = lang === "en" ? 5 : 6; 

            const line1Count = lang === "en" ? 6 : 6;
            
            const lines = [[], []];
            words.forEach((w, i) => {
                if (i < line1Count) lines[0].push({ w, i });
                else lines[1].push({ w, i });
            });

            heroTitle.setAttribute("aria-label", dict.hero_title_aria || "");
            heroTitle.innerHTML = lines.map((lineWords) => {
                const inner = lineWords.map(({ w, i }) => {
                    const isAccent = i === accentIndex;
                    const cls = isAccent ? "word word--accent" : "word";
                    const underline = isAccent ? '<span class="underline" aria-hidden="true"></span>' : "";
                    return `<span class="${cls}" style="--i:${i + 1}" aria-hidden="true">${w}${underline}</span>`;
                }).join(" ");
                return `<span class="reveal-line" aria-hidden="true">${inner}</span>`;
            }).join("");
        }

        $$(".lang-btn").forEach((btn) => {
            const active = btn.getAttribute("data-lang") === lang;
            btn.classList.toggle("active", active);
            btn.setAttribute("aria-pressed", String(active));
        });

        const menuToggle = $(".menu-toggle");
        if (menuToggle) {
            menuToggle.setAttribute("aria-label", lang === "en" ? "Open menu" : "Abrir menú");
        }

        const feedback = $(".form-feedback");
        if (feedback) {
            const type = feedback.classList.contains("form-feedback--success") ? "success"
                       : feedback.classList.contains("form-feedback--error") ? "error"
                       : "info";
            const msgKey = type === "success" ? "form_success" : type === "error" ? "form_error" : "form_pending";
            feedback.textContent = dict[msgKey] || feedback.textContent;
        }
    };

    let savedLang = "es";
    try {
        savedLang = localStorage.getItem("tagback-lang") || "es";
    } catch (_) {}
    if (!translations[savedLang]) savedLang = "es";
    applyLanguage(savedLang);

    $$(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            applyLanguage(btn.getAttribute("data-lang"));
        });
    });

    /* REVEAL */
    if (!reducedMotion && "IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

        $$(".reveal").forEach((el) => io.observe(el));
    } else {
        $$(".reveal").forEach((el) => el.classList.add("visible"));
    }

    /* COOKIES */
    const COOKIE_KEY = "tagback-cookies-accepted";
    const cookieBanner = $("#cookie-banner");

    if (cookieBanner) {
        let cookieChoice = null;
        try {
            cookieChoice = localStorage.getItem(COOKIE_KEY);
        } catch (_) {}

        const closeBanner = (value) => {
            try {
                localStorage.setItem(COOKIE_KEY, value);
            } catch (_) {}

            cookieBanner.classList.remove("is-visible");

            window.setTimeout(() => {
                if (cookieBanner.parentNode) {
                    cookieBanner.remove();
                }
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

        const acceptBtn = $("[data-cookie-accept]", cookieBanner);
        const rejectBtn = $("[data-cookie-reject]", cookieBanner);

        if (acceptBtn) acceptBtn.addEventListener("click", () => closeBanner("1"));
        if (rejectBtn) rejectBtn.addEventListener("click", () => closeBanner("0"));
    }

    /* MENU */
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
            menuToggle.setAttribute("aria-label", document.documentElement.lang === "en" ? "Open menu" : "Abrir menú");
        };

        const openMenu = () => {
            header.classList.add("menu-open");
            document.body.classList.add("menu-open");
            mainNav.classList.add("is-open");
            menuToggle.classList.add("active");
            menuToggle.setAttribute("aria-expanded", "true");
            menuToggle.setAttribute("aria-label", document.documentElement.lang === "en" ? "Close menu" : "Cerrar menú");
        };

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

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && mainNav.classList.contains("is-open")) {
                closeMenu();
                menuToggle.focus();
            }
        });

        let resizeTimer;
        window.addEventListener("resize", () => {
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(() => {
                if (window.innerWidth > 900) {
                    closeMenu();
                }
            }, 120);
        });
    }

    /* HEADER */
    if (header) {
        let ticking = false;
        const updateHeader = () => {
            header.classList.toggle("scrolled", window.scrollY > 20);
            ticking = false;
        };
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(updateHeader);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        updateHeader();
    }

    /* SCROLLSPY */
    const spyLinks = $$('.main-nav > a[href^="#"]');
    if (spyLinks.length && "IntersectionObserver" in window) {
        const sectionMap = new Map();
        spyLinks.forEach((link) => {
            const id = link.getAttribute("href").slice(1);
            const section = document.getElementById(id);
            if (section) sectionMap.set(section, link);
        });

        const spyObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const link = sectionMap.get(entry.target);
                if (!link) return;
                if (entry.isIntersecting) {
                    spyLinks.forEach((l) => l.classList.remove("is-active"));
                    link.classList.add("is-active");
                }
            });
        }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

        sectionMap.forEach((_, section) => spyObserver.observe(section));
    }

    /* SERVICES (Acordeón) */
    $$(".service-card").forEach((item) => {
        const accHeader = $(".service-card-header", item);
        if (!accHeader) return;

        accHeader.addEventListener("click", () => {
            const wasOpen = item.classList.contains("is-open");
            const stack = item.parentElement;

            if (stack) {
                $$(".service-card", stack).forEach((sibling) => {
                    if (sibling === item) return;
                    sibling.classList.remove("is-open");
                    const siblingHeader = $(".service-card-header", sibling);
                    if (siblingHeader) {
                        siblingHeader.setAttribute("aria-expanded", "false");
                    }
                });
            }

            item.classList.toggle("is-open", !wasOpen);
            accHeader.setAttribute("aria-expanded", String(!wasOpen));
        });
    });

    /* FAQ */
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

    /* PLANES → FORMULARIO */
    const applySelectPlan = (value) => {
        if (!value) return;
        const select = document.getElementById("quote-project-type");
        if (select) {
            select.value = value;
            select.dispatchEvent(new Event("change", { bubbles: true }));
        }
    };

    $$("[data-select-plan]").forEach((card) => {
        card.addEventListener("click", () => {
            const plan = card.getAttribute("data-select-plan");
            if (plan) applySelectPlan(plan);
        });
    });

    /* FORM */
    const quoteForm = $(".quote-form");
    if (quoteForm) {
        const formSubmit = $(".quote-form-submit", quoteForm);
        const submitBtn = $('button[type="submit"]', quoteForm);
        const submitBtnDefaultText = submitBtn ? submitBtn.textContent : "";
        const honeypotField = $('input[name="website"]', quoteForm);

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
            if (feedback) feedback.remove();
        };

        const getDict = () => translations[document.documentElement.lang] || translations.es;

        const getFieldError = (field) => {
            const dict = getDict();
            if (field.validity.valueMissing) return dict.form_err_required;
            if (field.validity.typeMismatch && field.type === "email") return dict.form_err_email;
            if (!field.checkValidity()) return dict.form_err_check;
            return "";
        };

        const setFieldError = (field, message) => {
            const wrapper = field.closest(".form-field");
            if (!wrapper) return;
            let errorEl = $(".form-field-error", wrapper);
            if (!errorEl) {
                errorEl = document.createElement("span");
                errorEl.className = "form-field-error";
                wrapper.appendChild(errorEl);
            }
            if (message) {
                field.setAttribute("aria-invalid", "true");
                errorEl.textContent = message;
                errorEl.classList.add("is-visible");
            } else {
                field.removeAttribute("aria-invalid");
                errorEl.textContent = "";
                errorEl.classList.remove("is-visible");
            }
        };

        const validateField = (field) => {
            const message = getFieldError(field);
            setFieldError(field, message);
            return !message;
        };

        $$("input, textarea, select", quoteForm).forEach((field) => {
            if (field === honeypotField) return;
            field.addEventListener("blur", () => validateField(field));
            field.addEventListener("input", () => {
                if (field.getAttribute("aria-invalid") === "true") validateField(field);
            });
            field.addEventListener("change", () => {
                if (field.getAttribute("aria-invalid") === "true") validateField(field);
            });
        });

        quoteForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            clearFeedback();

            if (honeypotField && honeypotField.value.trim() !== "") {
                showFeedback("success", getDict().form_success);
                return;
            }

            const fields = $$("input, textarea, select", quoteForm);
            let allValid = true;

            fields.forEach((field) => {
                if (field === honeypotField) return;
                if (!validateField(field)) allValid = false;
            });

            if (!allValid) {
                const firstInvalid = $('[aria-invalid="true"]', quoteForm);
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            const action = quoteForm.getAttribute("action") || "";
            const dict = getDict();

            if (!action || action === "#" || action.includes("COMPLETAR") || action.includes("TU_ID")) {
                showFeedback("info", dict.form_pending);
                return;
            }

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.setAttribute("aria-busy", "true");
                submitBtn.textContent = dict.form_sending;
            }

            try {
                const formData = new FormData(quoteForm);
                const response = await fetch(action, {
                    method: "POST",
                    body: formData,
                    headers: { Accept: "application/json" }
                });

                if (!response.ok) throw new Error("Form submission failed");

                showFeedback("success", dict.form_success);
                quoteForm.reset();

                $$('[aria-invalid="true"]', quoteForm).forEach((field) => field.removeAttribute("aria-invalid"));
                $$(".form-field-error", quoteForm).forEach((error) => {
                    error.textContent = "";
                    error.classList.remove("is-visible");
                });
            } catch (_) {
                showFeedback("error", dict.form_error);
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.removeAttribute("aria-busy");
                    submitBtn.textContent = submitBtnDefaultText;
                }
            }
        });
    }

    /* YEAR */
    const yearEls = $$("[data-current-year]");
    if (yearEls.length) {
        const currentYear = new Date().getFullYear();
        yearEls.forEach((el) => {
            el.textContent = currentYear;
        });
    }
});
