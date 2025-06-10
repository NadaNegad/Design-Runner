
let gameState = {
  isPlaying: false,
  score: 0,
  lives: 3,
  playerLane: 1
};
function startGame() {
  gameState.isPlaying = true;
  gameState.score = 0;
  gameState.lives = 3;
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("gameOver").style.display = "none";
}
function restartGame() {
  startGame();
}
