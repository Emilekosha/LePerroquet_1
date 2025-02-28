const pathPrefix = window.location.pathname.includes("/actualites/") ? "../" : "";

document.getElementById('header').innerHTML = `
    <header class="bg-gradient-to-r from-blue-500 to-purple-600 shadow-md">
    <div class="logo flex items-center justify-between mx-auto p-4">
        <div class="flex items-center">
            <img src="${pathPrefix}assets/images/logo1.png" alt="Logo Actualités Locales" class="h-12 rounded-full border-2 border-white">
            <h1 class="font-[Bebas Neue] text-4xl font-bold inline-block ml-2 text-white">Le Perroquet</h1>
        </div>
    </div>

    <nav class="w-full mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 text-xl">
        <div class="flex w-full md:w-auto justify-between items-center">
            <button class="md:hidden mobile-menu-button">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <div class="mobile-menu hidden md:flex flex-col md:flex-row w-full md:w-auto items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="#" class="text-white hover:text-yellow-300">Accueil</a>
           <div class="relative dropdown-menu">
    <a href="#" class="text-white hover:text-yellow-300 dropdown-toggle flex items-center">
        Politique 
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    </a>
    <div class="dropdown-content hidden md:absolute md:bg-white md:shadow-lg md:rounded md:mt-2 md:p-2 md:z-50">
        <a href="politique/nationale.html" class="block px-4 py-2 hover:bg-gray-100 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h3a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Politique Nationale
        </a>
        <a href="politique/internationale.html" class="block px-4 py-2 hover:bg-gray-100 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Politique Internationale
        </a>
        <a href="politique/analyses.html" class="block px-4 py-2 hover:bg-gray-100 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-lienjoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Analyses Politiques
        </a>
    </div>
</div>

            <!-- Similaire pour Sports et Culture -->
<div class="relative dropdown-menu">
    <a href="#" class="text-white hover:text-yellow-300 dropdown-toggle flex items-center">
        Sports 
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    </a>
    <div class="dropdown-content hidden md:absolute md:bg-white md:shadow-lg md:rounded md:mt-2 md:p-2 md:z-50">
        <a href="sports/football.html" class="block px-4 py-2 hover:bg-gray-100 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Football
        </a>
        <a href="sports/basketball.html" class="block px-4 py-2 hover:bg-gray-100 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Basketball
        </a>
        <a href="sports/tennis.html" class="block px-4 py-2 hover:bg-gray-100 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M14.99 10h.01M12 2a8 8 0 018 8c0 5.523-8 11-8 11S4 15.523 4 10a8 8 0 018-8z" />
            </svg>
            Tennis
        </a>
    </div>
</div>
           <div class="relative dropdown-menu">
    <a href="#" class="text-white hover:text-yellow-300 dropdown-toggle flex items-center">
        Culture 
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    </a>
    <div class="dropdown-content hidden md:absolute md:bg-white md:shadow-lg md:rounded md:mt-2 md:p-2 md:z-50">
        <a href="culture/cinema.html" class="block px-4 py-2 hover:bg-gray-100 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
            Cinéma
        </a>
        <a href="culture/musique.html" class="block px-4 py-2 hover:bg-gray-100 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
            Musique
        </a>
        <a href="culture/litterature.html" class="block px-4 py-2 hover:bg-gray-100 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Littérature
        </a>
    </div>
</div>
        </div>

       <!-- Barre de recherche -->
<div class="search-bar flex items-center w-full md:w-auto">
    <div class="flex w-full">
        <input 
            type="text" 
            placeholder="Rechercher..." 
            class="border rounded-l-full px-4 py-2 w-full md:w-64"
        >
        <button class="bg-yellow-500 text-white px-4 py-2 rounded-r-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
    </div>
</div>

        <!-- Section Se connecter, S'inscrire -->
        <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="actualites/login.html" class="login text-white bg-yellow-500 px-4 py-2 rounded-full transition duration-200 text-xl">Se connecter</a>
            <a href="actualites/signup.html" class="signup text-white bg-yellow-500 px-4 py-2 rounded-full transition duration-200 text-xl">S'inscrire</a>
        </div>
    </nav>
</header>
`;


document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
    // Toggle menu mobile
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('show');
    });
  
    // Gestion des sous-menus sur mobile
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth < 768) {
          const dropdownContent = e.target.nextElementSibling;
          dropdownContent.classList.toggle('hidden');
          dropdownContent.classList.toggle('show');
        }
      });
    });
  });

