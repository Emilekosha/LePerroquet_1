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
                <a href="#" class="text-white hover:text-yellow-300 dropdown-toggle">Politique <span class="ml-1">▼</span></a>
                <div class="dropdown-content hidden md:absolute md:bg-white md:shadow-lg md:rounded md:mt-2 md:p-2 md:z-50">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Politique Nationale</a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Politique Internationale</a>
                </div>
            </div>
            <div class="relative dropdown-menu">
                <a href="#" class="text-white hover:text-yellow-300 dropdown-toggle">Sports <span class="ml-1">▼</span></a>
                <div class="dropdown-content hidden md:absolute md:bg-white md:shadow-lg md:rounded md:mt-2 md:p-2 md:z-50">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Football</a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Basketball</a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Tennis</a>
                </div>
            </div>
            <div class="relative dropdown-menu">
                <a href="#" class="text-white hover:text-yellow-300 dropdown-toggle">Culture <span class="ml-1">▼</span></a>
                <div class="dropdown-content hidden md:absolute md:bg-white md:shadow-lg md:rounded md:mt-2 md:p-2 md:z-50">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Cinéma</a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Musique</a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Littérature</a>
                </div>
            </div>
        </div>

        <!-- Barre de recherche -->
        <div class="search-bar flex items-center w-full md:w-auto">
            <input type="text" placeholder="Rechercher..." class="border rounded-l-full px-4 py-2 w-full md:w-64">
            <button class="bg-yellow-500 text-white px-4 py-2 rounded-r-full">🔍</button>
        </div>

        <!-- Section Se connecter, S'inscrire -->
        <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="actualites/login.html" class="login text-white bg-yellow-500 px-4 py-2 rounded-full transition duration-200 text-xl">Se connecter</a>
            <a href="actualites/signup.html" class="signup text-white bg-yellow-500 px-4 py-2 rounded-full transition duration-200 text-xl">S'inscrire</a>
        </div>
    </nav>
</header>
`;

