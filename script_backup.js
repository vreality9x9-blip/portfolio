// Project Data
const projects = [

    {
        id: 2,
        title: "EcoTrack Dashboard",
        category: "Analytics",
        image: "assets/project2.png",
        tech: ["Vue.js", "D3.js", "Firebase"],
        description: "Tableau de bord de surveillance ├®nerg├®tique. Il permet aux entreprises de suivre leur consommation en temps r├®el, d'identifier les pics d'utilisation et de r├®duire leur empreinte carbone gr├óce ├á des algorithmes pr├®dictifs.",
        details: [
            { src: "assets/project2.png", caption: "Dashboard ÔÇö Surveillance en Temps R├®el" },
            { src: "assets/detail_eco.png", caption: "Rapport ├ënerg├®tique ÔÇö Analyse Carbone" },
            { src: "assets/eco_alerts.png", caption: "Alertes ÔÇö D├®tection d'Anomalies" },
            { src: "assets/eco_goals.png", caption: "Objectifs ÔÇö R├®duction Carbone" }
        ]
    },
    {
        id: 3,
        title: "HealthSync App",
        category: "Sant├®",
        image: "assets/project3.png",
        tech: ["React Native", "WebRTC", "AWS"],
        description: "Application de t├®l├®m├®decine s├®curis├®e. Les patients peuvent prendre rendez-vous, consulter leur dossier m├®dical et effectuer des consultations vid├®o crypt├®es de bout en bout avec leurs m├®decins.",
        details: [
            { src: "assets/project3.png", caption: "Profil M├®decin & Prise de Rendez-vous" },
            { src: "assets/detail_health.png", caption: "Consultation Vid├®o en Direct" },
            { src: "assets/health_records.png", caption: "Dossier M├®dical ÔÇö R├®sultats & Prescriptions" },
            { src: "assets/health_chat.png", caption: "Messagerie Patient-M├®decin" }
        ]
    },
    {
        id: 4,
        title: "UrbanLiving",
        category: "Immobilier",
        image: "assets/project4.png",
        tech: ["Next.js", "Mapbox", "Supabase"],
        description: "Plateforme immobili├¿re moderne avec recherche cartographique interactive. Les utilisateurs peuvent filtrer les biens, visiter virtuellement les appartements et contacter les agents directement.",
        details: [
            { src: "assets/project4.png", caption: "Recherche avec Listings & Carte" },
            { src: "assets/detail_urban.png", caption: "Vue Carte ÔÇö D├®tail du Bien" },
            { src: "assets/urban_detail.png", caption: "Fiche Appartement ÔÇö Central London" },
            { src: "assets/urban_favorites.png", caption: "Favoris ÔÇö Biens Sauvegard├®s" }
        ]
    },
    {
        id: 5,
        title: "CryptoArt NFT",
        category: "Web3",
        image: "assets/project5.png",
        tech: ["Solidity", "Web3.js", "React"],
        description: "Marketplace NFT d├®centralis├®e. Permet aux artistes de minter leurs ┼ôuvres et aux collectionneurs d'acheter et de vendre des actifs num├®riques sur la blockchain Ethereum avec des frais r├®duits.",
        details: [
            { src: "assets/project5.png", caption: "Galerie NFT ÔÇö Collection Tendance" },
            { src: "assets/detail_crypto.png", caption: "D├®tail Collection" },
            { src: "assets/crypto_detail.png", caption: "Ench├¿re NFT ÔÇö Owl Guardian" },
            { src: "assets/crypto_wallet.png", caption: "Wallet ÔÇö Collection & Transactions" }
        ]
    },
    {
        id: 6,
        title: "GastroReserve",
        category: "Lifestyle",
        image: "assets/project6.png",
        tech: ["Flutter", "Firebase", "Node.js"],
        description: "Application de r├®servation de restaurants haut de gamme. Int├¿gre un calendrier intelligent, la gestion des pr├®f├®rences alimentaires et des notifications de rappel pour les utilisateurs.",
        details: [
            { src: "assets/project6.png", caption: "Accueil & R├®servation" },
            { src: "assets/detail_gastro.png", caption: "D├®tail Restaurant" },
            { src: "assets/gastro_calendar.png", caption: "Calendrier ÔÇö Choix Date & Heure" },
            { src: "assets/gastro_menu.png", caption: "Menu D├®gustation & Accords Vins" }
        ]
    },
    {
        id: 7,
        title: "NexSwap DEX",
        category: "Web3 / DeFi",
        image: "assets/nexswap_main.png",
        tech: ["Solidity", "Uniswap V3", "Hardhat", "ethers.js", "The Graph"],
        description: "Un exchange d├®centralis├® (DEX) avec Automated Market Maker (AMM). Supporte le swap de tokens ERC-20, la fourniture de liquidit├® concentr├®e, le farming de rendement et un syst├¿me de gouvernance on-chain. Architecture multi-chain compatible Ethereum, Polygon et Arbitrum.",
        details: [
            { src: "assets/nexswap_main.png", caption: "Interface de Swap ÔÇö ETH vers USDC" },
            { src: "assets/nexswap_pools.png", caption: "Pools de Liquidit├® ÔÇö TVL & APY" },
            { src: "assets/nexswap_analytics.png", caption: "Analytics DeFi ÔÇö Volume & TVL" },
            { src: "assets/nexswap_detail.png", caption: "D├®tail Token ÔÇö Historique & Transactions" }
        ]
    },
    {
        id: 8,
        title: "ChainVault",
        category: "Web3 / Wallet",
        image: "assets/chainvault_main.png",
        tech: ["React", "Web3.js", "WalletConnect", "Solana SDK", "Rust"],
        description: "Wallet multi-chain non-custodial avec agr├®gateur DeFi int├®gr├®. G├¿re les actifs sur Ethereum, Solana et Polygon. Inclut le staking liquide, un bridge cross-chain, et une galerie NFT avec support ERC-721 et ERC-1155.",
        details: [
            { src: "assets/chainvault_main.png", caption: "Dashboard ÔÇö Portfolio Multi-Chain" },
            { src: "assets/chainvault_staking.png", caption: "Staking ÔÇö ETH 4.5% & SOL 7.2% APY" },
            { src: "assets/chainvault_nft.png", caption: "Galerie NFT ÔÇö Collections D├®tenues" }
        ]
    },
    {
        id: 9,
        title: "DataForge API",
        category: "Backend",
        image: "assets/dataforge_main.png",
        tech: ["Go", "gRPC", "PostgreSQL", "Redis", "Kubernetes", "Kafka"],
        description: "Plateforme backend haute performance bas├®e sur une architecture microservices. G├¿re 10K+ req/s avec un taux d'erreur de 0.12%. Inclut un API Gateway intelligent, un syst├¿me de cache distribu├®, du rate limiting avanc├® et une documentation Swagger auto-g├®n├®r├®e.",
        details: [
            { src: "assets/dataforge_main.png", caption: "Dashboard ÔÇö Endpoints & Health Status" },
            { src: "assets/dataforge_metrics.png", caption: "Monitoring ÔÇö Latence, CPU & Throughput" },
            { src: "assets/dataforge_docs.png", caption: "Documentation API ÔÇö Swagger Interactive" }
        ]
    },
    {
        id: 10,
        title: "CloudOps",
        category: "DevOps / SRE",
        image: "assets/cloudops_main.png",
        tech: ["Terraform", "Docker", "K8s", "Prometheus", "Go", "GitLab CI"],
        description: "Plateforme d'infrastructure-as-code et monitoring temps r├®el. Orchestre des clusters Kubernetes multi-r├®gions, pipelines CI/CD automatis├®s, agr├®gation de logs centralis├®e et alerting intelligent. Uptime garanti de 99.97% SLA.",
        details: [
            { src: "assets/cloudops_main.png", caption: "Infrastructure ÔÇö K8s Pods & Pipeline" },
            { src: "assets/cloudops_pipeline.png", caption: "CI/CD ÔÇö Pipelines Multi-Services" },
            { src: "assets/cloudops_logs.png", caption: "Logs ÔÇö Agr├®gation & Recherche Temps R├®el" }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Nav
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

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

    // MODAL LOGIC
    const modal = document.getElementById('projectModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const modalBody = document.querySelector('.modal-body');

    // Function to open modal
    window.openModal = (projectId) => {
        const project = projects.find(p => p.id === projectId);
        if (!project) return;

        // Build gallery HTML
        let galleryHtml = '';
        project.details.forEach(detail => {
            galleryHtml += `
                <div class="media-item">
                    <img src="${detail.src}" alt="${detail.caption}">
                    <p class="media-caption">${detail.caption}</p>
                </div>
            `;
        });

        const content = `
            <div class="modal-header-content">
                <h2>${project.title}</h2>
                <div class="modal-tech-stack">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
            </div>
            <p class="modal-description">${project.description}</p>
            <h3 class="gallery-title"><i class="fas fa-images"></i> Captures d'├®cran</h3>
            <div class="modal-gallery">
                ${galleryHtml}
            </div>
        `;

        modalBody.innerHTML = content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Close Modal
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close on click outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
