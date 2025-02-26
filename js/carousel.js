document.addEventListener('DOMContentLoaded', () => {
    // Configuration du Carrousel
    const heroSwiper = new Swiper('.hero .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // Fonction de chargement dynamique des articles
    async function loadArticles() {
        try {
            const response = await fetch('/api/articles');
            const articles = await response.json();
            const grid = document.getElementById('articles-grid');

            articles.forEach(article => {
                const articleCard = `
                    <div class="article-card bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="${article.imageUrl}" alt="${article.title}" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="font-bold text-xl mb-2">${article.title}</h3>
                            <p class="text-gray-600 mb-4">${article.excerpt}</p>
                            <a href="${article.link}" class="text-blue-600 hover:underline">Lire la suite</a>
                        </div>
                    </div>
                `;
                grid.innerHTML += articleCard;
            });
        } catch (error) {
            console.error('Erreur de chargement des articles', error);
        }
    }

    loadArticles();
});