import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userJson = sessionStorage.getItem("user");
  const userObj = JSON.parse(userJson);
  const auth = userObj?._id;

  return auth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
