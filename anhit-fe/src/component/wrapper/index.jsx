import { useAuth } from "../provider";
import { LoadingPage } from "../loading";
import { redirect } from "react-router-dom";

export const Guest = ({ children }) => {
    const { isLoading, isLoggedIn } = useAuth();
    return (
        <>
            {(isLoading) ? <LoadingPage /> :
                ((isLoggedIn) ? redirect("/") : children)}
        </>
    )
}

export const Public = ({ children }) => {
    const { isLoading, isLoggedIn } = useAuth();
    return (
        <>
            {(isLoading) ? <LoadingPage /> : children}
        </>
    )
}
export const Private = ({ children }) => {
    const { isLoading, isLoggedIn } = useAuth();
    return (
        <>
            {(isLoading) ? <LoadingPage /> :
                ((isLoggedIn) ? children : redirect("/login"))}
        </>
    )
}

