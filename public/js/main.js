$(document).ready(() => {
  window.fbAsyncInit = function () {
      FB.init({
          appId: '1892812197704452',
          xfbml: true,
          version: 'v2.10'
        });
      FB.AppEvents.logPageView();
    };

  (function (d, s, id) {
      let js,
          fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
});
