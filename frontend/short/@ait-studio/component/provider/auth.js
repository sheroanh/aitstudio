import React, { useContext, useEffect, useState, createContext } from "react";
import { request } from "../../service/axios";
import { toast } from "react-hot-toast";

export const useProvideAuth = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(false);

  const getInfo = async () => {
    try {
      setLoading(true);
      setLoggedIn(false);
      const response = await request("get", "/user/data");
      if (response.data.status == "success") {
        setUser(response.data.data);
        setLoggedIn(true);
        setLoading(false);
        return true;
      } else setLoggedIn(false);
      setLoading(false);
    } catch (err) {
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    const response = await request("get", "/user/logout");
    if (response.data.status == "success") {
      setUser(null);
      setLoggedIn(false);
      toast.success("You have logged out");
    } else toast.error("Sorry, something went wrong. Please try again!");
  };

  useEffect(() => {
    getInfo();
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
    logOut 
  };
};
