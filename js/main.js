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
        title: "Travailler à l’Aéroport Nice Côte d'Azur: 3 raisons d’embarquer pour une nouvelle aventure professionnelle",
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
    },
    // Répéter pour les autres articles...
    {
        title: "Publicité",
        subtitle: "Espace",
        description: "Espace publicitaire",
        image: "assets/images/publicite.jpg",
        link: "#",
        isAd: true
    }
];

function createArticleCards() {
    const grid = document.getElementById('articles-grid');
    
    if (!grid) {
        console.error('Élément #articles-grid non trouvé');
        return;
    }

    grid.innerHTML = '';
    
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
        
        if (article.isAd) {
            articleCard.classList.add('bg-gradient-to-r', 'from-blue-50', 'to-purple-50', 'border-dashed');
        }
        
        articleCard.innerHTML = `
            <div class="relative overflow-hidden">
                <img 
                    src="${article.image}" 
                    alt="${article.title}" 
                    class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                >
                ${article.isAd ? 
                    '<div class="absolute top-2 right-2 bg-yellow-400 text-xs px-2 py-1 rounded-full">Sponsorisé</div>' : 
                    ''
                }
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
               
                ${!article.isAd ? 
                    `<div class="flex justify-between items-center">
                        <span class="text-blue-600 font-semibold hover:underline flex items-center">
                            Lire la suite
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </div>` 
                    : ''
                }
            </div>
        `;
        
        if (!article.isAd) {
            articleCard.addEventListener('click', () => {
                window.location.href = article.link;
            });
        }
        
        grid.appendChild(articleCard);
    });

    console.log('Articles chargés :', articles.length);
}

document.addEventListener('DOMContentLoaded', createArticleCards);


document.addEventListener('DOMContentLoaded', () => {
    // Vérifiez si Swiper est disponible
    if (typeof Swiper !== 'undefined') {
        const heroSwiper = new Swiper('.hero-slider', {
            // Configuration Swiper
            loop: true,
            effect: 'fade',  // Transition de type fondu
            autoplay: {
                delay: 5000,  // Change slide every 5 seconds
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


// section publicitaire