const spells = {
  "Single Projectile": { 
    "Great Fire Blast": "Fire", 
    "Water Beam": "Water", 
    "Spore Bombs": "Grass", 
    "Aciculated Spikes": "Earth",
    "Wind Cannon": "Wind",
    "Lightning Bolt": "Storm",
    "Incinerating Burst": "Lava",
    "Glaze Whail": "Ice",
    "Nature's Essence": "Nature",
    "Plasma Ray": "Plasma",
    "Vitality Abolishment": "Spirit",
    "Gravitational Exertion": "Gravity",
    "Auroral Blast": "Light",
    "Void Bomb": "Void",
    "Bloodcurdling Blast": "Nightmare",
    "Holobeam": "Spectrum",
    "Black Hole Orb": "Space",
    "Ash Pulse": "Phoenix",
    "Reaper's Wroth": "Reaper",
    "Polar Projection": "Aurora",
    "Echoes": "Sound",
    "Concentrated Blast": "Explosion",
    "Order Break": "Chaos",
    "Refraction": "Illusion",
    "Dragon's Ember": "Dragon",
    "Corrosive Stream": "Acid",
    "Divine Arrow": "Angel",
    "Orbital Strike": "Technology",
    "Chain Pull": "Creation",
    "Double Ray": "Solar"
  },
  "Multi Projectile": { 
    "Consecutive Fire Bullets": "Fire",
    "Water Stream": "Water",
    "Poison Needles": "Grass",
    "Wind Tornadoes": "Wind",
    "Lightning Barrage": "Storm",
    "Rock Avalanche": "Earth",
    "Scorching Basalt": "Lava",
    "Flurry Heave": "Ice",
    "Plasma Missiles": "Plasma",
    "Lucid Rift": "Crystal",
    "Vigor Gyration": "Spirit",
    "Orbs of Enlightenment": "Light",
    "Somber Brisk": "Darkness",
    "Horrifying Heads": "Nightmare",
    "Rainbowifier Maximizer": "Spectrum",
    "Warp Bombs": "Time",
    "Asteroid Belt": "Space",
    "Empyrean Rain": "Aurora",
    "Howling Chain": "Sound",
    "Chaos Zone": "Chaos",
    "Ace Up The Sleeve": "Illusion",
    "Soaring Upheaval": "Dragon",
    "Acid Rain": "Acid",
    "Quill Daggers": "Angel",
    "Sticky Barrage": "Slime",
    "Hyperang": "Technology",
    "Knife Barrage": "Creation",
    "Dying Star": "Solar"
  },
  AoE: { 
    "Blaze Column": "Fire",
    "Water Tornado": "Water",
    "Leaf Storm": "Grass",
    "Wind Ascend": "Wind",
    "Lightning Dispersion": "Storm",
    "Volcanic Eruption": "Lava",
    "Perilous Hail": "Ice",
    "Vine Trap": "Nature",
    "Plasma Implosion": "Plasma",
    "Luminous Dispersion": "Crystal",
    "Essence Relegation": "Spirit",
    "Gravitational Field": "Gravity",
    "Amaurotic Lambent": "Light",
    "Murky Missiles": "Darkness",
    "Oblivion": "Void",
    "Skeleton Grab": "Nightmare",
    "Gamma Surge": "Spectrum",
    "Genesis Ray": "Time",
    "Blue Arson": "Phoenix",
    "Reaper's Sword": "Reaper",
    "Gleaming Borealis": "Aurora",
    "Consecutive Explosions": "Explosion",
    "Space-Time Rupture": "Chaos",
    "Illusive Atake": "Illusion",
    "Formidable Roar": "Dragon",
    "Sewer Burst": "Acid",
    "Splitting Slime": "Slime",
    "Vortex Bomb": "Technology",
    "Continuous Strikes": "Creation",
    "Sun’s Iris": "Solar"
  },
  Transportation: { 
    "Water Tumble": "Water",
    "Vine": "Grass",
    "Rock Fist": "Earth",
    "Spiral Spin": "Wind",
    "Lightning Flash": "Storm",
    "Plasma Orb": "Plasma",
    "Shadow Sneak": "Void",
    "Rainbow Shockwave": "Spectrum",
    "Chronostasis": "Time",
    "Comet Crash": "Space",
    "Holy Dash": "Phoenix",
    "Reaper's Seal": "Reaper",
    "Light Emission": "Aurora",
    "Explosive Leap": "Explosion",
    "Trichotomy": "Illusion",
    "Septic Splatter": "Acid",
    "Flash Slash": "Angel",
    "Light Disc": "Technology",
    "Spear Thrust": "Creation"
  },
  "Body Transformation": { 
    "Flame Body": "Fire",
    "Rock Armor": "Earth",
    "Spectral Embodiment": "Spirit",
    "Inertia": "Gravity",
    "Skeleton Swarm": "Nightmare",
    "Shockwave Halo": "Sound",
    "Angelic Aura": "Angel"
  },
  Contact: { 
    "Magma Drop": "Lava",
    "Frozen Incursion": "Ice",
    "Void of Terror": "Darkness",
    "Void Lightning": "Void",
    "Temporal Trap": "Time",
    "Neutron Punch": "Space",
    "Soul Plunge": "Phoenix",
    "Disorder Ignition": "Chaos",
    "Fuming Whack": "Dragon"
  },
  Shield: { 
    "Spiky Shield": "Nature",
    "Crystal Armament": "Crystal",
    "Gravital Globe": "Gravity",
    "Reaper's Lament": "Reaper",
    "SONAR Quake": "Sound",
    "Combustion": "Explosion",
    "Absorbing Slime": "Slime"
  },
  Heal: { 
    "Nature's Blessing": "Nature",
    "Gleaming Harmony": "Crystal",
    "Scintillant Rejuvenation": "Light",
    "Deprived Eradication": "Darkness",
    "Slime Buddies": "Slime",
    "Sun’s Embrace": "Solar"
  },
  Ultimate: { 
    "Hell's Core": "Fire",
    "Water Dragon": "Water",
    "Poison Bomb Barrage": "Grass",
    "Meteor Declivity": "Earth",
    "Wind Gust": "Wind",
    "Lightning Extermination": "Storm",
    "Searing Heave": "Lava",
    "Vehement Blizzard": "Ice",
    "Great Tree of Abolition": "Nature",
    "Scintillating Plasma": "Plasma",
    "Crystalline Annihilation": "Crystal",
    "Ghastly Grasp": "Spirit",
    "Gravitational Pull": "Gravity",
    "Ablaze Judgement": "Light",
    "Gloomy Blare": "Darkness",
    "Void Opening": "Void",
    "Nightmare": "Nightmare",
    "Cosmic Shrine": "Spectrum",
    "The World": "Time",
    "Supernova": "Space",
    "Immolate": "Phoenix",
    "Reaper's Rage": "Reaper",
    "Polaris": "Aurora",
    "Ultra-Sonic Wail": "Sound",
    "Shattering Eruption": "Explosion",
    "Swords Dance": "Chaos",
    "Ethereal Acumen": "Illusion",
    "Ominous Wrath": "Dragon",
    "Toxic Basilisk": "Acid",
    "Arcane Guardian": "Angel",
    "King Slime": "Slime",
    "Virtual Zone": "Technology",
    "Essence of Creation": "Creation",
    "Unmatched Power of the Sun": "Solar"
  },
};

const elements = [...new Set(Object.values(spells).flatMap(cat => Object.values(cat)))];

// Button event bindings AFTER DOM loads
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnElement").addEventListener("click", randomElement);
  document.getElementById("btnMove").addEventListener("click", () => randomMove(true));
  document.getElementById("btnMoveNoUlt").addEventListener("click", () => randomMove(false));
  document.getElementById("btnSet").addEventListener("click", openTypeSelector);

  document.getElementById("confirmBtn").addEventListener("click", confirmTypes);
  document.getElementById("cancelBtn").addEventListener("click", closePopup);
});

function randomElement() {
  const elem = elements[Math.floor(Math.random() * elements.length)];
  displayOutput(`🎲 Random Element:\n${elem}`);
}

function randomMove(includeUlt = true) {
  const keys = Object.keys(spells).filter(k => includeUlt || k !== "ult");
  const category = keys[Math.floor(Math.random() * keys.length)];
  const entries = Object.entries(spells[category]);
  const [spell, element] = entries[Math.floor(Math.random() * entries.length)];
  displayOutput(`🎯 Random Move (${category.toUpperCase()}):\n${spell} [${element}]`);
}

function openTypeSelector() {
  const overlay = document.getElementById("overlay");
  const list = document.getElementById("checkboxList");
  list.innerHTML = "";

  Object.keys(spells).forEach(type => {
    const wrapper = document.createElement("div");
    wrapper.className = "checkbox-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = type;
    checkbox.value = type;
    checkbox.addEventListener("change", limitCheckboxes);

    const label = document.createElement("label");
    label.htmlFor = type;
    label.textContent = type.charAt(0).toUpperCase() + type.slice(1);

    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);
    list.appendChild(wrapper);
  });

  overlay.style.display = "flex";
}

function limitCheckboxes() {
  const checkboxes = document.querySelectorAll("#checkboxList input[type='checkbox']");
  const checked = [...checkboxes].filter(c => c.checked);
  if (checked.length > 5) {
    this.checked = false;
    alert("You can only select up to 5 spell types!");
  }
}

function confirmTypes() {
  const selected = [...document.querySelectorAll("#checkboxList input:checked")].map(c => c.value);
  if (selected.length === 0) {
    alert("Please select at least one type!");
    return;
  }
  closePopup();
  generateSet(selected);
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
}

function generateSet(types) {
  let output = "🎯 Your Randomized Spell Set:\n";
  types.forEach(cat => {
    const entries = Object.entries(spells[cat]);
    const [spell, elem] = entries[Math.floor(Math.random() * entries.length)];
    output += `${cat.toUpperCase()}: ${spell} [${elem}]\n`;
  });
  displayOutput(output);
}

function displayOutput(text) {
  document.getElementById("output").textContent = text;
}
