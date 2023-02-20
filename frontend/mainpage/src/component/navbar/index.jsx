import { shortcuts } from "./menu";
import { useAuth } from "../provider/index";

export const AccountBar = () => {
  const { isLoggedIn, user, logOut } = useAuth();
  return (
    <div className="flex items-center pl-3 justify-between w-screen h-fit shadow border-0 border-b">
      <div className="flex items-center gap-5 p-1">
        <img className="w-8" src="/logo.svg"/>
        <div className="flex items-center justify-between overflow-y-auto gap-5 h-8">
        {shortcuts.map((shortcut, index) => {
          return (
            <a href={shortcut.url} key={`shortcut-${index}`} className="whitespace-nowrap">
              {shortcut.name}
            </a>
          );
        })}
        </div>
      </div>
      <div className="flex items-center">
        <a
          href={!isLoggedIn ? process.env.REACT_APP_SSO_URL : "#"}
          className="inline-block relative w-24 md:w-48 lg:w-full text-ellipsis overflow-hidden whitespace-nowrap font-semibold hover:bg-sky-600 hover:text-white p-2 md:px-2 "
        >
          {!isLoggedIn ? "My Account" : user.displayName}
        </a>
        {isLoggedIn && (
          <button
            type="button"
            className="hover:bg-red-600 focus:bg-red-600 hover:text-white focus:text-white text-red-600 p-2"
            onClick={() => logOut()}
            alt="Log Out"
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
          </button>
        )}
      </div>
    </div>
  );
};
