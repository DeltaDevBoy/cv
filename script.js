document.addEventListener("DOMContentLoaded", function() {
  // Exemple : Ajouter des statistiques dynamiques
  const healthStat = document.querySelector(".health-stat");
  const energyStat = document.querySelector(".energy-stat");
  const radsStat = document.querySelector(".rads-stat");

  let health = 100;
  let energy = 100;
  let rads = 0;

  // Fonction pour mettre à jour les statistiques
  function updateStats() {
    healthStat.textContent = "PV: " + health;
    energyStat.textContent = "Energie: " + energy;
    radsStat.textContent = "Rads: " + rads;
  }

  // Exemple d'événement pour réduire la santé lors d'un clic
  healthStat.addEventListener("click", function() {
    if (health > 0) {
      health -= 10;
      updateStats();
    }
  });

  // Exemple d'événement pour ajouter des rads lors d'un clic
  radsStat.addEventListener("click", function() {
    rads += 5;
    updateStats();
  });

  // Exemple d'événement pour restaurer la santé et l'énergie
  document.querySelector(".restoration-button").addEventListener("click", function() {
    health = 100;
    energy = 100;
    updateStats();
  });

  // Appel initial pour afficher les statistiques
  updateStats();
});
