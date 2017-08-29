import osType from '../utils/osType';

const controllerManager = (function () {

  function linkActionToDomElement(dataKey, dataValue, callback) {
    const eventType = osType.getType() === 'mobile' ? 'touchstart' : 'mousedown';
    document.querySelector(`[data-${dataKey}=${dataValue}]`).addEventListener(eventType, callback, false);
  }

  return {
    linkActionToDomElement
  }

})();

export default controllerManager;