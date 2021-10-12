const facebookAppId = process.env.REACT_APP_FACEBOOK_CLIENT_ID;

export function initFacebookSdk() {
  return new Promise((resolve) => {
    // wait for facebook sdk to initialize before starting the react app
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: facebookAppId,
        cookie: true,
        xfbml: true,
        version: "v12.0",
      });

      // auto authenticate with the api if already logged in with facebook
      window.FB.getLoginStatus(({ authResponse }) => {
        if (authResponse) {
        } else {
          resolve();
        }
      });
    };
  });
}

export const facebookLogin = (callback) => {
  window.FB.login(function (response) {
    if (response.status === "connected") {
      statusChangeCallback(response, callback);
    } else {
      // The person is not logged into your webpage or we are unable to tell.
      console.log("failed log in...");
    }
  });
};

export const testAPI = () => {
  // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log("Welcome!  Fetching your information.... ");
  window.FB.api("/me", function (response) {
    console.log("Successful login for: " + response.name);
  });
};

export const checkLoginState = (callback) => {
  // Called when a person is finished with the Login Button.
  window.FB.getLoginStatus(function (response) {
    // See the onlogin handler
    statusChangeCallback(response, callback);
  });
};

export const statusChangeCallback = (response, callback) => {
  // Called with the results from FB.getLoginStatus().
  console.log("statusChangeCallback");
  if (response.status === "connected") {
    // Logged into your webpage and Facebook.
    testAPI();
    if (callback !== undefined && callback !== null) {
      callback(response);
    }
  }
};

export const logout = () => {
  window.FB.logout(function (response) {
    console.log("logged out...");
  });
};
