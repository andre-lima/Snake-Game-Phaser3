const statsManager = (function() {
  let currentScore = 0;

  let highScore = localStorage.getItem('high_score') || 0;
  const highScoreElement = document.getElementById('high-score');
  highScoreElement.innerHTML = highScore;

  let deathCount = localStorage.getItem('death_count') || 0;

  const currentScoreElement = document.getElementById('current-score');

  function increaseCurrentScore (points) {
    currentScore += points;
    currentScoreElement.innerHTML = currentScore;
    _increaseHighScore(currentScore);
  }

  function _increaseHighScore(currentScore) {
    if(currentScore > highScore) {
      highScore = currentScore
      highScoreElement.innerHTML = highScore;
      localStorage.setItem('high_score', highScore);
    }
  }

  function restartPoints () {
    currentScore = 0;
    currentScoreElement.innerHTML = 0;
  }

  function increaseDeathCount () {
    deathCount++;
    localStorage.setItem('death_count', deathCount);
  }
  
  function getDeathCount () {
    return deathCount;
  }

  function getHighScore() {
    return highScore;
  }

  return {
    increaseCurrentScore,
    restartPoints,
    increaseDeathCount,
    getDeathCount,
    getHighScore
  }

})();

export default statsManager;