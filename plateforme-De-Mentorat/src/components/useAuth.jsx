import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useState } from "react";
import Cookies from "js-cookie";

const useAuth = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  return { isLoggedIn, login, logout };
};

export default useAuth;
