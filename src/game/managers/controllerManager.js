import osType from '../utils/osType';

const controllerManager = (function () {

  function bindController(dataValue, callback) {
    const eventType = osType.getType() === 'mobile' ? 'touchstart' : 'mousedown';
    document.querySelector('[data-direction="' + dataValue + '"]').addEventListener(eventType, callback, false);
  }

  return {
    bindController
  }

})();

export default controllerManager;