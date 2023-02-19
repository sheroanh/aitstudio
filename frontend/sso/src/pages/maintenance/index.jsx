import { FullScreen } from "../../component/layout/fullscreen";
import { Public } from "../../component/wrapper/index";

const Home = () => {
  return (
    <Public>
      <FullScreen>
        <div className="grid grid-auto-rows content-center justify-items-center h-full w-full bg-gray-100 text-gray-700 min-h-screen">
          <img className="w-20" src="/logo.svg" alt="logo" />
          <p className="text-lg md:text-xl lg:text-3xl text-center font-semibold">
            Maintenance
          </p>
        </div>
      </FullScreen>
    </Public>
  );
};

export default Home;
