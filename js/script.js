let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
let scoreMultiplier = localStorage.getItem('scoreMultiplier') ? parseInt(localStorage.getItem('scoreMultiplier')) : 1;
let upgradeCost = localStorage.getItem('upgradeCost') ? parseInt(localStorage.getItem('upgradeCost')) : 10;

const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');

clickButton.addEventListener('click', () => {
  score += scoreMultiplier;
  scoreDisplay.textContent = score;
  localStorage.setItem('score', score);
});

upgradeButton.addEventListener('click', () => {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    scoreMultiplier *= 2;
    upgradeCost = Math.floor(upgradeCost * 1.5);
    scoreDisplay.textContent = score;
    upgradeButton.textContent = `Upgrade (Cost: ${upgradeCost})`;

    localStorage.setItem('score', score);
    localStorage.setItem('scoreMultiplier', scoreMultiplier);
    localStorage.setItem('upgradeCost', upgradeCost);
  } else {
    alert("Not enough points for upgrade!");
  }
});

scoreDisplay.textContent = score;
