import GoogleLoginButton from "../../component/google/button.jsx";
import { FullScreen } from "../../component/layout/fullscreen.jsx";

export const LoginPage = ({}) => {
  return (
    <FullScreen>
      <div
        className="flex flew-col w-full h-full min-h-screen bg-repeat bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/JktJHQY/technology-6873010.jpg)",
        }}
      >
        <div className="h-full w-full md:w-2/5 backdrop-blur-xl md:drop-shadow-xl min-h-screen">
          <div className="flex h-full w-full min-h-screen">
            <div className="m-auto container p-10 text-gray-100">
              <div className="text-white mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-16 md:w-36 m-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 5.996V14H3s-1 0-1-1 1-4 6-4c.564 0 1.077.038 1.544.107a4.524 4.524 0 0 0-.803.918A10.46 10.46 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h5ZM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z" />
                </svg>
              </div>
              <p className="font-bold text-3xl mb-5 ml-2">Single Sign-on System</p>
              <div className="flex items-center ml-2 gap-2"><p className="text-sm md:text-lg mb-3">Using social account</p>
              <GoogleLoginButton /></div>
              
            </div>
          </div>
        </div>
      </div>
    </FullScreen>
  );
};
