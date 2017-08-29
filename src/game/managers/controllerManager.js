const controllerManager = (function () {

  function bindController(dataValue, callback) {
    document.querySelector('[data-direction="' + dataValue + '"]').addEventListener('click', callback, false);
  }

  return {
    bindController
  }

})();

export default controllerManager;