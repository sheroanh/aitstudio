import GoogleLoginButton from "../../component/google/button.jsx";
import { FullScreen } from "../../component/layout/fullscreen.jsx";

export const LoginPage = ({ }) => {
  return (
      <FullScreen>
        <div className="flex flew-col w-full h-full min-h-screen bg-repeat bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/JktJHQY/technology-6873010.jpg)' }}>
          <div className="h-full w-full md:w-2/5 backdrop-blur-xl md:drop-shadow-xl min-h-screen">
            <div className="flex h-full w-full min-h-screen">
              <div className="m-auto container p-10 text-gray-100">
                <img className="w-20 md:w-32" src="/logo.svg" alt="logo"/>
                <p className="font-bold text-3xl mb-5">Single Sign-on System</p>
                <p className="text-sm md:text-lg mb-3">Using social account</p>
                <GoogleLoginButton />
              </div>
            </div>
          </div>
        </div>
      </FullScreen>
  );
};
