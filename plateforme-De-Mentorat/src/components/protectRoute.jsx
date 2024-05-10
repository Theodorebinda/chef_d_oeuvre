import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isConnected = localStorage.getItem("isConnected") === "true";
  return (
    <Route
      {...rest}
      render={(props) =>
        isConnected ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
