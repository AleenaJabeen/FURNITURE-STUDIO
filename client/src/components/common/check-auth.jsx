import React from "react";
import { useLocation, Navigate } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  // Get the current route location from the router
  const location = useLocation();

  // If the user is not authenticated, check if the route is not login or register
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("./login") ||
      location.pathname.includes("./register")
    )
  ) {
    // Redirect the user to the login page if they are not authenticated and not already on the login or register page
    return <Navigate to="/auth/login" />;
  }

  // If the user is authenticated and tries to access login or register routes, redirect them based on their role
  if (isAuthenticated && 
      (location.pathname.includes("./login") || location.pathname.includes("./register"))) {
    // If the user is an admin, redirect them to the admin dashboard
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      // Otherwise, redirect non-admin users to the shop home page
      return <Navigate to="/shop/home" />;
    }
  }

  // If the user is authenticated, but their role is not "admin" and they try to access admin routes
  if (isAuthenticated && user?.role !== "admin" && location.pathname.includes("admin")) {
    // Redirect non-admin users to an "unauth-page" when trying to access admin routes
    return <Navigate to="/unauth-page" />;
  }

  // If the user is authenticated and an admin, but they are on shop routes, redirect them to the admin dashboard
  if (isAuthenticated && user?.role === "admin" && location.pathname.includes("shop")) {
    // Redirect the admin to the admin dashboard if they try to access shop-related routes
    return <Navigate to="/admin/dashboard" />;
  }

  // If none of the above conditions match, render the children (the protected content)
  return (
    <>
      {children}
    </>
  );
}

export default CheckAuth;
