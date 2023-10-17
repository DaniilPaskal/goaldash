import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faPencil, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faPencil, faUser);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
