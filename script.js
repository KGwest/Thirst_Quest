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
drop.innerText = isClean ? '💧' : '☠️';
drop.classList.add(isClean ? 'clean-drop' : 'bad-drop');


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
  } else {
    // Penalize for bad drop
    fillLevel -= 5;
    if (fillLevel < 0) fillLevel = 0;
    updateWaterLevel();
    drop.classList.add('penalty'); // Optional red flash
    setTimeout(() => drop.classList.remove('penalty'), 200);
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
  if (won) {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
    alert("You filled the bucket! You win! 🎉");
  } else {
    alert("Time’s up! Try again.");
  }
}


startBtn.addEventListener('click', startGame);

document.getElementById('reset-btn').addEventListener('click', () => {
  clearInterval(gameInterval);
  clearInterval(dropInterval);
  startGame(); // resets everything
});
