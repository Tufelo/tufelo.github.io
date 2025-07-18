const gems = [
  {
    name: "Drakensberg Mountains",
    description: "Towering peaks, San rock art, and hiking heaven.",
    activities: ["🏞️ Hike to Tugela Falls", "🎒 Cathedral Peak", "🖼️ Explore caves"],
  },
  {
    name: "iSimangaliso Wetland Park",
    description: "UNESCO gem of wetlands, wildlife, and beach escapes.",
    activities: ["🦛 Hippo tours", "🐢 Turtle watching", "🏝️ Snorkel Cape Vidal"],
  },
  {
    name: "uShaka Marine World",
    description: "Durban’s oceanfront wonderland of sea life and slides.",
    activities: ["🐠 Shark tunnel", "🎭 Dolphin shows", "🌊 Wave pool fun"],
  },
  {
    name: "Midlands Meander",
    description: "Crafts, cafés, cheese — and countryside charm.",
    activities: ["🧀 Farm tasting", "🖌️ Art trails", "🚗 Scenic drives"],
  },
  {
    name: "Oribi Gorge",
    description: "Thrilling views and nature adventures await.",
    activities: ["🌉 Bridge swing", "🚶 Gorge hikes", "🦅 Spot birds"],
  },
  {
    name: "Kosi Bay",
    description: "Remote beauty with palm trees and pristine water.",
    activities: ["🛶 Canoeing", "🐟 Visit fish kraals", "🌅 Sunset cruises"],
  },
  {
    name: "Shakaland",
    description: "A living Zulu cultural experience.",
    activities: ["🪘 Drum shows", "⚔️ Warrior reenactments", "🔥 Traditional feasts"],
  },
  {
    name: "Sani Pass",
    description: "High-altitude thrills with breathtaking views.",
    activities: ["🚙 4x4 tour", "🍻 Highest pub in Africa", "🗻 Mountain photo ops"],
  },
  {
    name: "Valley of a Thousand Hills",
    description: "Rolling green hills and rural Zulu culture.",
    activities: ["🛖 Village tours", "🛍️ Craft shopping", "🥁 Storytelling"],
  },
  {
    name: "Howick Falls",
    description: "95-meter waterfall with local legend.",
    activities: ["🌊 Viewpoint trail", "🛒 Local markets", "📚 Learn the legend"],
  },
];

function createNumberButtons() {
  const container = document.getElementById("number-buttons");
  container.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.addEventListener("click", () => showGem(i - 1));
    container.appendChild(btn);
  }
}

function showGem(index) {
  const place = gems[index];
  const result = document.getElementById("gem-result");
  result.innerHTML = `
    <h2>${place.name}</h2>
    <p>${place.description}</p>
    <ul>${place.activities.map(act => `<li>${act}</li>`).join("")}</ul>
  `;
  document.getElementById("number-buttons").style.display = "none";
  document.getElementById("play-again").style.display = "inline-block";
}

document.getElementById("play-again").addEventListener("click", () => {
  document.getElementById("gem-result").innerHTML = "";
  document.getElementById("play-again").style.display = "none";
  document.getElementById("number-buttons").style.display = "flex";
});

createNumberButtons();
