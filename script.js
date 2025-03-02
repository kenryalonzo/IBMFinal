const recommendationsData = {
    plages: {
      condition: 7,
      images: [
        "https://example.com/plage1.jpg",
        "https://example.com/plage2.jpg"
      ],
      descriptions: [
        "Plage de sable blanc aux Maldives",
        "Côte sauvage de Bali"
      ]
    },
    temples: {
      condition: 8,
      images: [
        "https://example.com/temple1.jpg",
        "https://example.com/temple2.jpg"
      ],
      descriptions: [
        "Temple d'Angkor Wat au Cambodge",
        "Pagan en Birmanie"
      ]
    },
    pays: {
      condition: 10,
      images: [
        "https://example.com/japon.jpg",
        "https://example.com/vietnam.jpg"
      ],
      descriptions: [
        "Japon : Entre tradition et modernité",
        "Vietnam : Baie d'Halong mythique"
      ]
    }
  };
  
  // Fonction principale
  function loadRecommendations(activeCondition) {
    const container = document.getElementById('recommendations-container');
    container.innerHTML = '';
  
    for (const [category, data] of Object.entries(recommendationsData)) {
      if (data.condition === activeCondition) {
        const section = document.createElement('div');
        section.className = 'recommendation';
        
        const title = document.createElement('h2');
        title.textContent = `Recommandation ${category.charAt(0).toUpperCase() + category.slice(1)}`;
        
        const imageContainer = document.createElement('div');
        imageContainer.className = 'recommendation-images';
  
        data.images.forEach((imgSrc, index) => {
          const img = document.createElement('img');
          img.src = imgSrc;
          img.alt = data.descriptions[index];
          imageContainer.appendChild(img);
        });
  
        section.appendChild(title);
        section.appendChild(imageContainer);
        container.appendChild(section);
      }
    }
  }
  
  // Exemple d'utilisation
  document.addEventListener('DOMContentLoaded', () => {
    // Valeur initiale (peut être modifiée)
    let currentCondition = 7; 
    loadRecommendations(currentCondition);
  
    // Pour changer dynamiquement (exemple)
    // document.querySelector('.bouton-7').addEventListener('click', () => loadRecommendations(7));
  });