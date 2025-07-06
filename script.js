const gameArea = document.getElementById("game-area");
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const waterLevel = document.getElementById("water-level");

let timeLeft = 30;
let fillLevel = 0;
let gameInterval;
let dropInterval;
let gameEnded = false;
let score = 0;
const scoreDisplay = document.getElementById("score");

function startGame() {
  score = 0;
  scoreDisplay.innerText = `Score: ${score}`;
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
  if (gameEnded) return;

  const drop = document.createElement("div");
  drop.classList.add("drop");

  const isClean = Math.random() > 0.3;
  drop.innerText = isClean ? "💧" : "🧪";
  drop.classList.add(isClean ? "clean-drop" : "bad-drop");

  const pos = Math.random() * (gameArea.clientWidth - 40);
  drop.style.left = `${pos}px`;

  function handleDrop(e) {
    e.preventDefault(); // helps avoid double fire on mobile
    if (gameEnded) return;

    if (isClean) {
      score++;
      scoreDisplay.innerText = `Score: ${score}`;
      fillLevel += 5;
      if (fillLevel >= 100) {
        fillLevel = 100;
        updateWaterLevel();
        endGame(true);
      } else {
        updateWaterLevel();
      }
    } else {
      fillLevel -= 2.5;
      if (fillLevel < 0) fillLevel = 0;
      score = Math.max(0, score - 1);
      scoreDisplay.innerText = `Score: ${score}`;
      updateWaterLevel();
      drop.classList.add("penalty");
      setTimeout(() => drop.classList.remove("penalty"), 200);
    }

    drop.remove();
  }

  // Both click and touch support
  drop.addEventListener("click", handleDrop);
  drop.addEventListener("touchstart", handleDrop);

  gameArea.appendChild(drop);

  setTimeout(() => {
    if (gameArea.contains(drop)) drop.remove();
  }, 3000);
}


function updateWaterLevel() {
  waterLevel.style.height = `${fillLevel}%`;
}

function endGame(won) {
  if (gameEnded) return;
  gameEnded = true;

  clearInterval(gameInterval);
  clearInterval(dropInterval);

  const overlay = document.getElementById("overlay");
  const title = document.getElementById("overlay-title");
  const text = document.getElementById("overlay-text");
  const link = document.getElementById("overlay-link");

  if (won) {
    // Moved these OUTSIDE of confetti()
    waterLevel.style.transition = "height 1s ease";
    waterLevel.style.height = "100%";

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });

    title.innerText = "🎉 You filled the bucket!";
    text.innerText =
      "In rural Bangladesh, many communities struggle daily for clean water. But thanks to efforts like yours, charity: water is installing deep tube wells that bring lasting change.";
    link.href = "https://www.charitywater.org/donate";
  } else {
    title.innerText = "⏳ Time’s up!";
    text.innerText =
      "You didn’t fill the bucket this round, but the mission continues. In Uganda, charity: water is restoring broken wells to keep clean water flowing.";
    link.href = "https://www.charitywater.org/donate";
  }

  overlay.classList.remove("hidden");
}

function closeOverlay() {
  document.getElementById("overlay").classList.add("hidden");
}

startBtn.addEventListener("click", startGame);

document.getElementById("reset-btn").addEventListener("click", () => {
  clearInterval(gameInterval);
  clearInterval(dropInterval);
  startGame();
});
