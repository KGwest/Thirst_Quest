const gameArea = document.getElementById("game-area");
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const waterLevel = document.getElementById("water-level");

let timeLeft = 30;
let fillLevel = 0;
let gameInterval;
let dropInterval;
let gameEnded = false;

function startGame() {
  timeLeft = 30;
  fillLevel = 0;
  gameEnded = false; // <-- reset game state
  updateWaterLevel();
  timerDisplay.innerText = `Time: ${timeLeft}`;
  gameArea.innerHTML = "";

  gameInterval = setInterval(updateTimer, 1000);
  dropInterval = setInterval(spawnDrop, 800);
}

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timerDisplay.innerText = `Time: ${timeLeft}`;
  } else {
    endGame(false);
  }
}

function spawnDrop() {
  const drop = document.createElement("div");
  drop.classList.add("drop");
  const isClean = Math.random() > 0.3;
  drop.innerText = isClean ? "💧" : "☠️";
  drop.classList.add(isClean ? "clean-drop" : "bad-drop");

  const pos = Math.random() * (gameArea.clientWidth - 40);
  drop.style.left = `${pos}px`;

  drop.addEventListener("click", () => {
    if (gameEnded) return;

    if (isClean) {
      fillLevel += 10;
      if (fillLevel >= 100) {
        fillLevel = 100;
        updateWaterLevel();
        endGame(true);
      } else {
        updateWaterLevel();
      }
    } else {
      fillLevel -= 5;
      if (fillLevel < 0) fillLevel = 0;
      updateWaterLevel();
      drop.classList.add("penalty");
      setTimeout(() => drop.classList.remove("penalty"), 200);
    }

    drop.remove();
  });

  gameArea.appendChild(drop);

  setTimeout(() => {
    if (gameArea.contains(drop)) drop.remove();
  }, 3000);
}

function updateWaterLevel() {
  waterLevel.style.height = `${fillLevel}%`;
}

function endGame(won) {
  if (gameEnded) return; // prevents multiple triggers
  gameEnded = true;

  clearInterval(gameInterval);
  clearInterval(dropInterval);

  if (won) {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      alert(
        "🎉 You filled the bucket!\n\nYour effort reflects real change: In rural Bangladesh, access to clean water is a daily struggle. " +
          "Many communities lack proper sanitation, and contaminated sources lead to widespread disease.\n\n" +
          "But thanks to supporters like you, charity: water is installing deep tube wells connected to piped systems—bringing clean, life-saving water to families who need it most.\n\n" +
          "💛 Donate: https://www.charitywater.org/donate"
      );
    }, 500);
  } else {
    setTimeout(() => {
      alert(
        "⏳ Time’s up!\n\nYou didn’t fill the bucket this round, but the mission continues. charity: water hasn’t given up—neither should you.\n\n" +
          "💡 In Uganda, they’re restoring broken wells and empowering local teams to keep clean water flowing.\n\n" +
          "Tap Start to try again and be part of the impact."
      );
    }, 200);
  }
}

startBtn.addEventListener("click", startGame);

document.getElementById("reset-btn").addEventListener("click", () => {
  clearInterval(gameInterval);
  clearInterval(dropInterval);
  startGame();
});
