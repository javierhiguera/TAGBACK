    /* =====================================================
       PROCESO — Animación de línea al entrar en viewport
       ===================================================== */
    const processItems = document.querySelectorAll(".process-item--animated");
    if (processItems.length && "IntersectionObserver" in window) {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
            processItems.forEach((item) => item.classList.add("is-visible"));
        } else {
            const processObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        processObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.15,
                rootMargin: "0px 0px -10% 0px"
            });

            processItems.forEach((item, index) => {
                item.style.setProperty("--process-delay", (index * 120) + "ms");
                processObserver.observe(item);
            });
        }
    } else {
        // Fallback si no hay IntersectionObserver
        processItems.forEach((item) => item.classList.add("is-visible"));
    }
