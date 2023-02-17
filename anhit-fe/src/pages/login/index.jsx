import GoogleLoginButton from "../../component/google/button.jsx";
import { useAuth } from "../../component/provider/index.js";

export const LoginPage = ({ }) => {
  const { isLoggedIn, isLoading, user } = useAuth();
  return (
    <div className="flex flew-col w-full h-full min-h-screen bg-repeat bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/JktJHQY/technology-6873010.jpg)' }}>
      <div className="h-full w-full md:w-2/5 backdrop-blur-xl md:drop-shadow-xl min-h-screen">
        <div className="flex h-full w-full min-h-screen">
          <div className="m-auto container p-10 text-gray-100">
            <p className="font-bold text-3xl mb-5">Xác thực tài khoản</p>
            <p className="text-sm md:text-lg mb-3">Sử dụng tài khoản MXH</p>
            <GoogleLoginButton/>
            <p className="text-sm mt-2 italic">Xác thực chỉ bằng 1 lần nhấn</p>
          </div>
        </div>
      </div>
    </div>
  );
};
