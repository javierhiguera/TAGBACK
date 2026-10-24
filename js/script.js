/* =========================================================
   TAGBACK — JAVASCRIPT v42
   Traducciones + Navegación + Formulario + WebGL (Neural Noise + Glass Folders)
   ========================================================= */

const translations = {
    es: {
        skip_link: "Saltar al contenido principal",
        nav_services: "Servicios",
        nav_projects: "Proyectos",
        nav_process: "Proceso",
        nav_plans: "Planes",
        nav_faq: "Preguntas",
        nav_contact: "Contacto",
        nav_home: "Inicio",
        nav_privacy: "Política de Privacidad",
        nav_cookies: "Política de Cookies",

        hero_eyebrow_1: "DISEÑO WEB",
        hero_eyebrow_2: "DESARROLLO",
        hero_eyebrow_3: "PRESENCIA DIGITAL",
        hero_title_1: "Webs claras para",
        hero_title_2: "negocios que",
        hero_title_3: "quieren crecer.",
        hero_lead: "Diseñamos y desarrollamos sitios web rápidos, claros y pensados para convertir visitas en oportunidades de negocio.",

        services_title: "Soluciones digitales para negocios que quieren avanzar.",
        services_desc: "Cada proyecto tiene necesidades diferentes. Hacé clic en cada servicio para ver el detalle.",
        srv_1_title: "Landing pages",
        srv_1_desc: "Una página enfocada en presentar una oferta concreta, con secciones definidas y una llamada a la acción principal. Incluye diseño responsive y un canal de contacto.",
        srv_2_title: "Sitios web corporativos",
        srv_2_desc: "Sitio con varias secciones o páginas internas para presentar la empresa, sus servicios y sus canales de contacto. Incluye estructura de contenidos y diseño responsive.",
        srv_3_title: "Tiendas online",
        srv_3_desc: "Catálogo de productos organizado, ficha de producto y flujo de compra o consulta. El alcance se define según la plataforma y las integraciones necesarias.",
        srv_4_title: "Mantenimiento web",
        srv_4_desc: "Actualizaciones, ajustes de contenido y soporte técnico para mantener el sitio en funcionamiento. Las condiciones se acuerdan por separado según cada caso.",

        why_title: "Una web con propósito, no solo apariencia.",
        why_desc: "Cada decisión está pensada para que tu sitio funcione: comunique, convierta y crezca con tu negocio.",

        work_title: "Proyectos que llevan ideas a la web.",
        work_desc: "Cada proyecto parte de una necesidad concreta y se convierte en una experiencia digital diseñada para su propósito.",
        work_link: "Consultar proyecto →",
        cat_services: "SERVICIOS",
        cat_gastro: "GASTRONOMÍA",
        cat_church: "IGLESIA",

        process_title: "De la idea al sitio publicado.",
        process_desc: "Cuatro etapas para llevar tu proyecto desde la primera conversación hasta el sitio online.",
        proc_1_title: "Etapa 01 — Descubrimiento",
        proc_1_desc: "Conocemos tu negocio, tus objetivos y las necesidades de tu proyecto.",
        proc_2_title: "Etapa 02 — Propuesta",
        proc_2_desc: "Definimos el alcance, las funcionalidades, los plazos y el presupuesto.",
        proc_3_title: "Etapa 03 — Diseño y desarrollo",
        proc_3_desc: "Construimos el sitio siguiendo la propuesta aprobada y los requisitos acordados.",
        proc_4_title: "Etapa 04 — Revisión y entrega",
        proc_4_desc: "Revisamos el resultado, realizamos los ajustes incluidos y coordinamos la publicación.",

        plans_title: "Una solución acorde a tu proyecto.",
        plans_desc: "No todos los negocios necesitan la misma web. Por eso, cada propuesta se define según el alcance, el contenido y las funcionalidades requeridas.",
        plan_badge: "RECOMENDADO",
        plan_1_label: "LANDING",
        plan_1_title: "Landing page",
        plan_1_sub: "Pago único · alcance definido",
        plan_1_desc: "Para presentar un servicio, producto o propuesta comercial en una página enfocada.",
        plan_1_f1: "Una página con secciones definidas",
        plan_1_f2: "Diseño responsive",
        plan_1_f3: "Formulario o canal de contacto",
        plan_1_f4: "No incluye dominio ni hosting",
        plan_2_label: "SITIO",
        plan_2_title: "Web corporativa",
        plan_2_sub: "Pago único · según alcance",
        plan_2_desc: "Para empresas y profesionales que necesitan presentar su negocio, servicios y canales de contacto.",
        plan_2_f1: "Varias secciones y páginas internas",
        plan_2_f2: "Estructura de contenidos",
        plan_2_f3: "Formulario o canal de contacto",
        plan_2_f4: "No incluye dominio ni hosting",
        plan_3_label: "A MEDIDA",
        plan_3_title: "Proyecto personalizado",
        plan_3_sub: "Según alcance y funcionalidades",
        plan_3_desc: "Para tiendas online, integraciones o cualquier proyecto que requiera un desarrollo específico.",
        plan_3_f1: "Alcance a definir juntos",
        plan_3_f2: "Stack adaptado al proyecto",
        plan_3_f3: "Integraciones según necesidad",
        plan_3_f4: "Condiciones acordadas por escrito",

        faq_title: "Preguntas frecuentes",
        faq_desc: "Las dudas más comunes antes de empezar un proyecto.",
        faq_1_q: "¿Cómo se define el precio de un proyecto?",
        faq_1_a: "El precio depende del tipo de sitio, la cantidad de secciones, las funcionalidades y el contenido. Los planes de landing y web corporativa tienen un valor de referencia desde USD 350 y USD 700. Los proyectos a medida se cotizan según su alcance.",
        faq_2_q: "¿Qué incluye el presupuesto?",
        faq_2_a: "El presupuesto detalla el alcance del trabajo y los servicios incluidos. El dominio y el hosting no están incluidos salvo que se indique lo contrario.",
        faq_3_q: "¿Cuánto tarda en estar listo el sitio?",
        faq_3_a: "El plazo depende de la complejidad del sitio y de la disponibilidad del contenido necesario. Se define antes de comenzar el trabajo.",
        faq_4_q: "¿Cómo se define el diseño?",
        faq_4_a: "La propuesta visual se adapta a la identidad, los objetivos y las necesidades de cada proyecto.",
        faq_5_q: "¿El sitio va a funcionar en celulares y tablets?",
        faq_5_a: "Los sitios se desarrollan con diseño responsive para adaptarse a diferentes tamaños de pantalla.",
        faq_6_q: "¿Puedo pedir modificaciones después de la entrega?",
        faq_6_a: "Los ajustes posteriores pueden presupuestarse por separado o contratarse mediante un servicio de mantenimiento.",
        faq_7_q: "¿Cómo contrato un proyecto?",
        faq_7_a: "Escribinos a hola@tagback.com con una descripción de tu proyecto. Revisaremos tus necesidades y prepararemos una propuesta.",

        contact_title: "Contanos tu idea.",
        contact_desc: "Completá los datos y contanos qué necesitás. Te contactaremos para conversar sobre tu proyecto.",
        form_title: "Contanos tu idea.",
        form_lead: "Completá los datos y te contactamos.",
        form_name: "Nombre *",
        form_name_ph: "Tu nombre",
        form_email: "Correo electrónico *",
        form_email_ph: "tu@correo.com",
        form_phone: "Teléfono",
        form_phone_ph: "Ingresá tu número de teléfono",
        form_type: "Tipo de proyecto *",
        form_type_1: "Landing page",
        form_type_2: "Web corporativa",
        form_type_3: "Proyecto personalizado",
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
        nav_projects: "Projects",
        nav_process: "Process",
        nav_plans: "Plans",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        nav_home: "Home",
        nav_privacy: "Privacy Policy",
        nav_cookies: "Cookie Policy",

        hero_eyebrow_1: "WEB DESIGN",
        hero_eyebrow_2: "DEVELOPMENT",
        hero_eyebrow_3: "DIGITAL PRESENCE",
        hero_title_1: "Clear websites for",
        hero_title_2: "businesses ready",
        hero_title_3: "to grow.",
        hero_lead: "We design and develop fast, clear websites built to turn visits into business opportunities.",

        services_title: "Digital solutions for businesses ready to move forward.",
        services_desc: "Every project has different needs. Click on each service to see the details.",
        srv_1_title: "Landing pages",
        srv_1_desc: "A page focused on presenting a specific offer, with defined sections and a main call to action. Includes responsive design and a contact channel.",
        srv_2_title: "Corporate websites",
        srv_2_desc: "A site with multiple sections or internal pages to present the company, its services, and contact channels. Includes content structure and responsive design.",
        srv_3_title: "Online stores",
        srv_3_desc: "Organized product catalog, product page, and purchase or inquiry flow. The scope is defined based on the platform and necessary integrations.",
        srv_4_title: "Web maintenance",
        srv_4_desc: "Updates, content adjustments, and technical support to keep the site running. Conditions are agreed separately for each case.",

        why_title: "A website with purpose, not just appearance.",
        why_desc: "Every decision is made so your site works: communicates, converts, and grows with your business.",

        work_title: "Projects that bring ideas to the web.",
        work_desc: "Every project starts from a specific need and becomes a digital experience designed for its purpose.",
        work_link: "Discuss project →",
        cat_services: "SERVICES",
        cat_gastro: "GASTRONOMY",
        cat_church: "CHURCH",

        process_title: "From idea to published site.",
        process_desc: "Four stages to take your project from the first conversation to the site online.",
        proc_1_title: "Stage 01 — Discovery",
        proc_1_desc: "We learn about your business, goals, and project needs.",
        proc_2_title: "Stage 02 — Proposal",
        proc_2_desc: "We define the scope, features, timelines, and budget.",
        proc_3_title: "Stage 03 — Design & development",
        proc_3_desc: "We build the site following the approved proposal and agreed requirements.",
        proc_4_title: "Stage 04 — Review & delivery",
        proc_4_desc: "We review the result, make the included adjustments, and coordinate the launch.",

        plans_title: "A solution that fits your project.",
        plans_desc: "Not every business needs the same website. That's why every proposal is defined by scope, content, and required features.",
        plan_badge: "RECOMMENDED",
        plan_1_label: "LANDING",
        plan_1_title: "Landing page",
        plan_1_sub: "One-time payment · defined scope",
        plan_1_desc: "To present a service, product, or commercial proposal on a focused page.",
        plan_1_f1: "One page with defined sections",
        plan_1_f2: "Responsive design",
        plan_1_f3: "Form or contact channel",
        plan_1_f4: "Domain and hosting not included",
        plan_2_label: "SITE",
        plan_2_title: "Corporate website",
        plan_2_sub: "One-time payment · according to scope",
        plan_2_desc: "For companies and professionals who need to present their business, services, and contact channels.",
        plan_2_f1: "Multiple sections and internal pages",
        plan_2_f2: "Content structure",
        plan_2_f3: "Form or contact channel",
        plan_2_f4: "Domain and hosting not included",
        plan_3_label: "CUSTOM",
        plan_3_title: "Custom project",
        plan_3_sub: "According to scope and features",
        plan_3_desc: "For online stores, integrations, or any project that requires specific development.",
        plan_3_f1: "Scope to define together",
        plan_3_f2: "Stack adapted to the project",
        plan_3_f3: "Integrations as needed",
        plan_3_f4: "Conditions agreed in writing",

        faq_title: "Frequently asked questions",
        faq_desc: "The most common doubts before starting a project.",
        faq_1_q: "How is the project price defined?",
        faq_1_a: "The price depends on the type of site, number of sections, features, and content. Landing and corporate plans have a reference value starting at USD 350 and USD 700. Custom projects are quoted according to their scope.",
        faq_2_q: "What does the budget include?",
        faq_2_a: "The budget details the scope of work and included services. Domain and hosting are not included unless stated otherwise.",
        faq_3_q: "How long does it take for the site to be ready?",
        faq_3_a: "The timeline depends on the complexity of the site and the availability of the necessary content. It is defined before starting work.",
        faq_4_q: "How is the design defined?",
        faq_4_a: "The visual proposal adapts to the identity, goals, and needs of each project.",
        faq_5_q: "Will the site work on mobile and tablets?",
        faq_5_a: "Sites are developed with responsive design to adapt to different screen sizes.",
        faq_6_q: "Can I request modifications after delivery?",
        faq_6_a: "Subsequent adjustments can be quoted separately or contracted through a maintenance service.",
        faq_7_q: "How do I hire a project?",
        faq_7_a: "Write to us at hola@tagback.com with a description of your project. We will review your needs and prepare a proposal.",

        contact_title: "Tell us your idea.",
        contact_desc: "Fill in the details and tell us what you need. We will contact you to discuss your project.",
        form_title: "Tell us your idea.",
        form_lead: "Fill in the details and we'll contact you.",
        form_name: "Name *",
        form_name_ph: "Your name",
        form_email: "Email address *",
        form_email_ph: "you@email.com",
        form_phone: "Phone",
        form_phone_ph: "Enter your phone number",
        form_type: "Project type *",
        form_type_1: "Landing page",
        form_type_2: "Corporate website",
        form_type_3: "Custom project",
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

/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

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
       GLASS FOLDER CARDS (Proyectos)
       ===================================================== */
    const ART_PRESETS = {
        aurora: { style: "streak", colors: ["#f4efe9", "#e9c2b8", "#c2433f", "#2a1e2a", "#22395e", "#6f97c2", "#e5edf4"], scale: 0.7, warp: 1.4, angle: -0.62, gloss: 0.18, veins: 0 },
        ember: { style: "marble", colors: ["#07090c", "#16252c", "#3d5f68", "#1a1416", "#a3201a", "#ef4a2b", "#ff8a5c"], scale: 0.62, warp: 3.2, angle: -0.5, gloss: 0.55, veins: 0.6 },
        dusk: { style: "marble", colors: ["#120c18", "#3e2850", "#8f6c9c", "#2b1a24", "#b3502f", "#eab08a", "#fbe7d2"], scale: 0.75, warp: 3.6, angle: 0.8, gloss: 0.5, veins: 0.5 },
        verdant: { style: "marble", colors: ["#070b08", "#173024", "#4f7a5a", "#141812", "#a7843a", "#e9cf87", "#fbf3d6"], scale: 0.7, warp: 3.4, angle: 2.1, gloss: 0.5, veins: 0.5 }
    };

    function hexToRgb(hex) {
        let h = hex.trim().replace(/^#/, "");
        if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
        const n = /^[0-9a-f]{6}$/i.test(h) ? parseInt(h, 16) : 0x808080;
        return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    }
    function rng(seed) {
        let a = seed >>> 0;
        return () => {
            a = (a + 0x6d2b79f5) >>> 0;
            let t = a;
            t = Math.imul(t ^ (t >>> 15), t | 1);
            t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }
    function hashString(s) {
        let h = 2166136261;
        for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
        return h >>> 0;
    }
    function makeFbm(seed) {
        const r = rng(seed);
        const perm = new Uint8Array(512);
        const grad = new Float32Array(512);
        const p = [];
        for (let i = 0; i < 256; i++) p.push(i);
        for (let i = 255; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; }
        for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
        for (let i = 0; i < 256; i++) { const a = r() * Math.PI * 2; grad[i * 2] = Math.cos(a); grad[i * 2 + 1] = Math.sin(a); }
        const noise = (x, y) => {
            const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
            const X = xi & 255, Y = yi & 255;
            const h00 = perm[X + perm[Y]] * 2, h10 = perm[X + 1 + perm[Y]] * 2, h01 = perm[X + perm[Y + 1]] * 2, h11 = perm[X + 1 + perm[Y + 1]] * 2;
            const d00 = grad[h00] * xf + grad[h00 + 1] * yf, d10 = grad[h10] * (xf - 1) + grad[h10 + 1] * yf, d01 = grad[h01] * xf + grad[h01 + 1] * (yf - 1), d11 = grad[h11] * (xf - 1) + grad[h11 + 1] * (yf - 1);
            const u = xf * xf * xf * (xf * (xf * 6 - 15) + 10), v = yf * yf * yf * (yf * (yf * 6 - 15) + 10);
            return d00 + u * (d10 - d00) + v * (d01 - d00 + u * (d11 - d01 - d10 + d00));
        };
        return (x, y, octaves) => {
            let sum = 0, amp = 0.5;
            for (let i = 0; i < octaves; i++) {
                sum += amp * noise(x, y);
                const nx = 1.6 * x + 1.2 * y + 7.1;
                y = -1.2 * x + 1.6 * y + 3.3; x = nx; amp *= 0.5;
            }
            return sum;
        };
    }
    function createArtJob(width, height, recipe, seed) {
        const w = Math.max(1, Math.round(width)), h = Math.max(1, Math.round(height));
        const colors = recipe.colors.length >= 2 ? recipe.colors : ["#111111", "#eeeeee"];
        const stops = colors.map((c, i) => ({ t: i / (colors.length - 1), c: hexToRgb(c) }));
        const scale = recipe.scale ?? 0.7, warp = recipe.warp ?? 3, gloss = recipe.gloss ?? 0.4, veins = recipe.veins ?? 0;
        const streak = recipe.style === "streak", fbm = makeFbm(seed * 977 + 13), r = rng(seed + 1);
        const ox = r() * 50, oy = r() * 50, angle = (recipe.angle ?? 0) + (r() - 0.5) * 0.5;
        const ca = Math.cos(angle), sa = Math.sin(angle), m = Math.min(w, h);
        const gw = Math.ceil(w / 2) + 3, gh = Math.ceil(h / 2) + 3;
        const G = new Float32Array(gw * gh), GQ = new Float32Array(gw * gh), F = new Float32Array(w * h), Q = new Float32Array(w * h);
        const pixels = new Uint8ClampedArray(w * h * 4);
        let row = 0;
        const field = (gy) => {
            for (let gx = 0; gx < gw; gx++) {
                const u = ((gx - 1) * 2 - w / 2) / m, v = ((gy - 1) * 2 - h / 2) / m;
                let px = (u * ca - v * sa) * scale, py = (u * sa + v * ca) * scale;
                if (streak) { px *= 0.14; py *= 2.2; }
                px += ox; py += oy;
                const qx = fbm(px, py, 3), qy = fbm(px + 5.2, py + 1.3, 3);
                const rx = fbm(px + warp * qx + 1.7, py + warp * qy + 9.2, 3), ry = fbm(px + warp * qx + 8.3, py + warp * qy + 2.8, 3);
                G[gy * gw + gx] = fbm(px + warp * rx, py + warp * ry, 4);
                GQ[gy * gw + gx] = Math.sqrt(qx * qx + qy * qy);
            }
        };
        const upsample = () => {
            const cr = (a, b, c, d) => (-a + 9 * b + 9 * c - d) / 16, T = new Float32Array(w * gh);
            for (let gy = 0; gy < gh; gy++) { const r = gy * gw; for (let x = 0; x < w; x++) { const c = (x >> 1) + 1; T[gy * w + x] = x & 1 ? cr(G[r + c - 1], G[r + c], G[r + c + 1], G[r + c + 2]) : G[r + c]; } }
            for (let y = 0; y < h; y++) {
                const c = (y >> 1) + 1;
                for (let x = 0; x < w; x++) {
                    F[y * w + x] = y & 1 ? cr(T[(c - 1) * w + x], T[c * w + x], T[(c + 1) * w + x], T[(c + 2) * w + x]) : T[c * w + x];
                    const gx = (x >> 1) + 1, q0 = GQ[c * gw + gx], qx = x & 1 ? (q0 + GQ[c * gw + gx + 1]) / 2 : q0;
                    const q1 = y & 1 ? (x & 1 ? (GQ[(c + 1) * gw + gx] + GQ[(c + 1) * gw + gx + 1]) / 2 : GQ[(c + 1) * gw + gx]) : qx;
                    Q[y * w + x] = (qx + q1) / 2;
                }
            }
        };
        const colorize = () => {
            const sample = [], stride = Math.max(1, Math.floor(F.length / 4096));
            for (let i = 0; i < F.length; i += stride) sample.push(F[i]);
            sample.sort((a, b) => a - b);
            const lo = sample[Math.floor(sample.length * 0.02)], hi = sample[Math.floor(sample.length * 0.98)], k = 1 / (hi - lo || 1);
            const lx = -0.55, ly = -0.65, lz = 0.52, slope = k * m * 0.012;
            for (let y = 0; y < h; y++) {
                for (let x = 0; x < w; x++) {
                    const i = y * w + x; let t = (F[i] - lo) * k; t = t < 0 ? 0 : t > 1 ? 1 : t;
                    let j = 1; while (j < stops.length - 1 && stops[j].t < t) j++;
                    const a = stops[j - 1], b = stops[j]; let f = (t - a.t) / (b.t - a.t || 1); f = f < 0 ? 0 : f > 1 ? 1 : f; f = f * f * (3 - 2 * f);
                    const gx = (F[x < w - 1 ? i + 1 : i] - F[x > 0 ? i - 1 : i]) * slope, gy = (F[y < h - 1 ? i + w : i] - F[y > 0 ? i - w : i]) * slope;
                    const nd = (-gx * lx - gy * ly + lz) / Math.sqrt(gx * gx + gy * gy + 1), spec = Math.pow(nd > 0 ? nd : 0, 24) * gloss * 255;
                    const silk = 1 + 0.035 * Math.sin(t * 150 + Q[i] * 24), vein = veins * Math.max(0, 1 - Math.abs(Q[i] - 0.42) * 14) * 0.6;
                    const lit = (0.82 + 0.28 * nd) * silk * (1 - vein);
                    pixels[i * 4] = (a.c[0] + (b.c[0] - a.c[0]) * f) * lit + spec;
                    pixels[i * 4 + 1] = (a.c[1] + (b.c[1] - a.c[1]) * f) * lit + spec;
                    pixels[i * 4 + 2] = (a.c[2] + (b.c[2] - a.c[2]) * f) * lit + spec;
                    pixels[i * 4 + 3] = 255;
                }
            }
        };
        return { width: w, height: h, pixels, step: (rows) => {
            if (row >= gh) return true;
            const end = Math.min(gh, row + Math.max(1, rows));
            while (row < end) field(row++);
            if (row < gh) return false;
            upsample(); colorize(); return true;
        }};
    }

    const artCache = new Map(), queue = [];
    let pumping = false;
    function pump() {
        if (pumping) return; pumping = true;
        const tick = () => {
            const until = performance.now() + 7;
            while (queue.length && performance.now() < until) {
                const head = queue[0];
                if (head.job.step(4)) {
                    queue.shift();
                    const c = document.createElement("canvas"); c.width = head.job.width; c.height = head.job.height;
                    c.getContext("2d").putImageData(new ImageData(head.job.pixels, c.width, c.height), 0, 0); head.done(c);
                }
            }
            if (queue.length) requestAnimationFrame(tick); else pumping = false;
        };
        requestAnimationFrame(tick);
    }
    function paint(recipe, seed, w, h, priority) {
        const key = JSON.stringify([recipe, seed, w, h]);
        let p = artCache.get(key);
        if (!p) {
            p = new Promise((done) => {
                let at = queue.length;
                while (at > 1 && queue[at - 1].priority > priority) at--;
                queue.splice(at, 0, { job: createArtJob(w, h, recipe, seed), priority, done });
                pump();
            });
            artCache.set(key, p);
        }
        return p;
    }

    // Inicializar Carpetas
    $$(".gf-root").forEach((root) => {
        const label = root.dataset.label || "My Files";
        const tone = root.dataset.tone || "light";
        const artName = root.dataset.art || "aurora";
        const seed = parseInt(root.dataset.seed || "3", 10);
        const action = root.dataset.action || "add";
        const labelPlacement = root.dataset.place || "bottom-left";
        const initialFiles = JSON.parse(root.dataset.files || "[]");
        
        let files = [...initialFiles];
        let isOpen = false;
        let menuOpen = false;
        let bump = 0;
        let dropped = null;
        const ids = files.map((_, i) => i);
        let nextId = files.length;

        const W = 340, H = 272, HEADROOM = 54, FRONT_TOP = 74, FRONT_H = H - FRONT_TOP, SHEET_W = 272, SHEET_H = 184;
        const BACK_PATH = "M0 56A22 22 0 0 1 22 34L146 34C170 34 172 0 198 0L318 0A22 22 0 0 1 340 22L340 250A22 22 0 0 1 318 272L22 272A22 22 0 0 1 0 250Z";
        const FRONT_PATH = "M0 22A22 22 0 0 1 22 0L118 0C144 0 146 32 172 32L318 32A22 22 0 0 1 340 54L340 " + (FRONT_H - 22) + "A22 22 0 0 1 318 " + FRONT_H + "L22 " + FRONT_H + "A22 22 0 0 1 0 " + (FRONT_H - 22) + "Z";
        const MAX_VISIBLE = 4;

        root.innerHTML = `
            <div class="gf-stage">
                <div class="gf-tilt">
                    <div class="gf-shadow" aria-hidden="true"></div>
                    <div class="gf-back" style="clip-path: path('${BACK_PATH}')" aria-hidden="true">
                        <div class="gf-back-sheen"></div>
                    </div>
                    <svg class="gf-rim gf-back-rim" viewBox="0 0 ${W} ${H}" aria-hidden="true"><path d="${BACK_PATH}" /></svg>
                    
                    <div class="gf-files" role="list" aria-label="${label} contents"></div>
                    
                    <div class="gf-front" style="clip-path: path('${FRONT_PATH}')">
                        <div class="gf-tint" aria-hidden="true"></div>
                        <div class="gf-spec" aria-hidden="true"></div>
                        <svg class="gf-rim gf-front-rim" viewBox="0 0 ${W} ${FRONT_H}" aria-hidden="true">
                            <defs><linearGradient id="rim-${seed}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0.95"/><stop offset="0.35" stop-color="#fff" stop-opacity="0.35"/><stop offset="1" stop-color="#fff" stop-opacity="0.12"/></linearGradient></defs>
                            <path d="${FRONT_PATH}" stroke="url(#rim-${seed})" />
                        </svg>
                        <button class="gf-hit" type="button" aria-expanded="false" aria-label="Abrir ${label}"></button>
                        <div class="gf-label">
                            <span class="gf-title">${label}</span>
                            <span class="gf-meta">${files.length} items</span>
                        </div>
                    </div>
                    
                    <button class="gf-key gf-key--${action}" aria-label="${action === 'add' ? 'Añadir archivo' : 'Más opciones'}">
                        ${action === 'add' ? '<svg class="gf-glyph gf-glyph--plus" viewBox="0 0 24 24"><path d="M12 4.5v15M4.5 12h15"/></svg>' : '<svg class="gf-glyph gf-glyph--more" viewBox="0 0 30 12"><rect x="1" y="1.5" width="8" height="9" rx="3.4"/><rect x="11" y="1.5" width="8" height="9" rx="3.4"/><rect x="21" y="1.5" width="8" height="9" rx="3.4"/></svg>'}
                    </button>
                    
                    ${action === 'more' ? `<div class="gf-menu" role="menu"><button class="gf-menu-item" role="menuitem">Abrir carpeta</button><button class="gf-menu-item" role="menuitem">Renombrar</button><button class="gf-menu-item" role="menuitem">Compartir</button></div>` : ''}
                </div>
            </div>
        `;

        const stage = $(".gf-stage", root);
        const tilt = $(".gf-tilt", root);
        const artCanvas = document.createElement("canvas");
        artCanvas.className = "gf-art";
        artCanvas.width = W + 24; artCanvas.height = H + 24;
        $(".gf-back", root).prepend(artCanvas);

        // Pintar arte de fondo
        if (artName !== "none" && ART_PRESETS[artName]) {
            paint(ART_PRESETS[artName], seed, W + 24, H + 24, 0).then((src) => {
                artCanvas.getContext("2d").drawImage(src, 0, 0);
            });
        }

        // Función para renderizar archivos
        const renderFiles = () => {
            const filesEl = $(".gf-files", root);
            const start = Math.max(0, files.length - MAX_VISIBLE);
            const visible = files.slice(start);
            filesEl.innerHTML = "";
            
            visible.forEach((file, v) => {
                const id = ids[start + v];
                const slot = visible.length <= 1 ? 0 : (v / (visible.length - 1)) * 2 - 1;
                const jitter = rng(hashString(file.name) + id);
                const picture = !!(file.art || file.image);
                
                const inner = document.createElement("div");
                inner.style.cssText = "position:absolute;inset:0;pointer-events:none;";
                
                if (picture) {
                    if (file.image) {
                        inner.innerHTML = `<img class="gf-sheet-art" src="${file.image}" alt="" width="${SHEET_W}" height="${SHEET_H}" draggable="false">`;
                    } else {
                        const sheetCanvas = document.createElement("canvas");
                        sheetCanvas.className = "gf-sheet-art";
                        sheetCanvas.width = SHEET_W; sheetCanvas.height = SHEET_H;
                        inner.appendChild(sheetCanvas);
                        if (ART_PRESETS[file.art]) {
                            paint(ART_PRESETS[file.art], hashString(file.name) % 997, SHEET_W, SHEET_H, 1).then((src) => {
                                sheetCanvas.getContext("2d").drawImage(src, 0, 0);
                            });
                        }
                    }
                } else {
                    inner.innerHTML = `<span class="gf-lines"><i style="width:86%"></i><i style="width:92%"></i><i style="width:64%"></i><i style="width:88%"></i><i style="width:42%"></i></span>`;
                }
                
                inner.innerHTML += `<span class="gf-sheet-head"><span class="gf-sheet-name">${file.name}</span>${file.meta ? `<span class="gf-sheet-meta">${file.meta}</span>` : ''}</span>`;
                
                const btn = document.createElement(file.href ? "a" : "button");
                btn.className = "gf-sheet" + (picture ? " gf-sheet--art" : "");
                if (file.href) btn.href = file.href;
                else btn.type = "button";
                btn.style.setProperty("--gf-slot", slot);
                btn.style.setProperty("--gf-depth", visible.length - 1 - v);
                btn.style.setProperty("--gf-jx", ((jitter() - 0.5) * 10).toFixed(2) + "px");
                btn.style.setProperty("--gf-jr", ((jitter() - 0.5) * 3.2).toFixed(2) + "deg");
                btn.style.zIndex = v + 1;
                btn.appendChild(inner);
                
                filesEl.appendChild(btn);
            });
        };

        renderFiles();
        
        // Entrada
        setTimeout(() => root.setAttribute("data-entered", ""), 100);

        // Abrir/Cerrar
        const hit = $(".gf-hit", root);
        hit.addEventListener("click", () => {
            isOpen = !isOpen;
            root.toggleAttribute("data-open", isOpen);
            hit.setAttribute("aria-expanded", isOpen);
        });

        // Botón +
        const key = $(".gf-key", root);
        if (key && action === "add") {
            key.addEventListener("click", () => {
                const newFile = { name: "Untitled " + (files.length + 1), meta: "Just now" };
                files.push(newFile);
                ids.push(nextId++);
                renderFiles();
                $(".gf-meta", root).textContent = files.length + " items";
                key.style.animation = "none";
                key.offsetHeight; // trigger reflow
                key.style.animation = "gf-turn 0.6s var(--gf-spring)";
            });
        }

        // Botón menú
        if (key && action === "more") {
            const menu = $(".gf-menu", root);
            key.addEventListener("click", (e) => {
                e.stopPropagation();
                menuOpen = !menuOpen;
                menu.toggleAttribute("data-open", menuOpen);
            });
            document.addEventListener("click", (e) => {
                if (!root.contains(e.target)) {
                    menuOpen = false;
                    menu.removeAttribute("data-open");
                }
            });
        }

        // Parallax
        if (!reducedMotion) {
            root.addEventListener("pointermove", (e) => {
                const r = root.getBoundingClientRect();
                const px = ((e.clientX - r.left) / r.width) * 2 - 1;
                const py = ((e.clientY - r.top) / r.height) * 2 - 1;
                root.style.setProperty("--gf-px", px.toFixed(3));
                root.style.setProperty("--gf-py", py.toFixed(3));
            });
            root.addEventListener("pointerleave", () => {
                root.style.setProperty("--gf-px", 0);
                root.style.setProperty("--gf-py", 0);
            });
        }
    });

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
       INTRO / LOGO
       ===================================================== */

    const intro = $("#tb-intro");

    if (intro) {
        const INTRO_KEY = "tagback-intro-shown";
        let introHidden = false;

        const hideIntro = () => {
            if (introHidden) return;
            introHidden = true;
            intro.classList.add("is-hiding");
            intro.setAttribute("aria-hidden", "true");

            const cleanup = () => {
                if (intro.parentNode) {
                    intro.parentNode.removeChild(intro);
                }
            };

            intro.addEventListener("transitionend", cleanup, { once: true });
            window.setTimeout(cleanup, 700);
        };

        let alreadyShown = false;
        try {
            alreadyShown = sessionStorage.getItem(INTRO_KEY) === "1";
        } catch (_) {}

        if (reducedMotion || alreadyShown) {
            hideIntro();
        } else {
            window.setTimeout(hideIntro, 350);
            try {
                sessionStorage.setItem(INTRO_KEY, "1");
            } catch (_) {}
        }
    }

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
       MENÚ SECUNDARIO "MÁS"
       ===================================================== */

    const moreToggle = $(".nav-more-toggle");
    const moreMenu = $("#nav-more-menu");

    if (moreToggle && moreMenu) {
        const closeMore = () => {
            moreMenu.hidden = true;
            moreToggle.setAttribute("aria-expanded", "false");
        };

        const openMore = () => {
            moreMenu.hidden = false;
            moreToggle.setAttribute("aria-expanded", "true");
        };

        closeMore();

        moreToggle.addEventListener("click", (event) => {
            event.stopPropagation();
            if (moreMenu.hidden) {
                openMore();
            } else {
                closeMore();
            }
        });

        document.addEventListener("click", (event) => {
            if (!event.target.closest(".nav-more")) {
                closeMore();
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && !moreMenu.hidden) {
                closeMore();
                moreToggle.focus();
            }
        });

        $$(".nav-more-menu a").forEach((link) => {
            link.addEventListener("click", closeMore);
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

    $$(".accordion-item, .service-card").forEach((item) => {
        const accHeader = $(".accordion-header, .service-card-header", item);
        if (!accHeader) return;

        accHeader.addEventListener("click", () => {
            const wasOpen = item.classList.contains("is-open");
            const stack = item.parentElement;

            if (stack) {
                $$(".accordion-item, .service-card", stack).forEach((sibling) => {
                    if (sibling === item) return;
                    sibling.classList.remove("is-open");
                    const siblingHeader = $(".accordion-header, .service-card-header", sibling);
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
       FAQ: UNA PREGUNTA ABIERTA POR VEZ
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
    });

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
       PROCESO — ENTRADA EN VIEWPORT
       ===================================================== */

    const processItems = $$(".process-item");

    if (processItems.length) {
        if (reducedMotion) {
            processItems.forEach((item) => item.classList.add("is-visible"));
        } else if ("IntersectionObserver" in window) {
            const processObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                });
            }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });

            processItems.forEach((item, index) => {
                item.style.setProperty("--process-delay", `${index * 120}ms`);
                processObserver.observe(item);
            });
        } else {
            processItems.forEach((item) => item.classList.add("is-visible"));
        }
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
