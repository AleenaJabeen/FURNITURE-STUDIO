import { createRoot } from "react-dom/client";
import React from 'react';
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { router } from "./App";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
