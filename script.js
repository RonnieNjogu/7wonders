const wonders = [
    {
        title: "Great Wall of China",
        description: "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials.",
        image: "Great wall of china.jpg",
        coordinates: [40.4319, 116.5704]
    },
    {
        title: "Petra",
        description: "Petra is a historical and archaeological city in southern Jordan, famous for its rock-cut architecture and water conduit system.",
        image: "Petra.jpg",
        coordinates: [30.3285, 35.4444]
    },
    {
        title: "Christ the Redeemer",
        description: "Christ the Redeemer is an iconic statue of Jesus Christ in Rio de Janeiro, Brazil.",
        image: "Christ the redeemer.jpg",
        coordinates: [-22.9519, -43.2105]
    },
    {
        title: "Machu Picchu",
        description: "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru.",
        image: "Machu pichu.jpg",
        coordinates: [-13.1631, -72.5450]
    },
    {
        title: "Chichen Itza",
        description: "Chichen Itza was a large pre-Columbian city built by the Maya people in Mexico.",
        image: "Chichen Itza.jpg",
        coordinates: [20.6843, -88.5678]
    },
    {
        title: "Roman Colosseum",
        description: "The Colosseum is an ancient amphitheater in the center of Rome, Italy, and is the largest amphitheater ever built.",
        image: "roman collseum.jpg",
        coordinates: [41.8902, 12.4922]
    },
    {
        title: "Taj Mahal",
        description: "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.",
        image: "Taj mahal.jpg",
        coordinates: [27.1751, 78.0421]
    }
];

const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const content = document.getElementById('content');

// Function to update the content and map view
function updateContent(index) {
    const wonder = wonders[index];
    content.classList.add('hidden'); // Reset animation by hiding content
    setTimeout(() => {
        document.getElementById('title').innerText = wonder.title;
        document.getElementById('description').innerText = wonder.description;
        document.getElementById('image').src = wonder.image;
        document.getElementById('image').alt = wonder.title;
        content.classList.remove('hidden'); // Trigger fade-in animation
        map.setView(wonder.coordinates, 5); // Move the map to the selected wonder
    }, 200); // Delay to allow hiding effect
}

// Create markers and navigation buttons
wonders.forEach((wonder, index) => {
    // Add map markers
    const marker = L.marker(wonder.coordinates).addTo(map);
    marker.on('click', () => updateContent(index));

    // Add navigation buttons
    const nav = document.getElementById('nav');
    const button = document.createElement('button');
    button.innerText = wonder.title;
    button.onclick = () => updateContent(index);
    const listItem = document.createElement('li');
    listItem.appendChild(button);
    nav.appendChild(listItem);
});

// Initialize with the first wonder
updateContent(0);
