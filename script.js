const gameArea = document.getElementById('game-area');
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const waterLevel = document.getElementById('water-level');

let timeLeft = 30;
let fillLevel = 0;
let gameInterval;
let dropInterval;

function startGame() {
  timeLeft = 30;
  fillLevel = 0;
  updateWaterLevel();
  timerDisplay.innerText = `Time: ${timeLeft}`;
  gameArea.innerHTML = '';

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
  const drop = document.createElement('div');
  drop.classList.add('drop');

  const isClean = Math.random() > 0.3;
  drop.classList.add(isClean ? 'clean' : 'bad');
  drop.innerText = isClean ? '💧' : '☠️';

  const pos = Math.random() * (gameArea.clientWidth - 40);
  drop.style.left = `${pos}px`;

  drop.addEventListener('click', () => {
    if (isClean) {
      fillLevel += 10;
      if (fillLevel >= 100) {
        fillLevel = 100;
        updateWaterLevel();
        endGame(true);
      } else {
        updateWaterLevel();
      }
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
  clearInterval(gameInterval);
  clearInterval(dropInterval);
  alert(won ? "You filled the bucket! You win! 🎉" : "Time’s up! Try again.");
}

startBtn.addEventListener('click', startGame);
