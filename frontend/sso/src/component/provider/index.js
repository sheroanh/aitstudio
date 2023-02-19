import React, { useContext, useEffect, useState, createContext } from "react";
import { useProvideAuth } from "./auth";

const Context = createContext();

export const Provider = ({ children }) => {
  const auth = useProvideAuth();
  return <Context.Provider value={auth}>{children}</Context.Provider>;
};

export const useAuth = () => {
  return useContext(Context);
};


