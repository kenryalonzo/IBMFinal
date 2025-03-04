
// Données des recommandations
const recommendationsData = {
  plages: {
    images: [
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    descriptions: [
      "Plage de Palawan, Philippines",
      "Plage de Phuket, Thaïlande"
    ]
  },
  temples: {
    images: [
      "https://images.unsplash.com/photo-1603766806347-54cdf3745953?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    descriptions: [
      "Angkor Wat, Cambodge",
      "Borobudur, Indonésie"
    ]
  },
  pays: {
    images: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      "https://images.unsplash.com/photo-1532375810709-75b1da00537c"
    ],
    descriptions: [
      "Japon : Mont Fuji",
      "Vietnam : Baie d'Halong"
    ]
  }
};

// Charger les recommandations
function loadRecommendations(searchTerm) {
  const container = document.getElementById('recommendations-container');
  container.innerHTML = '';

  let category;
  if (searchTerm.includes("plage")) category = "plages";
  else if (searchTerm.includes("temple")) category = "temples";
  else if (searchTerm.includes("pays")) category = "pays";
  else return;

  const data = recommendationsData[category];
  const section = document.createElement('div');
  section.className = 'recommendation';

  const title = document.createElement('h2');
  title.textContent = `Recommandations ${category.charAt(0).toUpperCase() + category.slice(1)}`;

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

// Gestion de la recherche
document.getElementById('search-button').addEventListener('click', () => {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  loadRecommendations(searchTerm);
});

document.getElementById('clear-button').addEventListener('click', () => {
  document.getElementById('search-input').value = '';
  document.getElementById('recommendations-container').innerHTML = '';
});
