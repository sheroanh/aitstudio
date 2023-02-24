import React, {
  useContext,
  useEffect,
  useState,
  createContext,
  useRef,
} from "react";
import { useProvideAuth } from "./auth";

const Context = createContext();

export const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
};

export const Provider = ({ children }) => {
  const auth = useProvideAuth();
  return <Context.Provider value={auth}>{children}</Context.Provider>;
};

export const useAuth = () => {
  return useContext(Context);
};
