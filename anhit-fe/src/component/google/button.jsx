import React, { useState } from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import { request } from "../../service/axios";
import { useAuth } from "../provider";
import { toast } from "react-hot-toast";
import { useSearchParams, redirect } from "react-router-dom";

export default function GoogleLoginButton() {
    const { isLoggedIn, isLoading, user, setLoading, setUser, setLoggedIn, getInfo } =
        useAuth();
    const [check, setCheck] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const successCallback = async ({ code }) => {
        setCheck(true)
        await request("get", "/user/auth/google/callback", {
            params: {
                code: code,
            }
        })
        var result = await getInfo()
        if (result){
            toast.success("Xác thực thành công")
            redirect(searchParams.get("continue") == null ? "/" : searchParams.get("continue"))
        }
        else
            toast.error("Xác thực thất bại")
        setCheck(false)
    }
    const failureCallback = async () => {
        setCheck(true)
        toast.error("Xác thực thất bại")
        setCheck(false)
    }

    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_API_CLIENT_ID}
            uxMode="redirect"
            redirectUri={process.env.REACT_APP_GOOGLE_API_CALLBACK}
            buttonText={(!check) ? "Tiếp tục với Google" : "Đang xác thực"}
            disabled={check}
            onSuccess={successCallback}
            onFailure={failureCallback}
            responseType={"code"}
        />
    );
}
