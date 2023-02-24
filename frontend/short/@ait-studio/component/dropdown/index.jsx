import React, { useRef } from "react";
import { useClickOutside } from "./clickOutside";

export const Dropdown = ({ children, toggle, className }) => {
  const ref = useRef(null);
  useClickOutside(ref, toggle);
  return (
    <div
      ref={ref}
      className={className}
    >
      {children}
    </div>
  );
};
