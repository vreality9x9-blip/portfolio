// Bilingual Translations
const translations = {
    fr: {
        nav: ["Accueil", "Projets", "À Propos", "Contact"],
        hero: {
            avail: "Disponible immédiatement — Freelance & Temps plein",
            greeting: "👋 Bonjour, je suis",
            role: "Développeuse Full Stack",
            desc: "De l'<strong>architecture microservices</strong> aux <strong>smart contracts Solidity</strong>, je conçois des solutions numériques robustes et scalables. J'ai collaboré avec des équipes produit dans la <strong>DeFi</strong>, la <strong>HealthTech</strong> et le <strong>SaaS B2B</strong>. <span class='text-gradient'>Chaque projet est une mission.</span>",
            cta: ["Explorer mes projets", "Démarrer un projet"]
        },
        stats: ["Projets Livrés", "Clients Satisfaits", "Années d'Expérience"],
        sections: {
            projects: "Mes Projets Récents",
            about: "À Propos de Moi",
            contact: "Me Contacter",
            start: "Démarrez Votre Projet"
        },
        contact_intro: "Vous avez une idée ? Un projet DeFi, une application web ou une refonte backend ?<br><strong>Je suis prête à relever le défi.</strong> Discutons-en !",
        about_html: `
            <p class="about-lead">Architecte de solutions numériques avec <span class="highlight">10+ ans d'expérience</span>, je transforme des défis complexes en produits robustes et scalables.</p>
            <div class="about-columns">
                <div class="about-column">
                    <h3><i class="fas fa-rocket"></i> Mon Parcours</h3>
                    <p>Mon voyage a commencé par le <strong class="text-white">développement backend</strong> haute performance pour des systèmes bancaires. Fascinée par la décentralisation, j'ai pivoté vers le <strong class="text-white">Web3</strong> en 2018, auditant et déployant des smart contracts gérant aujourd'hui des millions en TVL.</p>
                    <p>J'ai accompagné :</p>
                    <ul class="about-list">
                        <li><i class="fas fa-check-circle"></i> <strong>2 Licornes Fintech</strong> dans leur expansion internationale.</li>
                        <li><i class="fas fa-check-circle"></i> <strong>15+ Startups</strong> du MVP à la Série A.</li>
                        <li><i class="fas fa-check-circle"></i> <strong>Des DAO majeures</strong> sur la gouvernance on-chain.</li>
                    </ul>
                </div>
                <div class="about-column">
                    <h3><i class="fas fa-lightbulb"></i> Ma Philosophie</h3>
                    <p>Je ne suis pas une simple exécutante. Je suis une <strong class="text-white">partenaire technique</strong>.</p>
                    <p>Je crois fermement que la qualité du code est directement liée à la pérennité du business. Un code propre réduit la dette technique, accélère les features futures et sécurise l'actif le plus précieux : vos données.</p>
                    <div class="about-philosophy-box">
                        <em>"L'excellence n'est pas un acte, mais une habitude. Je construis chaque module comme s'il devait durer 10 ans."</em>
                    </div>
                </div>
            </div>
            <div class="why-me-grid">
                <div class="why-item">
                    <span class="why-icon">⚡</span>
                    <h4>Performance First</h4>
                    <p>Optimisation obsessionnelle. Chaque milliseconde compte pour l'utilisateur.</p>
                </div>
                <div class="why-item">
                    <span class="why-icon">🛡️</span>
                    <h4>Sécurité by Design</h4>
                    <p>Pas de compromis. Audits rigoureux et meilleures pratiques OWASP/Solidity.</p>
                </div>
                <div class="why-item">
                    <span class="why-icon">🤝</span>
                    <h4>Communication Claire</h4>
                    <p>Je parle "Tech" ET "Business". Transparence totale sur l'avancement.</p>
                </div>
            </div>
        `,
        modal: {
            view: "Voir le projet",
            screens: "Captures d'écran"
        },
        form: {
            labels: ["Nom", "Email", "Type de projet", "Message"],
            placeholders: ["Votre nom complet", "votre@email.com", "Décrivez votre projet, vos besoins et vos objectifs..."],
            options: [
                "Sélectionnez le type de projet",
                "Web3 / DeFi / Smart Contract",
                "Application Web / SaaS",
                "Backend / API / Microservices",
                "Application Mobile",
                "DevOps / Infrastructure",
                "Autre"
            ],
            btn: "Envoyer le message"
        },
        contact: {
            touch: "Parlons de votre projet",
            desc: "Réponse garantie sous 24h. Je suis disponible pour des missions freelance, des collaborations long terme ou du consulting ponctuel.",
            info_labels: ["Localisation", "Disponibilité"],
            location_value: "Bordeaux, France — Télétravail international",
            avail_value: "Immédiate — Temps plein ou partiel"
        }
    },
    en: {
        nav: ["Home", "Projects", "About", "Contact"],
        hero: {
            avail: "Available immediately — Freelance & Full-time",
            greeting: "👋 Hi, I am",
            role: "Full Stack Developer",
            desc: "From <strong>microservices architecture</strong> to <strong>Solidity smart contracts</strong>, I design robust and scalable digital solutions. I have collaborated with product teams in <strong>DeFi</strong>, <strong>HealthTech</strong>, and <strong>B2B SaaS.</strong> <span class='text-gradient'>Every project is a mission.</span>",
            cta: ["Explore my projects", "Start a project"]
        },
        stats: ["Delivered Projects", "Happy Clients", "Years of Experience"],
        sections: {
            projects: "My Recent Projects",
            about: "About Me",
            contact: "Contact Me",
            start: "Start Your Project"
        },
        contact_intro: "Do you have an idea? A DeFi project, a web app, or a backend refactoring?<br><strong>I am ready to take the challenge.</strong> Let's discuss!",
        about_html: `
            <p class="about-lead">Digital Solutions Architect with <span class="highlight">10+ years of experience</span>, I transform complex challenges into robust and scalable products.</p>
            <div class="about-columns">
                <div class="about-column">
                    <h3><i class="fas fa-rocket"></i> My Journey</h3>
                    <p>My journey began with high-performance <strong class="text-white">backend development</strong> for banking systems. Fascinated by decentralization, I pivoted to <strong class="text-white">Web3</strong> in 2018, auditing and deploying smart contracts managing millions in TVL today.</p>
                    <p>I have accompanied:</p>
                    <ul class="about-list">
                        <li><i class="fas fa-check-circle"></i> <strong>2 Fintech Unicorns</strong> in their international expansion.</li>
                        <li><i class="fas fa-check-circle"></i> <strong>15+ Startups</strong> from MVP to Series A.</li>
                        <li><i class="fas fa-check-circle"></i> <strong>Major DAOs</strong> on on-chain governance.</li>
                    </ul>
                </div>
                <div class="about-column">
                    <h3><i class="fas fa-lightbulb"></i> My Philosophy</h3>
                    <p>I am not just an executor. I am a <strong class="text-white">Technical Partner</strong>.</p>
                    <p>I firmly believe that code quality is directly linked to business longevity. Clean code reduces technical debt, accelerates future features, and secures your most valuable asset: your data.</p>
                    <div class="about-philosophy-box">
                        <em>"Excellence is not an act, but a habit. I build every module as if it were to last 10 years."</em>
                    </div>
                </div>
            </div>
            <div class="why-me-grid">
                <div class="why-item">
                    <span class="why-icon">⚡</span>
                    <h4>Performance First</h4>
                    <p>Obsessive optimization. Every millisecond counts for the user.</p>
                </div>
                <div class="why-item">
                    <span class="why-icon">🛡️</span>
                    <h4>Security by Design</h4>
                    <p>No compromises. Rigorous audits and OWASP/Solidity best practices.</p>
                </div>
                <div class="why-item">
                    <span class="why-icon">🤝</span>
                    <h4>Clear Communication</h4>
                    <p>I speak "Tech" AND "Business". Total transparency on progress.</p>
                </div>
            </div>
        `,
        modal: {
            view: "View Project",
            screens: "Screenshots"
        },
        form: {
            labels: ["Name", "Email", "Project Type", "Message"],
            placeholders: ["Your full name", "your@email.com", "Describe your project, needs, and goals..."],
            options: [
                "Select project type",
                "Web3 / DeFi / Smart Contract",
                "Web App / SaaS",
                "Backend / API / Microservices",
                "Mobile App",
                "DevOps / Infrastructure",
                "Other"
            ],
            btn: "Send Message"
        },
        contact: {
            touch: "Let's talk about your project",
            desc: "Response guaranteed within 24h. Available for freelance missions, long-term collaborations, or spot consulting.",
            info_labels: ["Location", "Availability"],
            location_value: "Bordeaux, France — Remote worldwide",
            avail_value: "Immediate — Full-time or Part-time"
        }
    }
};

// Bilingual Project Data (Same as before)
const projects = [
    {
        id: 1,
        title: "DataForge API",
        category: { fr: "Backend System", en: "Backend System" },
        image: "assets/dataforge_main.png",
        tech: ["Go", "gRPC", "PostgreSQL", "Redis", "Kubernetes", "Kafka"],
        description: {
            fr: "Plateforme backend haute performance basée sur une architecture microservices. Gère 10K+ req/s avec un taux d'erreur de 0.12%. Inclut un API Gateway intelligent, un système de cache distribué, du rate limiting avancé et une documentation Swagger auto-générée.",
            en: "High-performance backend platform based on microservices architecture. Handles 10K+ req/s with a 0.12% error rate. Includes smart API Gateway, distributed caching, advanced rate limiting, and auto-generated Swagger documentation."
        },
        details: [
            { src: "assets/dataforge_main.png", caption: "Dashboard — Endpoints & Health Status" },
            { src: "assets/dataforge_metrics.png", caption: "Monitoring — Latency, CPU & Throughput" },
            { src: "assets/dataforge_docs.png", caption: "API Documentation — Interactive Swagger" }
        ]
    },
    {
        id: 2,
        title: "UrbanLiving",
        category: { fr: "Immobilier", en: "Real Estate" },
        image: "assets/project4.png",
        tech: ["Next.js", "Mapbox", "Supabase"],
        description: {
            fr: "Plateforme immobilière moderne avec recherche cartographique interactive. Les utilisateurs peuvent filtrer les biens, visiter virtuellement les appartements et contacter les agents directement.",
            en: "Modern real estate platform with interactive map search. Users can filter properties, virtually visit apartments, and contact agents directly."
        },
        details: [
            { src: "assets/project4.png", caption: "Search with Listings & Map" },
            { src: "assets/detail_urban.png", caption: "Map View — Property Detail" },
            { src: "assets/urban_detail.png", caption: "Apartment Card — Central London" },
            { src: "assets/urban_favorites.png", caption: "Favorites — Saved Properties" }
        ]
    },
    {
        id: 3,
        title: "NexSwap DEX",
        category: { fr: "Web3 / DeFi", en: "Web3 / DeFi" },
        image: "assets/nexswap_main.png",
        tech: ["Solidity", "Uniswap V3", "Hardhat", "ethers.js", "The Graph"],
        description: {
            fr: "Un exchange décentralisé (DEX) avec Automated Market Maker (AMM). Supporte le swap de tokens ERC-20, la fourniture de liquidité concentrée, le farming de rendement et un système de gouvernance on-chain. Architecture multi-chain compatible Ethereum, Polygon et Arbitrum.",
            en: "Decentralized Exchange (DEX) with Automated Market Maker (AMM). Supports ERC-20 token swaps, concentrated liquidity provision, yield farming, and on-chain governance. Multi-chain architecture compatible with Ethereum, Polygon, and Arbitrum."
        },
        details: [
            { src: "assets/nexswap_main.png", caption: "Swap Interface — ETH to USDC" },
            { src: "assets/nexswap_pools.png", caption: "Liquidity Pools — TVL & APY" },
            { src: "assets/nexswap_analytics.png", caption: "DeFi Analytics — Volume & TVL" },
            { src: "assets/nexswap_detail.png", caption: "Token Detail — History & Transactions" }
        ]
    },
    {
        id: 4,
        title: "CloudOps",
        category: { fr: "DevOps / SRE", en: "DevOps / SRE" },
        image: "assets/cloudops_main.png",
        tech: ["Terraform", "Docker", "K8s", "Prometheus", "Go", "GitLab CI"],
        description: {
            fr: "Plateforme d'infrastructure-as-code et monitoring temps réel. Orchestre des clusters Kubernetes multi-régions, pipelines CI/CD automatisés, agrégation de logs centralisée et alerting intelligent. Uptime garanti de 99.97% SLA.",
            en: "Infrastructure-as-code and real-time monitoring platform. Orchestrates multi-region Kubernetes clusters, automated CI/CD pipelines, centralized log aggregation, and intelligent alerting. Guaranteed 99.97% SLA uptime."
        },
        details: [
            { src: "assets/cloudops_main.png", caption: "Infrastructure — K8s Pods & Pipeline" },
            { src: "assets/cloudops_pipeline.png", caption: "CI/CD — Multi-Service Pipelines" },
            { src: "assets/cloudops_logs.png", caption: "Logs — Aggregation & Real-Time Search" }
        ]
    },
    {
        id: 5,
        title: "ChainVault",
        category: { fr: "Web3 / Wallet", en: "Web3 / Wallet" },
        image: "assets/chainvault_main.png",
        tech: ["React", "Web3.js", "WalletConnect", "Solana SDK", "Rust"],
        description: {
            fr: "Wallet multi-chain non-custodial avec agrégateur DeFi intégré. Gère les actifs sur Ethereum, Solana et Polygon. Inclut le staking liquide, un bridge cross-chain, et une galerie NFT avec support ERC-721 et ERC-1155.",
            en: "Non-custodial multi-chain wallet with integrated DeFi aggregator. Manages assets on Ethereum, Solana, and Polygon. Includes liquid staking, cross-chain bridge, and NFT gallery supporting ERC-721 and ERC-1155."
        },
        details: [
            { src: "assets/chainvault_main.png", caption: "Dashboard — Multi-Chain Portfolio" },
            { src: "assets/chainvault_staking.png", caption: "Staking — ETH 4.5% & SOL 7.2% APY" },
            { src: "assets/chainvault_nft.png", caption: "NFT Gallery — Owned Collections" }
        ]
    },
    {
        id: 6,
        title: "EcoTrack",
        category: { fr: "Analytics", en: "Analytics" },
        image: "assets/project2.png",
        tech: ["Vue.js", "D3.js", "Firebase"],
        description: {
            fr: "Tableau de bord de surveillance énergétique. Il permet aux entreprises de suivre leur consommation en temps réel, d'identifier les pics d'utilisation et de réduire leur empreinte carbone grâce à des algorithmes prédictifs.",
            en: "Energy monitoring dashboard. Allows companies to track consumption in real-time, identify peak usage, and reduce carbon footprint using predictive algorithms."
        },
        details: [
            { src: "assets/project2.png", caption: "Dashboard — Real-Time Monitoring" },
            { src: "assets/detail_eco.png", caption: "Energy Report — Carbon Analysis" },
            { src: "assets/eco_alerts.png", caption: "Alerts — Anomaly Detection" },
            { src: "assets/eco_goals.png", caption: "Goals — Carbon Reduction" }
        ]
    }
];

let currentLang = 'fr';

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Nav
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Language Switching Logic
    window.changeLanguage = (lang) => {
        currentLang = lang;
        const t = translations[lang];

        // Nav
        document.querySelectorAll('.nav-links a').forEach((el, index) => {
            if (t.nav[index]) el.textContent = t.nav[index];
        });

        // Switcher State
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) btn.classList.add('active');
        });

        // Hero
        const availBadge = document.querySelector('.availability-badge');
        if (availBadge) {
            availBadge.innerHTML = `<span class="pulse-dot"></span>${t.hero.avail}`;
        }
        document.querySelector('.greeting').textContent = t.hero.greeting;

        const heroH2 = document.querySelector('.hero-content h2');
        if (lang === 'en') {
            heroH2.innerHTML = `Full Stack <span class="role-rotate">Developer</span> · Web3 · Backend`;
        } else {
            heroH2.innerHTML = `Développeuse <span class="role-rotate">Full Stack</span> · Web3 · Backend`;
        }

        document.querySelector('.hero-content p').innerHTML = t.hero.desc;
        const ctaBtns = document.querySelectorAll('.cta-buttons .btn');
        if (ctaBtns[0]) ctaBtns[0].innerHTML = `<i class="fas fa-rocket"></i> ${t.hero.cta[0]}`;
        if (ctaBtns[1]) ctaBtns[1].innerHTML = `<i class="fas fa-paper-plane"></i> ${t.hero.cta[1]}`;

        // Stats
        const statLabels = document.querySelectorAll('.stat-label');
        statLabels.forEach((el, i) => {
            if (t.stats[i]) el.textContent = t.stats[i];
        });

        // Section Titles
        const sectionTitles = document.querySelectorAll('.section-title');
        // 0: Projects, 1: About, 2: Start Project (New)
        if (sectionTitles[0]) sectionTitles[0].textContent = t.sections.projects;
        if (sectionTitles[1]) sectionTitles[1].textContent = t.sections.about;

        // About Content
        document.querySelector('.about-text').innerHTML = t.about_html;

        // Contact Section Title ("Démarrez Votre Projet")
        // It's the h2 inside .contact-section
        const contactTitle = document.querySelector('.contact-section .section-title');
        if (contactTitle) contactTitle.textContent = t.sections.start;

        // Contact Intro
        const contactIntro = document.querySelector('.contact-intro');
        if (contactIntro) contactIntro.innerHTML = t.contact_intro;

        // Form Labels
        const labels = document.querySelectorAll('.form-group label');
        // 0: Name, 1: Email, 2: Type, 3: Message
        if (labels[0]) labels[0].innerHTML = `<i class="fas fa-user"></i> ${t.form.labels[0]}`;
        if (labels[1]) labels[1].innerHTML = `<i class="fas fa-envelope"></i> ${t.form.labels[1]}`;
        if (labels[2]) labels[2].innerHTML = `<i class="fas fa-folder-open"></i> ${t.form.labels[2]}`;
        if (labels[3]) labels[3].innerHTML = `<i class="fas fa-comment-dots"></i> ${t.form.labels[3]}`;

        // Form Placeholders
        document.getElementById('name').placeholder = t.form.placeholders[0];
        document.getElementById('email').placeholder = t.form.placeholders[1];
        document.getElementById('message').placeholder = t.form.placeholders[2];

        // Form Options
        const select = document.getElementById('project-type');
        if (select) {
            // Update options while preserving values
            const options = select.options;
            for (let i = 0; i < options.length; i++) {
                if (t.form.options[i]) options[i].textContent = t.form.options[i];
            }
        }

        // Contact Info
        const contactCardH3 = document.querySelector('.contact-info-card h3');
        if (contactCardH3) contactCardH3.innerHTML = `<i class="fas fa-headset"></i> ${t.contact.touch}`;

        const contactCardP = document.querySelector('.contact-info-card p');
        if (contactCardP) contactCardP.textContent = t.contact.desc;

        // Info Items Labels & Values
        const infoLabels = document.querySelectorAll('.info-label');
        if (infoLabels[0]) infoLabels[0].textContent = t.contact.info_labels[0]; // Location
        if (infoLabels[1]) infoLabels[1].textContent = t.contact.info_labels[1]; // Availability

        const infoValues = document.querySelectorAll('.info-value');
        if (infoValues[0]) infoValues[0].textContent = t.contact.location_value; // Location Value
        if (infoValues[1]) infoValues[1].textContent = t.contact.avail_value; // Availability Value

        // Form Button
        document.querySelector('form button').innerHTML = `<i class="fas fa-paper-plane"></i> ${t.form.btn}`;

        // Projects Grid Categories
        document.querySelectorAll('.project-card').forEach((card, index) => {
            const link = card.querySelector('.project-link');
            const onclickAttr = link.getAttribute('onclick');
            const idMatch = onclickAttr.match(/openModal\((\d+)\)/);
            if (idMatch) {
                const id = parseInt(idMatch[1]);
                const project = projects.find(p => p.id === id);
                if (project) {
                    const catEl = card.querySelector('.card-category');
                    catEl.textContent = project.category[lang];
                    link.innerHTML = `${t.modal.view} <i class="fas fa-arrow-right"></i>`;
                }
            }
        });
    };

    // Animated Stats Counter
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    const animateCounter = (el) => {
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const update = () => {
            current += increment;
            if (current < target) {
                el.textContent = Math.ceil(current);
                requestAnimationFrame(update);
            } else {
                el.textContent = target;
            }
        };
        update();
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                statsAnimated = true;
                statNumbers.forEach(num => animateCounter(num));
            }
        });
    }, { threshold: 0.5 });

    const statsBar = document.querySelector('.hero-stats');
    if (statsBar) statsObserver.observe(statsBar);

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
            navbar.style.backgroundColor = "rgba(3, 4, 7, 0.95)";
        } else {
            navbar.style.boxShadow = "none";
            navbar.style.backgroundColor = "rgba(3, 4, 7, 0.7)";
        }
    });

    // Reveal on Scroll
    const revealElements = document.querySelectorAll('.project-card, .skill-category, .stat-item, .service-card, .about-philosophy, .info-item');
    const revealScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        revealElements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('revealed');
            }
        });
    };
    revealElements.forEach((el, i) => {
        el.style.transitionDelay = `${(i % 4) * 0.1}s`;
    });
    window.addEventListener('scroll', revealScroll);
    revealScroll();

    // MODAL LOGIC (Preserved)
    const modal = document.getElementById('projectModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const modalBody = document.querySelector('.modal-body');

    window.openModal = (projectId) => {
        const project = projects.find(p => p.id === projectId);
        if (!project) return;

        const t = translations[currentLang];

        let galleryHtml = '';
        project.details.forEach(detail => {
            galleryHtml += `
                <div class="media-item">
                    <img src="${detail.src}" alt="${detail.caption}">
                    <p class="media-caption">${detail.caption}</p>
                </div>
            `;
        });

        // Tech stack map
        const techHtml = project.tech.map(t => `<span>${t}</span>`).join('');

        const content = `
            <div class="modal-header-content">
                <h2>${project.title}</h2>
                <div class="modal-tech-stack">
                    ${techHtml}
                </div>
            </div>
            <p class="modal-description">${project.description[currentLang]}</p>
            <h3 class="gallery-title"><i class="fas fa-images"></i> ${t.modal.screens}</h3>
            <div class="modal-gallery">
                ${galleryHtml}
            </div>
        `;

        modalBody.innerHTML = content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // ===== PARALLAX ENGINE =====
    const parallaxElements = [
        { selector: '.hero-bg-mesh', speed: 0.3 },
        { selector: '.profile-glow', speed: 0.15 },
        { selector: '.floating-shape', speed: 0.4 }
    ];

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        parallaxElements.forEach(item => {
            const el = document.querySelector(item.selector);
            if (el) {
                el.style.transform = `translateY(${scrollY * item.speed}px)`;
            }
        });
    });

    // ===== 3D TILT ENGINE =====
    const tiltCards = document.querySelectorAll('.project-card, .service-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / centerY * -8;
            const rotateY = (x - centerX) / centerX * 8;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // ===== PARTICLE SYSTEM (Constellation) =====
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
            }
            draw() {
                ctx.fillStyle = 'rgba(129, 140, 248, 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function init() {
            particlesArray = [];
            for (let i = 0; i < 50; i++) {
                particlesArray.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();

                for (let j = i; j < particlesArray.length; j++) {
                    const dx = particlesArray[i].x - particlesArray[j].x;
                    const dy = particlesArray[i].y - particlesArray[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 150) {
                        ctx.strokeStyle = `rgba(129, 140, 248, ${1 - distance / 150})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animate);
        }

        init();
        animate();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        });
    }
});
