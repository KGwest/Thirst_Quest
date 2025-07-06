# 💧 Thirst Quest – A charity: water Mini Game

**Author:** Kezia Grace West  
**Repo:** `thirst_quest`

---

## 🌍 Overview

**Thirst Quest** is a browser-based mini game created to support the mission of [charity: water](https://www.charitywater.org/), a nonprofit bringing clean and safe drinking water to people in developing countries. This interactive experience was developed as part of a college assignment to raise awareness and engage young people through game-based learning.

The goal? **Collect clean water drops to fill a virtual bucket before time runs out.**

Alongside the game, an **interactive globe widget** visualizes charity: water’s real-world impact across the globe—from deep tube wells in Bangladesh to solar-powered systems in Nigeria—connecting gameplay to tangible outcomes.

---

## 🎮 Game Mechanics

- **Tap or Click** the falling clean water drops (💧) to increase your score.
- **Avoid contaminated drops** (🧪) which lower your progress and score.
- Each clean drop increases the water level by **5%**.
- Score 20 successful taps to fill the bucket and win within **30 seconds**.
- A win reveals a real-world water project powered by charity: water.
- Touch-compatible (in progress): optimized for both desktop and mobile play.

---

## 🌐 Globe Widget – Real Impact

- Features an **interactive 3D globe** powered by `three.js` and `globe.gl`.
- Click on yellow markers around the world to discover:
  - Charity: water’s projects (e.g., well restoration, rainwater harvesting, filtration)
  - Short write-ups about the real-world impact
  - Direct links to [donate](https://www.charitywater.org/donate)

---

## 💻 Tech Stack

- **HTML** – page structure and layout
- **CSS** – water tank animation, responsiveness, and styling
- **JavaScript** – game logic, drop spawns, win conditions, and globe interactivity
- **Three.js + Globe.gl** – for rendering an interactive Earth model with live markers

---

## 📁 Folder Structure

thirst-quest-game/
├── index.html # Main webpage
├── style.css # Game and site styling
├── script.js # Game logic and interactions
├── globe.js # Globe widget data and rendering
└── README.md # Project documentation


---

## 🛠️ Development Notes

This game was developed during the **Summer 2025 Global Career Accelerator** at the University of Texas at Arlington. The goal: make global water issues **personal and interactive**, bridging game design with real nonprofit impact.

Incorporating map data, score logic, and mobile responsiveness was an opportunity to practice UX empathy and connect user experience to real-world missions.

---

## 📜 License

This project is intended for **educational and nonprofit** use only. Please credit the author and charity: water if adapting. Commercial use requires permission.

---

## 🤝 About charity: water

> charity: water is a nonprofit organization on a mission to bring clean and safe drinking water to people in developing countries. Since 2006, they've funded more than 111,000 water projects serving over 15 million people.

Explore their work or support the mission: [charitywater.org](https://www.charitywater.org)

---

## 🙌 Credits

Created by **Kezia Grace West**  
In partnership with **charity: water** and the **University of Texas at Arlington**  
As part of the **Summer 2025 Global Career Accelerator**

With love, purpose, and a hope for clean water for all. 💙

---

## ▶️ How to Play Locally

1. Clone or download the repository:
   ```bash
   git clone https://github.com/KGwest/thirst-quest-game
