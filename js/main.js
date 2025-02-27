const articles = [
    {
        title: "Retrouvez les vœux d'Emmanuel Macron pour l'année 2025",
        subtitle: "actu<span>vœux</span>",
        description: "Description courte de l'article 1",
        image: "assets/images/actualite-1.jpg",
        link: "actualites/actualite-1.html",
        publishTime: "18:00",
        location: "France"
    },
    {
        title: "SNCF : Le futur train TGV M devrait être prêt pour une mise en service début 2026",
        subtitle: "actu<span>sncf</span>",
        description: "Description courte de l'article 1",
        image: "assets/images/actualite-2.jpeg",
        link: "actualites/actualite-2.html",
        publishTime: "14:30",
        location: "France"
    },
    {
        title: "Attention, cela peut se reproduire : l'ONU met en garde contre le retour des dictateurs",
        subtitle: "actu<span>onu</span>",
        description: "Description courte de l'article 1",
        image: "assets/images/article-2.jpeg",
        link: "actualites/actualite-3.html",
        publishTime: "08:30",
        location: "France"
    },
    {
        title: "Travailler à l'Aéroport Nice Côte d'Azur: 3 raisons d'embarquer pour une nouvelle aventure professionnelle",
        subtitle: "actu<span>aéroport</span>",
        description: "Description courte de l'article 1",
        image: "assets/images/actualite-4.webp",
        link: "actualites/actualite-4.html",
        publishTime: "14:30",
        location: "NICE"
    },
    {
        title: "Métiers de la création et du digital: quelle formation choisir après le bac?",
        subtitle: "actu<span>artsDesign</span>",
        description: "Description courte de l'article 1",
        image: "assets/images/actualite.webp",
        link: "actualites/actualite-5.html",
        publishTime: "9:30",
        location: "Paris"
    }
];

function createArticleCards() {
    const grid = document.getElementById('articles-grid');
    
    if (!grid) {
        console.error('Élément #articles-grid non trouvé');
        return;
    }

    grid.innerHTML = '';
    
    // Création des cartes d'articles
    articles.forEach((article, index) => {
        const articleCard = document.createElement('div');
        articleCard.classList.add(
            'article-card', 
            'bg-white', 
            'rounded-xl', 
            'shadow-lg', 
            'overflow-hidden', 
            'transform', 
            'transition-all', 
            'duration-300',
            'hover:shadow-2xl',
            'hover:scale-105',
            'cursor-pointer',
            'border',
            'border-gray-100',
            'group'
        );
        
        articleCard.innerHTML = `
            <div class="relative overflow-hidden">
                <img 
                    src="${article.image}" 
                    alt="${article.title}" 
                    class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                >
            </div>
            <div class="p-5">
                <h4 class="text-sm text-gray-500 mb-2 uppercase tracking-wider">
                    ${article.subtitle || 'Actualité'}
                </h4>
                <h3 class="font-bold text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    ${article.title}
                </h3>
                <div class="flex items-center text-gray-500 mb-3 text-sm">
                    <div class="flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                        <span>${article.location || 'Non spécifié'}</span>
                    </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>${article.publishTime || 'À l\'instant'}</span>
                    </div>
                </div>
               
                <div class="flex justify-between items-center">
                    <span class="text-blue-600 font-semibold hover:underline flex items-center">
                        Lire la suite
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </div>
            </div>
        `;
        
        articleCard.addEventListener('click', () => {
            window.location.href = article.link;
        });
        
        grid.appendChild(articleCard);
    });

    // Configuration des données publicitaires
    const publicityData = {
        presentation: {
            title: 'Présentation',
            description: 'Découvrez qui nous sommes',
            details: 'Notre mission et nos valeurs',
            image: 'assets/images/presentation.jpg',
            items: [
                'Fondée en 2024',
                'Média indépendant',
                'Engagement pour l\'information'
            ],
            link: 'presentation.html'
        },
        publicite: {
            title: 'Publicité',
            description: 'Votre espace publicitaire',
            details: 'Contactez notre régie',
            image: 'assets/images/publicite.jpg',
            items: [
                'Tarifs compétitifs',
                'Large audience',
                'Formats personnalisés'
            ],
            link: 'publicite.html'
        },
        sponsorise: {
            title: 'Sponsorisé par',
            description: 'Nos principaux sponsors',
            details: 'Merci à nos partenaires',
            image: 'assets/images/sponsors.jpg',
            items: [
                'Entreprise A',
                'Groupe B',
                'Fondation C'
            ],
            link: 'sponsors.html'
        },
        partenaires: {
            title: 'Nos Partenaires',
            description: 'Réseaux et collaborations',
            details: 'Nos partenariats stratégiques',
            image: 'assets/images/partenaires.jpg',
            items: [
                'Média X',
                'Association Y',
                'Plateforme Z'
            ],
            link: 'partenaires.html'
        }
    };

    // Créer une carte publicitaire unique
   // Créer une carte publicitaire unique
   const publicityCard = document.createElement('div');
   publicityCard.classList.add(
       'article-card', 
       'bg-white', 
       'rounded-xl', 
       'shadow-lg', 
       'overflow-hidden', 
       'transform', 
       'transition-all', 
       'duration-300',
       'hover:shadow-2xl',
       'hover:scale-105',
       'cursor-pointer',
       'border',
       'border-gray-100',
       'group'
   );

    // Fonction pour sélectionner une section aléatoire
    function getRandomSection() {
        const sections = Object.keys(publicityData);
        return sections[Math.floor(Math.random() * sections.length)];
    }

    // Fonction pour mettre à jour le contenu de la carte
    function updatePublicityContent(section) {
        const data = publicityData[section];
        
        publicityCard.innerHTML = `
            <div class="relative overflow-hidden cursor-pointer" data-section="${section}">
                <img 
                    src="${data.image}" 
                    alt="${data.title}" 
                    class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                >
                <div class="p-5">
                    <h4 class="text-sm text-gray-500 mb-2 uppercase tracking-wider">
                        Publicité
                    </h4>
                    <h3 class="font-bold text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        ${data.title}
                    </h3>
                    <div class="flex items-center text-gray-500 mb-3 text-sm">
                        <div class="flex items-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                            <span>${data.details}</span>
                        </div>
                    </div>
                   
                    <div class="flex justify-between items-center">
                        <span class="text-blue-600 font-semibold hover:underline flex items-center">
                            Découvrir
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        `;

        // Ajouter l'écouteur d'événement de clic
        publicityCard.querySelector('[data-section]').addEventListener('click', (e) => {
            const section = e.currentTarget.getAttribute('data-section');
            window.location.href = publicityData[section].link;
        });
    }

    // Fonction pour afficher une section aléatoire au chargement
    function displayRandomSection() {
        const randomSection = getRandomSection();
        updatePublicityContent(randomSection);
    }

    // Ajouter la carte à la grille et afficher une section aléatoire
    grid.appendChild(publicityCard);
    displayRandomSection();

    console.log('Articles chargés :', articles.length);
}

document.addEventListener('DOMContentLoaded', createArticleCards);

// Autres scripts existants (Swiper, mobile menu, etc.)
document.addEventListener('DOMContentLoaded', () => {
    // Vérifiez si Swiper est disponible
    if (typeof Swiper !== 'undefined') {
        const heroSwiper = new Swiper('.hero-slider', {
            loop: true,
            effect: 'fade',
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            fadeEffect: {
                crossFade: true
            }
        });
    } else {
        console.error('Swiper library not loaded');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Dropdown menus
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');

    dropdownMenus.forEach(menu => {
        const toggle = menu.querySelector('.dropdown-toggle');
        const content = menu.querySelector('.dropdown-content');

        // Desktop hover
        menu.addEventListener('mouseenter', () => {
            content.classList.remove('hidden');
        });

        menu.addEventListener('mouseleave', () => {
            content.classList.add('hidden');
        });

        // Mobile click
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            content.classList.toggle('hidden');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        dropdownMenus.forEach(menu => {
            const content = menu.querySelector('.dropdown-content');
            if (!menu.contains(e.target)) {
                content.classList.add('hidden');
            }
        });
    });
});

// Script pour la newsletter 
document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.getElementById('newsletter-form');
    
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;

        // Validation basique de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }

        // Simulation d'envoi (à remplacer par un vrai backend)
        alert(`Merci de votre abonnement avec l'email : ${email}`);
        emailInput.value = ''; // Réinitialiser le champ
    });
});