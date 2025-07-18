const destinations = [
  {
    name: "Drakensberg Mountains",
    description: "Towering peaks, ancient San rock art, and world-class hiking.",
    activities: ["🏞️ Hike to Tugela Falls", "🎒 Explore Cathedral Peak", "🖼️ See San rock paintings"],
  },
  {
    name: "iSimangaliso Wetland Park",
    description: "UNESCO World Heritage site with beaches, wetlands, and wildlife.",
    activities: ["🦛 Hippo boat cruise", "🐢 Turtle nesting tours", "🏝️ Snorkel at Cape Vidal"],
  },
  {
    name: "uShaka Marine World",
    description: "Durban’s iconic beachfront aquarium and water park.",
    activities: ["🐠 Walk through the shark tank", "💦 Slide the water rides", "🎭 Watch dolphin shows"],
  },
  {
    name: "Midlands Meander",
    description: "Charming villages full of crafts, food, and countryside beauty.",
    activities: ["🧀 Taste artisan cheeses", "🖌️ Visit art studios", "☕ Enjoy scenic coffee shops"],
  },
  {
    name: "Oribi Gorge",
    description: "A dramatic canyon offering thrilling outdoor activities.",
    activities: ["🌉 Bungee jump off the bridge", "🚶 Walk the suspension bridge", "📸 Gorge viewpoint picnic"],
  },
  {
    name: "Kosi Bay",
    description: "Remote paradise of lakes, estuaries, and palm-fringed shores.",
    activities: ["🌊 Snorkeling trails", "🐟 See traditional fish kraals", "🛶 Canoe safaris"],
  },
  {
    name: "Shakaland",
    description: "Cultural village celebrating Zulu heritage and traditions.",
    activities: ["🪘 Watch traditional dancing", "⚔️ Learn about King Shaka", "🔥 Join a cultural ceremony"],
  },
  {
    name: "Sani Pass",
    description: "A breathtaking mountain pass into Lesotho via 4x4 routes.",
    activities: ["🚙 4x4 adventure", "🥶 Drink at Africa’s highest pub", "📷 Epic mountain photography"],
  },
  {
    name: "Valley of a Thousand Hills",
    description: "Lush, rolling hills steeped in history and tradition.",
    activities: ["🛖 Visit rural homesteads", "🖼️ Explore craft markets", "🥁 Experience drum circles"],
  },
  {
    name: "Howick Falls",
    description: "A dramatic 95-meter waterfall with legends of a sacred serpent.",
    activities: ["🌊 Visit the viewpoint", "🥾 Walk the gorge trails", "🛍️ Browse local crafts"],
  },
];

function createCards() {
  const container = document.getElementById("card-container");
  destinations.forEach((_, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = `🎴 Card ${i + 1}`;
    card.addEventListener("click", () => revealGem(i));
    container.appendChild(card);
  });
}

function revealGem(index) {
  const place = destinations[index];
  const infoDiv = document.getElementById("location-info");

  infoDiv.innerHTML = `
    <h3>${place.name}</h3>
    <p>${place.description}</p>
    <ul>
      ${place.activities.map(act => `<li>${act}</li>`).join("")}
    </ul>
  `;
}

createCards();
