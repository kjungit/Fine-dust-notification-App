import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import ScrollTop from "./Common/ScrollTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollTop />
    <App />
  </BrowserRouter>
);

serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register();

reportWebVitals();
