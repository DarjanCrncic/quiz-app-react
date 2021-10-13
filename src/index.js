import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { initFacebookSdk } from "./utils/_auth-helpers";
import axios from "axios";

axios.interceptors.request.use(
  (request) => {
    if (!request.url.includes("login")) {
      request.headers["Authorization"] = "Bearer " + store.getState().authReducer.jwtToken;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
  initFacebookSdk
);
