import { AccountBar, Header } from "../navbar";

export const FullScreen = ({ children }) => {
  return (
    <div className="h-srceen w-screen">
      <div id="body" className="h-full w-full">
        {children}
      </div>
    </div>
  );
};

export const NavBar = ({ children, accountBar = true, header = true }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="absolute z-1 w-full h-fit">
        {" "}
        {accountBar && (
          <AccountBar className="flex items-center pl-3 justify-between w-full h-fit shadow border-0 border-b text-sm block bg-white" />
        )}
        {header && (
          <Header className="transition ease-in-out duration-300 flex bg-[#6096B4] w-full h-fit p-2 px-2.5 justify-between items-center" />
        )}
      </div>
      <div id="body" className="block h-full w-full min-h-screen">
        {children}
      </div>
    </div>
  );
};
