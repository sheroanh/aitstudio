import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import { request } from "../../service/axios";
import { useAuth } from "../provider";

export default function GoogleLoginButton() {
    const { isLoggedIn, isLoading, user, setLoading, setUser, setLoggedIn } =
        useAuth();
    const successCallback = async ({ code }) => {
        setLoading(true)
        await request("get", "/user/auth/google/callback", {
            params: {
                code: code,
            }
        })
        setLoading(false)
    }

    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_API_CLIENT_ID}
            uxMode="redirect"
            redirectUri={process.env.REACT_APP_GOOGLE_API_CALLBACK}
            buttonText="Đăng nhập bằng Google"
            onSuccess={successCallback}
            onFailure={successCallback}
            responseType={"code"}
        />
    );
}
