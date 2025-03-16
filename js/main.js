const articles = [
  {
    title: "Retrouvez les vœux d'Emmanuel Macron pour l'année 2025",
    subtitle: "actu<span>vœux</span>",
    description: "Description courte de l'article 1",
    image: "assets/images/actualite-1.jpg",
    link: "actualites/actualite-1.html",
    publishTime: "18:00",
    location: "France",
  },
  {
    title:
      "SNCF : Le futur train TGV M devrait être prêt pour une mise en service début 2026",
    subtitle: "actu<span>sncf</span>",
    description: "Description courte de l'article 1",
    image: "assets/images/actualite-2.jpeg",
    link: "actualites/actualite-2.html",
    publishTime: "14:30",
    location: "France",
  },
  {
    title:
      "Attention, cela peut se reproduire : l'ONU met en garde contre le retour des dictateurs",
    subtitle: "actu<span>onu</span>",
    description: "Description courte de l'article 1",
    image: "assets/images/article-2.jpeg",
    link: "actualites/actualite-3.html",
    publishTime: "08:30",
    location: "France",
  },
  {
    title:
      "Herbert Léonard, le célèbre chanteur français, est mort à l'âge de 80 ans",
    subtitle: "actu<span>Herbert</span>",
    description: "Description courte de l'article 1",
    image: "assets/images/herbert.jpg",
    link: "actualites/actualite-4.html",
    publishTime: "22:12",
    location: "FRANCE",
  },
  {
    title:
      "Métiers de la création et du digital: quelle formation choisir après le bac?",
    subtitle: "actu<span>artsDesign</span>",
    description: "Description courte de l'article 1",
    image: "assets/images/actualite.webp",
    link: "actualites/actualite-5.html",
    publishTime: "9:30",
    location: "Paris",
  },
];

function createArticleCards() {
  const grid = document.getElementById("articles-grid");

  if (!grid) {
    console.error("Élément #articles-grid non trouvé");
    return;
  }

  grid.innerHTML = "";

  // Création des cartes d'articles
  articles.forEach((article, index) => {
    const articleCard = document.createElement("div");
    articleCard.classList.add(
      "article-card",
      "bg-white",
      "rounded-xl",
      "shadow-lg",
      "overflow-hidden",
      "transform",
      "transition-all",
      "duration-300",
      "hover:shadow-2xl",
      "hover:scale-105",
      "cursor-pointer",
      "border",
      "border-gray-100",
      "group"
    );

    articleCard.innerHTML = `
            <div class="relative overflow-hidden">
                <img 
                    src="${article.image}" 
                    alt="${article.title}" 
                    class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                >
            </div>
            <div class="p-5">
                <h4 class="text-sm text-gray-500 mb-2 uppercase tracking-wider">
                    ${article.subtitle || "Actualité"}
                </h4>
                <h3 class="font-bold text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    ${article.title}
                </h3>
                <div class="flex items-center text-gray-500 mb-3 text-sm">
                    <div class="flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                        <span>${article.location || "Non spécifié"}</span>
                    </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>${article.publishTime || "À l'instant"}</span>
                    </div>
                </div>
               
            </div>
        `;

    articleCard.addEventListener("click", () => {
      window.location.href = article.link; // Redirige vers l'URL de l'article
    });

    grid.appendChild(articleCard);
  });

  // Configuration des données publicitaires
  const donneesPublicite = {
    sponsorise: {
      titre: "Sponsorisé par ÉclatPur",
      description:
        "L'Art de Sublimer la Brillanceet la Pureté de votre Quotidien ! ",
      details: "Merci à nos partenaires",
      image: "assets/images/produit1.jpg",
      elements: ["Entreprise A", "Groupe B", "Fondation C"],
      lien: "actualites/sponsors.html",
    },
  };

  // Création de la carte de publicité
  const publiciteCard = document.createElement("div");
  publiciteCard.classList.add(
    "article-card",
    "bg-white",
    "rounded-xl",
    "shadow-lg",
    "overflow-hidden",
    "transform",
    "transition-all",
    "duration-300",
    "hover:shadow-2xl",
    "hover:scale-105"
    
  );

  // Séparation du titre
  const titreParts = donneesPublicite.sponsorise.titre.split(" ");
  const partieSponsorise = titreParts.slice(0, 2).join(" "); // "Sponsorisé par"
  const partieTitre = titreParts.slice(2).join(" "); // "ÉclatPur"

  publiciteCard.innerHTML = `
        <div class="relative overflow-hidden mb-4 cursor-pointer">
            <img 
                src="${donneesPublicite.sponsorise.image}" 
                alt="${donneesPublicite.sponsorise.titre}" 
                class="w-full h-auto object-cover transition-transform duration-300"
            >
        </div>
        <div class="p-5 cursor-pointer">
        
            <h2 class="text-xl mb-2 tracking-wider font-bold hover:text-blue-600 transition-colors duration-300">
      <span class="text-gray-400">${partieSponsorise}</span>
      <span class="text-gray-500">${partieTitre}</span>
    </h2>
            <h3 class="font-bold text-xl mb-3 text-gray-600  hover:text-gray-800 transition-colors duration-300">
                  ${donneesPublicite.sponsorise.description}
                </h3>
           
        </div>
    `;

  // Ajoutez un gestionnaire d'événements de clic pour la carte de publicité
  publiciteCard.addEventListener("click", () => {
    window.location.href = donneesPublicite.sponsorise.lien; // Redirige vers la page de publicité
  });

  // Ajouter la carte de publicité au grid
  grid.appendChild(publiciteCard);
}

// S'assurer que la fonction est appelée lorsque le DOM est complètement chargé
document.addEventListener("DOMContentLoaded", createArticleCards);

// Autres scripts existants (Swiper, mobile menu, etc.)

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Dropdown menus
  const dropdownMenus = document.querySelectorAll(".dropdown-menu");

  dropdownMenus.forEach((menu) => {
    const toggle = menu.querySelector(".dropdown-toggle");
    const content = menu.querySelector(".dropdown-content");

    // Desktop hover
    menu.addEventListener("mouseenter", () => {
      content.classList.remove("hidden");
    });

    menu.addEventListener("mouseleave", () => {
      content.classList.add("hidden");
    });

    // Mobile click
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      content.classList.toggle("hidden");
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    dropdownMenus.forEach((menu) => {
      const content = menu.querySelector(".dropdown-content");
      if (!menu.contains(e.target)) {
        content.classList.add("hidden");
      }
    });
  });
});

// Script pour la newsletter
document.addEventListener("DOMContentLoaded", () => {
  const newsletterForm = document.getElementById("newsletter-form");

  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value;

    // Validation basique de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }

    // Simulation d'envoi (à remplacer par un vrai backend)
    alert(`Merci de votre abonnement avec l'email : ${email}`);
    emailInput.value = ""; // Réinitialiser le champ
  });
});
