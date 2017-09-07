function() {
  function getClientIdFromTracker() {
    try {
      var trackers = ga.getAll();
      var i, len;
      for (i = 0, len = trackers.length; i < len; i += 1) {
        if (trackers[i].get('trackingId') === {{UA - Tracking ID}}) {
          return trackers[i].get('clientId');
        }
      }
    } catch(e) {}
    return undefined;
  }

  function getClientIdFromCookie() {
    var gaCookie = getCookie("_ga");
    if (typeof gaCookie !== "undefined") {
      return gaCookie.split(".").splice(-2,2).join(".");
    }
    return undefined;
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
      while (c.charAt(0)==' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length,c.length);
      }
    }
    return undefined;
  }
  return getClientIdFromTracker() || getClientIdFromCookie() || 'false';
}
