import { useAuth } from "../provider";
import { LoadingPage } from "../loading";
import { Navigate } from "react-router-dom";

export const Guest = ({ children }) => {
    const { isLoading, isLoggedIn } = useAuth();
    return (
        <>
            {(isLoading) ? <LoadingPage /> :
                ((isLoggedIn) ? <Navigate to="/" replace={true} /> : children)}
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
                ((isLoggedIn) ? children : <Navigate to="/login" replace={true} />)}
        </>
    )
}

