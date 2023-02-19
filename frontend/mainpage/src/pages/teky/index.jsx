import React, { useEffect } from "react";
import { FullScreen } from "../../component/layout/fullscreen";
import { Public } from "../../component/wrapper/index";
import { Navigate } from "react-router-dom";

const Teky = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // 👇️ redirects to an external URL
      window.location.replace('https://aitstudio.sharepoint.com/:f:/s/TEKY/Ety5za01AfZHsv00Gp7G2u8BrEts7TG3KnRZD8vulyTs6Q?e=3lMfGa');
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <Public>
      <FullScreen>
        <div className="grid grid-auto-rows content-center justify-items-center h-full w-full bg-gray-100 text-gray-700 min-h-screen">
          <img className="w-20" src="https://teky.edu.vn/static/web/images/logo-full.svg" alt="logo" />
          <p className="text-lg md:text-xl lg:text-3xl text-center font-semibold">
            Đang chuyển hướng...
          </p>
        </div>
      </FullScreen>
    </Public>
  );
};

export default Teky;
