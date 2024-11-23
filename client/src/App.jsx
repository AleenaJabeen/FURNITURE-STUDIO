import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import {AuthLayout} from "./components";
import { Login,Register } from "./pages";


function App() {

  return (
    <>
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<AuthLayout/>}>
        <Route path="register" element={<Register />} />
        <Route path="" element={<Login />} />
      </Route>
    </Route>
  )
);

export default App
