const osType = (function () {

  let type = undefined;
  const user_agent = navigator.userAgent || navigator.vendor || window.opera;

  function getType() {
    if (type)
      return type;

    if (/windows phone/i.test(user_agent)) {
      type = "mobile";
    } else if (/shield/i.test(user_agent) || /mibox3/i.test(user_agent)) {
      type = "browser";
    } else if (/android/i.test(user_agent)) {
      type = "mobile";
    } else if (/iPad|iPhone|iPod/.test(user_agent) && !window.MSStream) {
      type = "mobile";
    } else if (/Mobi/.test(user_agent)) {
      type = "mobile";
    } else {
      type = "browser";
    }

    return type;
  }

  return {
    getType
  }

})();

export default osType;