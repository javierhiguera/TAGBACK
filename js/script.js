/* =========================================================
   TAGBACK — JAVASCRIPT v48 (Nuevos Textos y Formulario)
   ========================================================= */

const translations = {
    es: {
        skip_link: "Saltar al contenido principal",
        nav_services: "Servicios",
        nav_solutions: "Soluciones",
        nav_benefits: "Beneficios",
        nav_projects: "Proyectos",
        nav_process: "Proceso",
        nav_plans: "Planes",
        nav_faq: "Preguntas",
        nav_contact: "Contacto",
        nav_home: "Inicio",
        nav_privacy: "Política de Privacidad",
        nav_cookies: "Política de Cookies",

        hero_title_1: "Tu lugar en internet",
        hero_title_2: "empieza",
        hero_title_3: "acá.",
        hero_lead: "Diseñamos y desarrollamos sitios web, tiendas online, aplicaciones y sistemas a medida para transformar tus ideas en soluciones digitales funcionales.",

        services_title: "Soluciones digitales para cada necesidad.",
        services_desc: "Desde una página web hasta un sistema personalizado, desarrollamos herramientas digitales adaptadas a los objetivos de tu negocio.",
        
        solutions_title: "Una solución para lo que necesitás.",
        solutions_desc: "Analizamos tu idea y desarrollamos herramientas digitales adaptadas a tus objetivos, tus procesos y las funcionalidades que necesitás.",

        why_title: "Tecnología pensada para tu proyecto.",
        why_desc: "Desarrollamos soluciones digitales con objetivos claros, atención al detalle y posibilidades de evolución.",

        work_title: "Ideas convertidas en soluciones digitales.",
        work_desc: "Conocé nuestros proyectos y ejemplos de desarrollo. Cada trabajo refleja una necesidad y una solución construida mediante diseño y tecnología.",
        work_link: "Consultar proyecto →",
        cat_services: "SERVICIOS",
        cat_gastro: "GASTRONOMÍA",
        cat_church: "IGLESIA",

        process_title: "De la idea al resultado.",
        process_desc: "Un proceso organizado para transformar tus necesidades en una solución digital funcional.",
        proc_1_title: "Análisis",
        proc_1_desc: "Comprendemos tu idea, tus objetivos y el problema que necesitás resolver.",
        proc_2_title: "Planificación",
        proc_2_desc: "Definimos el alcance, las funcionalidades y las prioridades del proyecto.",
        proc_3_title: "Desarrollo",
        proc_3_desc: "Construimos la solución acordada con atención al diseño y al funcionamiento.",
        proc_4_title: "Pruebas",
        proc_4_desc: "Verificamos las funcionalidades y corregimos los problemas detectados.",
        proc_5_title: "Publicación y entrega",
        proc_5_desc: "Preparamos la puesta en funcionamiento y entregamos los elementos acordados.",

        plans_title: "Una solución para cada etapa.",
        plans_desc: "Diferentes alternativas para crear tu presencia digital, vender por internet o desarrollar herramientas personalizadas.",
        plan_badge: "RECOMENDADO",
        plan_1_label: "STARTER",
        plan_1_title: "Web Starter",
        plan_1_sub: "Según alcance",
        plan_1_desc: "Una presencia digital profesional para emprendedores y proyectos que necesitan comenzar en internet.",
        plan_2_label: "BUSINESS",
        plan_2_title: "Web Business",
        plan_2_sub: "Según alcance",
        plan_2_desc: "Un sitio más completo para empresas y negocios que buscan presentar sus servicios y recibir consultas.",
        plan_3_label: "COMMERCE",
        plan_3_title: "Web Commerce",
        plan_3_sub: "Según alcance",
        plan_3_desc: "Una solución digital para exhibir productos y desarrollar un canal de ventas online.",
        plan_4_label: "A MEDIDA",
        plan_4_title: "Desarrollo a medida",
        plan_4_sub: "Según funcionalidades",
        plan_4_desc: "Aplicaciones, sistemas de gestión, automatizaciones e integraciones adaptadas a necesidades específicas.",

        faq_title: "Preguntas frecuentes",
        faq_desc: "Resolvemos las dudas más comunes antes de empezar.",
        faq_1_q: "¿Qué tipo de proyectos desarrollan?",
        faq_1_a: "Sitios web, tiendas online, aplicaciones, sistemas de gestión, automatizaciones e integraciones, además de soluciones digitales personalizadas.",
        faq_2_q: "¿Cómo sé qué solución necesito?",
        faq_2_a: "Contanos tus objetivos y necesidades para evaluar qué tipo de desarrollo se adapta mejor a tu proyecto.",
        faq_3_q: "¿El hosting está incluido?",
        faq_3_a: "Depende del proyecto y de las condiciones del servicio contratado.",
        faq_4_q: "¿El dominio está incluido?",
        faq_4_a: "Depende del plan. El registro y la renovación pueden generar costos adicionales.",
        faq_5_q: "¿Puedo ampliar mi proyecto en el futuro?",
        faq_5_a: "Las posibilidades de ampliación dependen de la arquitectura y las características técnicas de la solución.",
        faq_6_q: "¿Recibo el código de mi proyecto?",
        faq_6_a: "La entrega del código, los archivos y los derechos de uso se establecen en las condiciones acordadas.",
        faq_7_q: "¿Ofrecen mantenimiento?",
        faq_7_a: "El mantenimiento y el soporte dependen de las condiciones contratadas para cada proyecto.",
        faq_8_q: "¿Cómo se cotiza un desarrollo a medida?",
        faq_8_a: "Evaluamos las funcionalidades, las integraciones y la complejidad para definir el alcance y preparar una propuesta.",
        faq_9_q: "¿Cuánto tarda el desarrollo?",
        faq_9_a: "El plazo depende de los requerimientos y la complejidad del proyecto.",

        contact_title: "Contanos tu proyecto.",
        contact_desc: "Queremos conocer tu idea y entender qué necesitás resolver. Describinos tu proyecto para evaluar una solución acorde a tus objetivos.",
        form_title: "Contanos tu proyecto.",
        form_lead: "Completá los datos y te contactamos.",
        form_name: "Nombre *",
        form_name_ph: "Tu nombre",
        form_email: "Correo electrónico *",
        form_email_ph: "tu@correo.com",
        form_phone: "Teléfono",
        form_phone_ph: "Ingresá tu número de teléfono",
        form_type: "Tipo de proyecto *",
        form_type_1: "Sitio web",
        form_type_2: "Tienda online",
        form_type_3: "Aplicación web",
        form_type_4: "Sistema de gestión",
        form_type_5: "Reservas y turnos",
        form_type_6: "Automatización",
        form_type_7: "Inteligencia artificial",
        form_type_8: "SaaS",
        form_type_9: "Marketplace",
        form_type_10: "Otro proyecto",
        form_msg: "Mensaje *",
        form_msg_ph: "Contanos un poco sobre tu proyecto",
        form_submit: "Enviar consulta",
        form_legal: "Al enviar aceptás nuestra Política de Privacidad.",

        foot_contact: "CONTACTO",
        foot_privacy: "PRIVACIDAD / LEGAL",
        foot_phone: "TELÉFONO",
        foot_location: "UBICACIÓN",
        foot_tz: "ZONA HORARIA",
        foot_nav: "NAVEGACIÓN",
        foot_legal: "LEGAL",
        foot_rights: "Todos los derechos reservados.",
        foot_credit: "Diseño y desarrollo por",

        cookie_title: "Uso de cookies",
        cookie_desc: "Usamos cookies para analizar cómo se utiliza este sitio y mejorar la experiencia de navegación.",
        cookie_accept: "Aceptar",
        cookie_reject: "Rechazar",

        back_home: "← Volver al inicio",
        legal_eyebrow: "LEGAL",
        legal_updated: "Última actualización: 2025",

        privacy_title: "Política de Privacidad",
        privacy_intro: "En tagback respetamos tu privacidad y nos comprometemos a proteger los datos personales que nos compartís. Esta política explica qué información recopilamos, cómo la usamos y qué derechos tenés sobre ella.",
        privacy_h2_1: "1. Responsable del tratamiento",
        privacy_p_1: "El responsable del tratamiento de los datos personales recopilados a través de este sitio es tagback, con correo de contacto privacy@tagback.com.",
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
        privacy_p_4: "Tratamos tus datos en base a tu consentimiento expreso al enviarnos el formulario de contacto, y en base a nuestro interés legítimo en responder consultas comerciales.",
        privacy_h2_5: "5. Con quién compartimos los datos",
        privacy_p_5: "No vendemos ni compartimos tus datos con terceros con fines comerciales. Solo los compartimos con proveedores técnicos que nos permiten operar el sitio (hosting, servicio de formularios, analítica), quienes están sujetos a sus propias políticas de privacidad.",
        privacy_h2_6: "6. Cuánto tiempo conservamos los datos",
        privacy_p_6: "Conservamos los datos de contacto mientras exista una relación comercial activa o potencial, y por el tiempo necesario para cumplir obligaciones legales. Después los eliminamos o anonimizamos.",
        privacy_h2_7: "7. Tus derechos",
        privacy_p_7: "De acuerdo con la Ley 25.326 de Protección de Datos Personales de Argentina, tenés derecho a:",
        privacy_li_9: "Acceder a los datos que tenemos sobre vos",
        privacy_li_10: "Rectificarlos si están incorrectos",
        privacy_li_11: "Solicitar su eliminación",
        privacy_li_12: "Oponerte a su tratamiento",
        privacy_li_13: "Retirar tu consentimiento en cualquier momento",
        privacy_p_8: "Para ejercer cualquiera de estos derechos, escribinos a privacy@tagback.com.",
        privacy_h2_8: "8. Seguridad",
        privacy_p_9: "Aplicamos medidas técnicas y organizativas razonables para proteger tus datos contra accesos no autorizados, pérdidas o alteraciones. Sin embargo, ningún sistema es 100% seguro.",
        privacy_h2_9: "9. Menores de edad",
        privacy_p_10: "Este sitio no está dirigido a menores de 18 años. No recopilamos conscientemente datos de menores. Si detectamos tal situación, eliminaremos la información.",
        privacy_h2_10: "10. Cambios en esta política",
        privacy_p_11: "Podemos actualizar esta Política de Privacidad cuando sea necesario. La versión vigente siempre estará publicada en esta página, con la fecha de última actualización.",
        privacy_h2_11: "11. Contacto",
        privacy_p_12: "Para cualquier consulta sobre esta política o sobre el tratamiento de tus datos, escribinos a privacy@tagback.com.",

        cookies_title: "Política de Cookies",
        cookies_intro: "Esta política explica qué son las cookies, cuáles usamos en tagback, para qué sirven y cómo podés gestionarlas.",
        cookies_h2_1: "1. Qué son las cookies",
        cookies_p_1: "Las cookies son pequeños archivos de texto que los sitios web guardan en tu dispositivo cuando los visitás. Sirven para recordar tus preferencias, analizar cómo usás el sitio y mostrarte contenido o anuncios relevantes.",
        cookies_h2_2: "2. Qué cookies usamos",
        cookies_h3_1: "Cookies necesarias",
        cookies_p_2: "Son imprescindibles para que el sitio funcione correctamente. Sin ellas, algunas partes del sitio no funcionarían.",
        cookies_li_1: "Preferencia de consentimiento de cookies (localStorage)",
        cookies_li_2: "Funcionamiento básico del sitio y seguridad",
        cookies_h3_2: "Cookies analíticas",
        cookies_p_3: "Nos ayudan a entender cómo se usa el sitio: qué páginas se visitan más, cuánto tiempo se quedan los usuarios, de dónde vienen. Esta información es agregada y anónima.",
        cookies_li_3: "Google Analytics (si está activado)",
        cookies_li_4: "Métricas de rendimiento y errores",
        cookies_h3_3: "Cookies de marketing",
        cookies_p_4: "Se usan para mostrarte anuncios relevantes en otros sitios y medir el rendimiento de campañas publicitarias.",
        cookies_li_5: "Google Ads (si está activado)",
        cookies_li_6: "Meta Ads (si está activado)",
        cookies_h2_3: "3. Cookies de terceros",
        cookies_p_5: "Algunos servicios que usamos pueden instalar sus propias cookies:",
        cookies_li_7: "para analítica web",
        cookies_li_8: "para gestionar el formulario de contacto",
        cookies_h2_4: "4. Cómo gestionar las cookies",
        cookies_p_6: "Podés cambiar tus preferencias en cualquier momento desde el botón de configuración del banner de cookies, o desde la configuración de tu navegador:",
        cookies_p_7: "Si bloqueás todas las cookies, algunas funciones del sitio podrían no funcionar correctamente.",
        cookies_h2_5: "5. Cómo revocar tu consentimiento",
        cookies_p_8: "Podés eliminar las cookies guardadas desde la configuración de tu navegador, o volver a abrir el banner de cookies para cambiar tus preferencias.",
        cookies_h2_6: "6. Actualizaciones",
        cookies_p_9: "Podemos actualizar esta Política de Cookies cuando cambien las herramientas que usamos o la normativa aplicable. La versión vigente siempre estará publicada en esta página.",
        cookies_h2_7: "7. Contacto",
        cookies_p_10: "Para consultas sobre cookies, escribinos a privacy@tagback.com."
    },

    en: {
        skip_link: "Skip to main content",
        nav_services: "Services",
        nav_solutions: "Solutions",
        nav_benefits: "Benefits",
        nav_projects: "Projects",
        nav_process: "Process",
        nav_plans: "Plans",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        nav_home: "Home",
        nav_privacy: "Privacy Policy",
        nav_cookies: "Cookie Policy",

        hero_title_1: "Your place on the internet",
        hero_title_2: "starts",
        hero_title_3: "here.",
        hero_lead: "We design and develop websites, online stores, applications, and custom systems to transform your ideas into functional digital solutions.",

        services_title: "Digital solutions for every need.",
        services_desc: "From a web page to a customized system, we develop digital tools adapted to your business goals.",
        
        solutions_title: "A solution for what you need.",
        solutions_desc: "We analyze your idea and develop digital tools adapted to your goals, processes, and the features you need.",

        why_title: "Technology designed for your project.",
        why_desc: "We develop digital solutions with clear objectives, attention to detail, and possibilities for evolution.",

        work_title: "Ideas turned into digital solutions.",
        work_desc: "Discover our projects and development examples. Each work reflects a need and a solution built through design and technology.",
        work_link: "Discuss project →",
        cat_services: "SERVICES",
        cat_gastro: "GASTRONOMY",
        cat_church: "CHURCH",

        process_title: "From idea to result.",
        process_desc: "An organized process to transform your needs into a functional digital solution.",
        proc_1_title: "Analysis",
        proc_1_desc: "We understand your idea, your goals, and the problem you need to solve.",
        proc_2_title: "Planning",
        proc_2_desc: "We define the scope, features, and priorities of the project.",
        proc_3_title: "Development",
        proc_3_desc: "We build the agreed solution with attention to design and functionality.",
        proc_4_title: "Testing",
        proc_4_desc: "We verify the features and correct any detected issues.",
        proc_5_title: "Launch & delivery",
        proc_5_desc: "We prepare the launch and deliver the agreed elements.",

        plans_title: "A solution for every stage.",
        plans_desc: "Different alternatives to create your digital presence, sell online, or develop customized tools.",
        plan_badge: "RECOMMENDED",
        plan_1_label: "STARTER",
        plan_1_title: "Web Starter",
        plan_1_sub: "According to scope",
        plan_1_desc: "A professional digital presence for entrepreneurs and projects that need to start on the internet.",
        plan_2_label: "BUSINESS",
        plan_2_title: "Web Business",
        plan_2_sub: "According to scope",
        plan_2_desc: "A more complete site for companies and businesses looking to present their services and receive inquiries.",
        plan_3_label: "COMMERCE",
        plan_3_title: "Web Commerce",
        plan_3_sub: "According to scope",
        plan_3_desc: "A digital solution to display products and develop an online sales channel.",
        plan_4_label: "CUSTOM",
        plan_4_title: "Custom development",
        plan_4_sub: "According to features",
        plan_4_desc: "Applications, management systems, automations, and integrations adapted to specific needs.",

        faq_title: "Frequently asked questions",
        faq_desc: "We resolve the most common doubts before starting.",
        faq_1_q: "What type of projects do you develop?",
        faq_1_a: "Websites, online stores, applications, management systems, automations, and integrations, as well as customized digital solutions.",
        faq_2_q: "How do I know what solution I need?",
        faq_2_a: "Tell us your goals and needs so we can evaluate what type of development best suits your project.",
        faq_3_q: "Is hosting included?",
        faq_3_a: "It depends on the project and the conditions of the contracted service.",
        faq_4_q: "Is the domain included?",
        faq_4_a: "It depends on the plan. Registration and renewal may generate additional costs.",
        faq_5_q: "Can I expand my project in the future?",
        faq_5_a: "Expansion possibilities depend on the architecture and technical characteristics of the solution.",
        faq_6_q: "Do I receive the code for my project?",
        faq_6_a: "The delivery of the code, files, and usage rights are established in the agreed conditions.",
        faq_7_q: "Do you offer maintenance?",
        faq_7_a: "Maintenance and support depend on the conditions contracted for each project.",
        faq_8_q: "How is custom development quoted?",
        faq_8_a: "We evaluate the features, integrations, and complexity to define the scope and prepare a proposal.",
        faq_9_q: "How long does development take?",
        faq_9_a: "The timeline depends on the requirements and complexity of the project.",

        contact_title: "Tell us about your project.",
        contact_desc: "We want to know your idea and understand what you need to solve. Describe your project so we can evaluate a solution according to your goals.",
        form_title: "Tell us about your project.",
        form_lead: "Fill in the details and we'll contact you.",
        form_name: "Name *",
        form_name_ph: "Your name",
        form_email: "Email address *",
        form_email_ph: "you@email.com",
        form_phone: "Phone",
        form_phone_ph: "Enter your phone number",
        form_type: "Project type *",
        form_type_1: "Website",
        form_type_2: "Online store",
        form_type_3: "Web application",
        form_type_4: "Management system",
        form_type_5: "Bookings & appointments",
        form_type_6: "Automation",
        form_type_7: "Artificial intelligence",
        form_type_8: "SaaS",
        form_type_9: "Marketplace",
        form_type_10: "Other project",
        form_msg: "Message *",
        form_msg_ph: "Tell us a bit about your project",
        form_submit: "Send inquiry",
        form_legal: "By submitting you accept our Privacy Policy.",

        foot_contact: "CONTACT",
        foot_privacy: "PRIVACY / LEGAL",
        foot_phone: "PHONE",
        foot_location: "LOCATION",
        foot_tz: "TIMEZONE",
        foot_nav: "NAVIGATION",
        foot_legal: "LEGAL",
        foot_rights: "All rights reserved.",
        foot_credit: "Design & development by",

        cookie_title: "Cookie usage",
        cookie_desc: "We use cookies to analyze how this site is used and improve the browsing experience.",
        cookie_accept: "Accept",
        cookie_reject: "Reject",

        back_home: "← Back to home",
        legal_eyebrow: "LEGAL",
        legal_updated: "Last updated: 2025",

        privacy_title: "Privacy Policy",
        privacy_intro: "At tagback we respect your privacy and are committed to protecting the personal data you share with us. This policy explains what information we collect, how we use it, and what rights you have over it.",
        privacy_h2_1: "1. Data controller",
        privacy_p_1: "The data controller for the personal data collected through this site is tagback, with contact email privacy@tagback.com.",
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
        privacy_p_4: "We process your data based on your express consent when sending us the contact form, and based on our legitimate interest in responding to commercial inquiries.",
        privacy_h2_5: "5. Who we share data with",
        privacy_p_5: "We do not sell or share your data with third parties for commercial purposes. We only share it with technical providers that allow us to operate the site (hosting, form service, analytics), who are subject to their own privacy policies.",
        privacy_h2_6: "6. How long we keep the data",
        privacy_p_6: "We keep contact data while there is an active or potential commercial relationship, and for the time necessary to comply with legal obligations. After that, we delete or anonymize it.",
        privacy_h2_7: "7. Your rights",
        privacy_p_7: "According to Law 25.326 on Personal Data Protection in Argentina, you have the right to:",
        privacy_li_9: "Access the data we have about you",
        privacy_li_10: "Rectify it if it is incorrect",
        privacy_li_11: "Request its deletion",
        privacy_li_12: "Object to its processing",
        privacy_li_13: "Withdraw your consent at any time",
        privacy_p_8: "To exercise any of these rights, write to us at privacy@tagback.com.",
        privacy_h2_8: "8. Security",
        privacy_p_9: "We apply reasonable technical and organizational measures to protect your data against unauthorized access, loss, or alteration. However, no system is 100% secure.",
        privacy_h2_9: "9. Minors",
        privacy_p_10: "This site is not directed at minors under 18. We do not knowingly collect data from minors. If we detect such a situation, we will delete the information.",
        privacy_h2_10: "10. Changes to this policy",
        privacy_p_11: "We may update this Privacy Policy when necessary. The current version will always be published on this page, with the last update date.",
        privacy_h2_11: "11. Contact",
        privacy_p_12: "For any questions about this policy or the processing of your data, write to us at privacy@tagback.com.",

        cookies_title: "Cookie Policy",
        cookies_intro: "This policy explains what cookies are, which ones we use at tagback, what they are for, and how you can manage them.",
        cookies_h2_1: "1. What are cookies",
        cookies_p_1: "Cookies are small text files that websites store on your device when you visit them. They are used to remember your preferences, analyze how you use the site, and show you relevant content or ads.",
        cookies_h2_2: "2. What cookies we use",
        cookies_h3_1: "Necessary cookies",
        cookies_p_2: "They are essential for the site to function correctly. Without them, some parts of the site would not work.",
        cookies_li_1: "Cookie consent preference (localStorage)",
        cookies_li_2: "Basic site operation and security",
        cookies_h3_2: "Analytical cookies",
        cookies_p_3: "They help us understand how the site is used: which pages are visited most, how long users stay, where they come from. This information is aggregated and anonymous.",
        cookies_li_3: "Google Analytics (if activated)",
        cookies_li_4: "Performance and error metrics",
        cookies_h3_3: "Marketing cookies",
        cookies_p_4: "They are used to show you relevant ads on other sites and measure the performance of advertising campaigns.",
        cookies_li_5: "Google Ads (if activated)",
        cookies_li_6: "Meta Ads (if activated)",
        cookies_h2_3: "3. Third-party cookies",
        cookies_p_5: "Some services we use may install their own cookies:",
        cookies_li_7: "for web analytics",
        cookies_li_8: "to manage the contact form",
        cookies_h2_4: "4. How to manage cookies",
        cookies_p_6: "You can change your preferences at any time from the cookie banner settings button, or from your browser settings:",
        cookies_p_7: "If you block all cookies, some site functions may not work correctly.",
        cookies_h2_5: "5. How to withdraw your consent",
        cookies_p_8: "You can delete saved cookies from your browser settings, or reopen the cookie banner to change your preferences.",
        cookies_h2_6: "6. Updates",
        cookies_p_9: "We may update this Cookie Policy when the tools we use or applicable regulations change. The current version will always be published on this page.",
        cookies_h2_7: "7. Contact",
        cookies_p_10: "For cookie inquiries, write to us at privacy@tagback.com."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    /* =====================================================
       NEURAL NOISE (WebGL Hero Background)
       ===================================================== */
    const canvas = document.getElementById('neural-canvas');
    if (canvas) {
        let gl;
        let uniforms;
        let animationFrameId;
        const pointer = { x: 0, y: 0, tX: 0, tY: 0 };
        const color = [139 / 255, 163 / 255, 199 / 255];
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
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                    console.error('Shader error:', gl.getShaderInfoLog(shader));
                    return null;
                }
                return shader;
            };

            const createProgram = (vs, fs) => {
                const program = gl.createProgram();
                gl.attachShader(program, vs);
                gl.attachShader(program, fs);
                gl.linkProgram(program);
                if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                    console.error('Program error:', gl.getProgramInfoLog(program));
                    return null;
                }
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

            return () => {
                window.removeEventListener('pointermove', pointermove);
                window.removeEventListener('touchmove', touchmove);
            };
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

    /* =====================================================
       IDIOMA
       ===================================================== */

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

        $$("[data-i18n-aria-label]").forEach((el) => {
            const key = el.getAttribute("data-i18n-aria-label");
            if (Object.prototype.hasOwnProperty.call(dict, key)) {
                el.setAttribute("aria-label", dict[key]);
            }
        });

        $$(".lang-btn").forEach((btn) => {
            const active = btn.getAttribute("data-lang") === lang;
            btn.classList.toggle("active", active);
            btn.setAttribute("aria-pressed", String(active));
        });

        $$(".work-card-link").forEach((link) => {
            link.textContent = dict.work_link;
        });

        const menuToggle = $(".menu-toggle");
        if (menuToggle) {
            menuToggle.setAttribute("aria-label", lang === "en" ? "Open menu" : "Abrir menú");
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

    /* =====================================================
       COOKIES
       ===================================================== */

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

    /* =====================================================
       MENÚ MÓVIL
       ===================================================== */

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

    /* =====================================================
       HEADER AL HACER SCROLL
       ===================================================== */

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

    /* =====================================================
       ACORDEONES DE SERVICIOS
       ===================================================== */

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

    /* =====================================================
       FAQ: UNA PREGUNTA ABIERTA POR VEZ + HOVER
       ===================================================== */

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

        item.addEventListener("mouseenter", () => {
            if (window.innerWidth > 768 && item.tagName === "DETAILS") {
                faqItems.forEach(other => {
                    if (other !== item) other.open = false;
                });
                item.open = true;
            }
        });
    });

    /* =====================================================
       PLANES → FORMULARIO
       ===================================================== */

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
            if (event.target.closest("a, button, input, select, textarea, label")) {
                return;
            }
            selectCardPlan();
        });

        if (card.tagName !== "A" && card.tagName !== "BUTTON" && !card.hasAttribute("tabindex")) {
            card.setAttribute("tabindex", "0");
        }

        if (card.getAttribute("role") === "button" || card.hasAttribute("data-plan")) {
            card.addEventListener("keydown", (event) => {
                if (event.target !== card || (event.key !== "Enter" && event.key !== " ")) {
                    return;
                }
                if (card.tagName === "A" || card.tagName === "BUTTON") {
                    return;
                }
                event.preventDefault();
                selectCardPlan();
            });
        }
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

    /* =====================================================
       FORMULARIO — FORMSPREE
       ===================================================== */

    const quoteForm = $(".quote-form");

    if (quoteForm) {
        const formSubmit = $(".quote-form-submit", quoteForm);
        const submitBtn = $('button[type="submit"]', quoteForm);
        const submitBtnDefaultText = submitBtn ? submitBtn.textContent : "";

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

        const getFieldError = (field) => {
            const lang = document.documentElement.lang;
            if (field.validity.valueMissing) {
                return lang === "en" ? "This field is required." : "Este campo es obligatorio.";
            }
            if (field.validity.typeMismatch && field.type === "email") {
                return lang === "en" ? "Enter a valid email address." : "Ingresá un correo electrónico válido.";
            }
            if (!field.checkValidity()) {
                return lang === "en" ? "Check this field." : "Revisá este dato.";
            }
            return "";
        };

        const setFieldError = (field, message) => {
            const wrapper = field.closest(".form-field") || field.closest(".form-fieldset");
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

        const validateRadioGroup = (field) => {
            const group = $$(`input[name="${CSS.escape(field.name)}"]`, quoteForm);
            if (!group.length) return true;
            const anyChecked = group.some((radio) => radio.checked);
            if (anyChecked) {
                group.forEach((radio) => setFieldError(radio, ""));
                return true;
            }
            group.forEach((radio) => {
                setFieldError(radio, getFieldError(radio));
            });
            return false;
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
            let allValid = true;
            const processedRadioGroups = new Set();

            fields.forEach((field) => {
                if (field.type === "radio") {
                    if (processedRadioGroups.has(field.name)) return;
                    processedRadioGroups.add(field.name);
                    if (!validateRadioGroup(field)) allValid = false;
                    return;
                }
                if (!validateField(field)) allValid = false;
            });

            if (!allValid) {
                const firstInvalid = $('[aria-invalid="true"]', quoteForm);
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            const action = quoteForm.getAttribute("action") || "";
            const lang = document.documentElement.lang;

            if (!action || action === "#" || action.includes("TU_ID")) {
                showFeedback("info", lang === "en" ? "The form is being configured. In the meantime, email hola@tagback.com." : "Estamos configurando el formulario. Mientras tanto, escribinos a hola@tagback.com.");
                return;
            }

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.setAttribute("aria-busy", "true");
                submitBtn.textContent = lang === "en" ? "Sending..." : "Enviando...";
            }

            try {
                const formData = new FormData(quoteForm);
                const response = await fetch(action, {
                    method: "POST",
                    body: formData,
                    headers: { Accept: "application/json" }
                });

                if (!response.ok) throw new Error("Form submission failed");

                showFeedback("success", lang === "en" ? "Your inquiry was sent successfully." : "Tu consulta fue enviada correctamente.");
                quoteForm.reset();

                $$('[aria-invalid="true"]', quoteForm).forEach((field) => field.removeAttribute("aria-invalid"));
                $$(".form-field-error", quoteForm).forEach((error) => {
                    error.textContent = "";
                    error.classList.remove("is-visible");
                });
            } catch (_) {
                showFeedback("error", lang === "en" ? "We couldn't send your inquiry. Try again or email hola@tagback.com." : "No pudimos enviar tu consulta. Intentá nuevamente o escribinos a hola@tagback.com.");
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.removeAttribute("aria-busy");
                    submitBtn.textContent = submitBtnDefaultText;
                }
            }
        });
    }

    /* =====================================================
       CURSOR REACTIVO (Global CSS Variables)
       ===================================================== */

    if (!reducedMotion && finePointer) {
        let rafId = 0;
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
                rafId = window.requestAnimationFrame(updateCursorLight);
            } else {
                rafId = 0;
            }
        };

        document.addEventListener("pointermove", (event) => {
            targetX = event.clientX;
            targetY = event.clientY;
            if (!rafId) {
                rafId = window.requestAnimationFrame(updateCursorLight);
            }
        }, { passive: true });

        window.addEventListener("blur", () => {
            targetX = window.innerWidth * 0.5;
            targetY = window.innerHeight * 0.35;
            if (!rafId) {
                rafId = window.requestAnimationFrame(updateCursorLight);
            }
        });
    }

    /* =====================================================
       AÑO ACTUAL
       ===================================================== */

    const yearEls = $$("[data-current-year]");

    if (yearEls.length) {
        const currentYear = new Date().getFullYear();
        yearEls.forEach((el) => {
            el.textContent = currentYear;
        });
    }
});
