import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const useAuth = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  return { isLoggedIn, login, logout };
};

export default useAuth;
