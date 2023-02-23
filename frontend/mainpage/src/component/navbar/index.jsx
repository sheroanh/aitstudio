import { shortcuts, menu } from "./menu";
import { useAuth } from "../provider/index";
import React, { useState } from "react";
import { Dropdown } from "../dropdown";

const UserMenu = ({ children, userToggle }) => {
  const { isLoggedIn, user, logOut } = useAuth();
  return (
    <>
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
            fillRule="evenodd"
            d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"
          />
        </svg>
        <p>Logout</p>
      </button>
    </>
  );
};

const NavMenu = () => {
  return (
    <div className="flex flex-col md:flex-row md:text-[#EEE9DA] text-gray-600 gap-5 h-full">
      { menu.map((value, index)=>{return <a key={`menu-${value.name}`} href={value.url}>
        {value.name}
      </a> })}
    </div>
  );
};

export const Header = ({ className = "transition ease-in-out duration-300 absolute z-10 flex bg-[#6096B4] w-full h-fit p-2 px-2.5 justify-between items-center"}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div
      id="header"
      className={className}
    >
      <a href="#" className="flex justify-center items-end">
        <img className="w-8" src="/logo.svg" alt="logo" />
        <span className="font-semibold p-0 mb-1">Studio</span>
      </a>
      {showDropdown && (
        <Dropdown
          toggle={() => setShowDropdown(!showDropdown)}
          className="absolute z-10 w-full h-fit bg-white top-20 left-0 p-2 shadow rounded transition ease-in-out delay-150 transform duration-600"
        >
          <NavMenu />
        </Dropdown>
      )}
      <div className="hidden md:block ">
        <NavMenu />
      </div>
      <button
        type="button"
        className="block md:hidden w-6 text-[#EEE9DA]"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
    </div>
  );
};

export const AccountBar = ({
  className = "flex items-center pl-3 justify-between w-full h-fit shadow border-0 border-b text-sm fixed z-50 bg-white",
}) => {
  const { isLoggedIn, user, logOut } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userToggle = () => {
    if (isLoggedIn) {
      setShowUserMenu(!showUserMenu);
      console.log(showUserMenu);
    } else if (window) window.location.href = process.env.REACT_APP_SSO_URL;
  };
  return (
    <div className={className}>
      <div className="flex items-center gap-1">
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
        <p>Account</p>
      </div>
      <div className="flex items-center w-fit">
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
          <span className="hidden md:inline-block relative w-20 md:w-fit text-ellipsis overflow-hidden whitespace-nowrap">
            {!isLoggedIn ? "Login" : user.displayName.split(" ")[0]}
          </span>
        </button>
        {isLoggedIn && showUserMenu && (
          <Dropdown
            toggle={() => userToggle()}
            className="absolute z-50 top-8 right-1 w-52 h-fit bg-white p-2 rounded shadow"
          >
            <UserMenu />
          </Dropdown>
        )}
      </div>
    </div>
  );
};
