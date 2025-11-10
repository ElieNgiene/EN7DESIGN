document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.Button');
    const mainSections = document.querySelectorAll('main[id^="Main"]');
    const body = document.body; // Référence à l'élément body

    // Définir les couleurs de fond associées à chaque ID de bouton
    const buttonColors = {
        "Step": "#051436", // Exemple de couleur pour "Step"
        "Mwendo": "#2C6D70", // Couleur spécifiée pour "Mwendo"
        "Bioterre": "#00312D", 
        "Urithi": "#AB601D", 
        "Shauri": "#20596B", 
        // Ajoutez d'autres IDs de bouton et leurs couleurs correspondantes ici
    };

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const clickedButton = event.currentTarget;
            const buttonId = clickedButton.id;

            // 1. Gestion de la classe "Inactive" pour les boutons
            buttons.forEach(btn => {
                if (btn === clickedButton) {
                    if (btn.classList.contains('Inactive')) {
                        btn.classList.remove('Inactive');
                    }
                } else {
                    if (!btn.classList.contains('Inactive')) {
                        btn.classList.add('Inactive');
                    }
                }
            });

            // 2. Gestion de l'affichage des sections <main>
            const targetMainId = `Main${buttonId}`;

            mainSections.forEach(mainSection => {
                if (mainSection.id === targetMainId) {
                    mainSection.style.display = 'flex';
                } else {
                    mainSection.style.display = 'none';
                }
            });

            // 3. Changement de la couleur de fond du body
            if (buttonColors[buttonId]) {
                body.style.backgroundColor = buttonColors[buttonId];
            } else {
                // Optionnel: définir une couleur par défaut si l'ID du bouton n'est pas trouvé
                body.style.backgroundColor = '#051436'; // Couleur par défaut (blanc)
            }
        });
    });

    // Optionnel: Définir la couleur de fond initiale du body au chargement de la page
    // en fonction du bouton actif par défaut (si vous en avez un)
    const initialActiveButton = document.querySelector('.Button:not(.Inactive)');
    if (initialActiveButton && buttonColors[initialActiveButton.id]) {
        body.style.backgroundColor = buttonColors[initialActiveButton.id];
    } else {
        body.style.backgroundColor = '#051436'; // Couleur par défaut si aucun bouton actif ou couleur non définie
    }
});
