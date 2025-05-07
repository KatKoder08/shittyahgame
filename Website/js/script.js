let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
let scoreMultiplier = localStorage.getItem('scoreMultiplier') ? parseInt(localStorage.getItem('scoreMultiplier')) : 1;
let upgradeCost = localStorage.getItem('upgradeCost') ? parseInt(localStorage.getItem('upgradeCost')) : 10; // Start at 10

const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');

clickButton.addEventListener('click', () => {
  score += scoreMultiplier;  // Increase score by multiplier
  scoreDisplay.textContent = score;
  localStorage.setItem('score', score);  // Save score to localStorage
});

upgradeButton.addEventListener('click', () => {
  if (score >= upgradeCost) {
    score -= upgradeCost;  // Deduct the cost of the upgrade
    scoreMultiplier *= 2;  // Double the score multiplier
    upgradeCost = Math.floor(upgradeCost * 1.5);  // Increase the cost by 1.5 times
    scoreDisplay.textContent = score;
    upgradeButton.textContent = `Upgrade (Cost: ${upgradeCost})`;

    localStorage.setItem('score', score);  // Save score to localStorage
    localStorage.setItem('scoreMultiplier', scoreMultiplier);  // Save multiplier to localStorage
    localStorage.setItem('upgradeCost', upgradeCost);  // Save the new upgrade cost
  } else {
    alert("Not enough points for upgrade!");
  }
});

scoreDisplay.textContent = score;
