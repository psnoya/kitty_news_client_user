import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import configureStore from "./state/store/configureStore";
import { Provider } from "react-redux";
import "./i18n"

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const store = configureStore();
window.store = store;

ReactDOM.render(
  <Suspense fallback={<div>Loading.... Mauw</div>}>
      <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  </Suspense>
,
  document.getElementById("root")
);

reportWebVitals();
