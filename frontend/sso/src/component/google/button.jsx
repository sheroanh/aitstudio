import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { request } from "../../service/axios";
import { toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function GoogleLoginButton() {
  const [check, setCheck] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);

  const successCallback = async ({ code }) => {
    const redirectUrl = searchParams.get("redirectUrl") == null
    ? process.env.REACT_APP_DEFAULT_REDIRECT_URL
    : searchParams.get("redirectUrl")
    setCheck(true);
    await request("get", `/user/auth/google/callback`, {
      params: {
        code: code,
        redirectUrl: redirectUrl,
      },
    })
      .then((res) => {
        // if (res.data.status == "success") {
        //   var option = {
        //     sameSite: "none",
        //     secure: true,
        //     httpOnly: true,
        //     maxAge: 3600000 * 24 * 30,
        //     domain : res.config.baseURL
        //   }
        //   toast.success("Successfully logged in!. Redirecting...");
        //   setCookie("access_token", cookies.access_token, option);
        //   console.log(option, cookies, res)
        //   window.location.replace(res.data.data.redirectUrl);
        // } else throw new Error();
        toast.success("Successfully logged in!. You can close this tab");
      })
      .catch((err) => toast.error("Please try again. Error: " + err));
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
