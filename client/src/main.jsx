import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
); 