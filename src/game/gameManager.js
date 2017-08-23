const manager = (function() {
  let currentScore = 0;
  let highScore = 0;
  let numberOfDeaths = 0;
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

  return {
    increaseCurrentScore,
    restartPoints
  }

})();

export default manager;