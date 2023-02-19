import React, { useState } from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import { request } from "../../service/axios";
import { useAuth } from "../provider";
import { toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

export default function GoogleLoginButton() {
  const {
    isLoggedIn,
    isLoading,
    user,
    setLoading,
    setUser,
    setLoggedIn,
    getInfo,
  } = useAuth();
  const [check, setCheck] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const successCallback = async ({ code }) => {
    setCheck(true);
    await request(
      "get",
      `/user/auth/google/callback`,
      {
        params: {
          code: code,
          redirectUrl: searchParams.get("redirectUrl") == null
          ? process.env.REACT_APP_DEFAULT_REDIRECT_URL
          : searchParams.get("redirectUrl")
        },
      }
    ).then((res) => {
        toast.success("Successfully logged in!. Redirecting...")
    }).catch((err) => toast.error("Please try again. Error: " + err));
    setCheck(false);
  };
  const failureCallback = async () => {
    setCheck(true);
    toast.error("Error. Please try again");
    setCheck(false);
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_API_CLIENT_ID}
      buttonText={!check ? "Tiếp tục với Google" : "Đang xác thực"}
      disabled={check}
      onSuccess={successCallback}
      onFailure={failureCallback}
      responseType={"code"}
    />
  );
}
