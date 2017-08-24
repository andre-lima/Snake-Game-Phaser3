const manager = (function() {
  let currentScore = 0;
  let highScore = 0;
  let deathCount = 0;
  let currentScoreElement = document.getElementById('current-score');
  let highScoreElement = document.getElementById('high-score');

  function increaseCurrentScore (points) {
    currentScore += points;
    currentScoreElement.innerHTML = currentScore;
    _increaseHighScore(currentScore);
  }

  function _increaseHighScore(currentScore) {
    if(currentScore > highScore) {
      highScore = currentScore
      highScoreElement.innerHTML = highScore;
    }
  }

  function restartPoints () {
    currentScore = 0;
    currentScoreElement.innerHTML = currentScore;
  }

  function increaseDeathCount () {
    deathCount++;
  }

  function getDeathCount () {
    return deathCount;
  }

  return {
    increaseCurrentScore,
    restartPoints,
    increaseDeathCount,
    getDeathCount
  }

})();

export default manager;