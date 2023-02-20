import { shortcuts } from "./menu";
import { useAuth, useOutsideClick } from "../provider/index";
import React, { useState} from "react";

export const AccountBar = () => {
  const { isLoggedIn, user, logOut } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userToggle = () => {
    if (isLoggedIn) setShowUserMenu(!showUserMenu);
    else if (window) window.location.href = process.env.REACT_APP_SSO_URL;
  };
  return (
    <div className="flex items-center pl-3 justify-between w-screen h-fit shadow border-0 border-b text-sm sticky z-50 bg-white">
      <div className="flex items-center gap-5">
        <img className="w-6" src="/logo.svg" />
        {/* <div className="flex items-center justify-between overflow-y-auto gap-5">
          {shortcuts.map((shortcut, index) => {
            return (
              <a
                href={shortcut.url}
                key={`shortcut-${index}`}
                className="text-sm font-light whitespace-nowrap"
              >
                {shortcut.name}
              </a>
            );
          })}
        </div> */}
        <p>Demo page</p>
      </div>
      <div className="flex items-center">
        <button
          className="flex items-center text-gray-600 hover:bg-sky-600 hover:text-white p-1 text-sm gap-1"
          type="button"
          onClick={userToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          </svg>
          <span className="hidden md:inline-block relative w-48 md:w-48 lg:w-full text-ellipsis overflow-hidden whitespace-nowrap">
            {!isLoggedIn ? "Login" : user.displayName.split(" ")[0]}
          </span>
        </button>
        {isLoggedIn && showUserMenu && <UserMenu userToggle={()=>userToggle} />}
      </div>
    </div>
  );
};

const UserMenu = ({ children, userToggle}) => {
  const { isLoggedIn, user, logOut } = useAuth();
  const ref = useOutsideClick(userToggle)
  return (
    <div className="fixed z-50 w-36 container top-8 right-1 h-fit drop-shadow rounded bg-white p-2">
      <div className="flex items-center gap-2 mb-2 p-1">
        <img className="w-7 md:w-10 rounded" src={user.avatar} alt="avatar" />
        <p className="font-semibold text-sm">{user.displayName}</p>
      </div>
      <button
        type="button"
        className="flex items-center hover:bg-red-600 focus:bg-red-600 hover:text-white focus:text-white text-red-600 p-1 w-full rounded"
        onClick={() => logOut()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"
          />
        </svg>
        <p>Logout</p>
      </button>
    </div>
  );
};
