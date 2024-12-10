import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  AuthLayout,
  AdminLayout,
  ShoppingLayout,
  CheckAuth,
  ProductDetails,
} from "./components";
import { ToastContainer } from "react-toastify";
import {
  Login,
  Register,
  Products,
  Orders,
  NotFound,
  Account,
  Checkout,
  Home,
  Listing,
  ContactUs,AboutUs,
  UnauthPage,
  Cart,
  OrderCompleted
} from "./pages";
import { checkAuth } from "./store/auth-slice";
import { useSelector, useDispatch } from "react-redux";
import LoadingPage from "./components/ui/common/LoadingPage";
import Search from "./pages/shopping-view/Search";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const [isDelayedLoading, setIsDelayedLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading) {
      const delayTimer = setTimeout(() => setIsDelayedLoading(false), 3500); // Adjust time as needed
      return () => clearTimeout(delayTimer);
    }
  }, [isLoading]);

  if (isLoading || isDelayedLoading) {
    return <LoadingPage />;
  }

  return (
    <>
    <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
            ></CheckAuth>
          }
        />
        <Route
          path="/auth"
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
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="listing" element={<Listing />} />
          <Route path="account" element={<Account />} />
          <Route path="home" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="cart" element={<Cart />} />
          <Route path="search" element={<Search />} />
         <Route path="product-details/:id" element={<ProductDetails />}/>
         <Route path="order-completed" element={<OrderCompleted />}/>
        </Route>
        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
