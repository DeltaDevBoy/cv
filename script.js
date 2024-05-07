document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".pipboy-menu a");
    const contentSections = document.querySelectorAll(".pipboy-content > section");

    // Fonction pour activer un onglet et afficher le contenu correspondant
    function activateTab(tabIndex) {
        // Désactiver tous les onglets
        menuItems.forEach(item => item.parentElement.classList.remove("active"));
        // Masquer tous les contenus de section
        contentSections.forEach(section => section.style.display = "none");

        // Activer l'onglet correspondant et afficher le contenu de la section
        menuItems[tabIndex].parentElement.classList.add("active");
        contentSections[tabIndex].style.display = "block";
    }

    // Par défaut, afficher le contenu de la première section
    activateTab(0);

    // Gérer les clics sur les onglets
    menuItems.forEach((item, index) => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            activateTab(index);
        });
    });
});
