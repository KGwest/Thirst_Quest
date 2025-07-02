const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');

let score = 0;
let timeLeft = 30;
let gameInterval;
let dropInterval;

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.innerText = `Score: ${score}`;
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
    clearInterval(gameInterval);
    clearInterval(dropInterval);
    alert(`Game Over! Final Score: ${score}`);
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
      score += 10;
    } else {
      score -= 5;
    }
    scoreDisplay.innerText = `Score: ${score}`;
    drop.remove(); // Remove after click
  });

  gameArea.appendChild(drop);

  // Auto-remove drops that reach the bottom
  setTimeout(() => {
    if (gameArea.contains(drop)) drop.remove();
  }, 3000);
}

startBtn.addEventListener('click', startGame);
