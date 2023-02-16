import GoogleLoginButton from "../../component/google/button.jsx";
import { useAuth } from "../../component/provider/index.js";

export const LoginPage = ({}) => {
  const { isLoggedIn, isLoading, user } = useAuth();
  return (
    <div className="flex flew-row justify-center content-center align-center h-full w-full">
      {isLoading ? (
        <>Loading...</>
      ) : !isLoggedIn ? (
        <GoogleLoginButton />
      ) : (
        <div className="container">
          <p>
            Thông tin đăng nhập:
            <span>{user.displayName}</span>
          </p>
        </div>
      )}
    </div>
  );
};
