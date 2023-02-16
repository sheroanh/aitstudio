import React, { useContext, useEffect, useState, createContext } from "react";
import { request } from "../../service/axios";

export const useProvideAuth = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(false);

  const getInfo = () => {
    setLoading(true)
    const response = request("get", "/user/data");
    setLoading(false)
  };

  useEffect(() => {
    getInfo()
  }, []);

  // Return the user object and auth methods
  return {
    isLoggedIn,
    isLoading,
    user,
    setLoading,
    setLoggedIn,
    setUser,
    getInfo,
  };
};
