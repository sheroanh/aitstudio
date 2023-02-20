import React, { useState, useEffect } from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { request } from "../../service/axios";
import { toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { LoadingPage } from "../loading/index";

export default function GoogleLoginButton() {
  const [check, setCheck] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const redirectUrl =
    searchParams.get("redirectUrl") == null
      ? process.env.REACT_APP_DEFAULT_REDIRECT_URL
      : searchParams.get("redirectUrl");
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => successCallback(codeResponse),
    flow: "auth-code",
  });
  const successCallback = async (codeResponse) => {
    const { code } = codeResponse;
    setCheck(true);
    await request("get", `/user/auth/google/callback`, {
      params: {
        code: code,
        redirectUrl: redirectUrl,
      },
    })
      .then((res) => {
        toast.success("Successfully logged in!. You can close this tab");
        window.location.href = redirectUrl;
      })
      .catch((err) => {
        toast.error("Please try again. Error: " + err);
        setCheck(false)
    });
  };

  const failureCallback = async () => {
    setCheck(true);
    toast.error("Error. Please try again");
    setCheck(false);
  };

  return (
    <>
      {!check ? (
        <button
          type="button"
          onClick={() => login()}
          className="flex items-center px-2 py-2.5 mb-2 text-sky-600 bg-white font-medium leading-tight rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
            className="w-5 h-5 mr-1   "
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            />
          </svg>
          <p className="text-gray-600">Google</p>
        </button>
      ) : (
        <LoadingPage message={"Checking your account..."}/>
      )}
    </>
  );
}
