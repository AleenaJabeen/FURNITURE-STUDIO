import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import {
  AuthLayout,
  AdminLayout,
  ShoppingLayout,
  CheckAuth,
} from "./components";
import {
  Login,
  Register,
  Dashboard,
  Products,
  Features,
  Orders,
  NotFound,
  Account,
  Checkout,
  Home,
  Listing,
  UnauthPage,
} from "./pages";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}
// Checking authentication logic
// const isAuthenticated = false;
// const user =null;
// Checking the role of user
const isAuthenticated = true;
const user = {
  name: "aleena",
  role: "user",
  // role:"admin"
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route
        path="auth"
        element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }
      >
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route
        path="admin"
        element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="features" element={<Features />} />
        <Route path="orders" element={<Orders />} />
      </Route>
      <Route
        path="shop"
        element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout />
          </CheckAuth>
        }
      >
        <Route path="listing" element={<Listing />} />
        <Route path="home" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="account" element={<Account />} />
      </Route>

      
      <Route path="unauth-page" element={<UnauthPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default App;
