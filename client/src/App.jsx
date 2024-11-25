import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Routes,
} from "react-router-dom";
import {AuthLayout} from "./components";
import { Login,Register } from "./pages";
import AdminLayout from "./components/admin-view/AdminLayout";
import Dashboard from "./pages/admin-view/Dashboard";
import Products from "./pages/admin-view/Products";
import Features from './pages/admin-view/Features'
import Orders from './pages/admin-view/Orders';
import ShoppingLayout from "./components/shopping-view/ShoppingLayout";
import NotFound from "./pages/not-found";
import Account from "./pages/shopping-view/Account";
import Checkout from "./pages/shopping-view/Checkout";
import Home from "./pages/shopping-view/Home";
import Listing from "./pages/shopping-view/Listing";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth";


function App() {

  return (
    <>
      <Outlet />
    </>
  );
}
// Checking authentication logic
// const isAuthenticated = false;
//   const user =null;
// Checking the role of user
const isAuthenticated =true;
const user={
  name:"aleena",
  role:"user"
// role:"admin"

}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  element={<App/>}>
      <Route path="/auth" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AuthLayout/>
        </CheckAuth>
      }>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/admin" element={
         <CheckAuth isAuthenticated={isAuthenticated} user={user}>
         <AdminLayout/>
       </CheckAuth>}>
      <Route path="dashboard" element={<Dashboard/>} />
      <Route path="products" element={<Products />} />
      <Route path="features" element={<Features />} />
      <Route path="orders" element={<Orders />} />
      </Route>
      <Route path="/shop" element={
         <CheckAuth isAuthenticated={isAuthenticated} user={user}>
         <ShoppingLayout/>
       </CheckAuth>}>
      <Route path="listing" element={<Listing />} />
      <Route path="home" element={<Home />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="account" element={<Account/>} />
      </Route>
      
      <Route path="*" element={<NotFound/>}/>
      <Route path="/unauth-page" element={<UnauthPage/>}/>

    </Route>
  )
);

export default App
