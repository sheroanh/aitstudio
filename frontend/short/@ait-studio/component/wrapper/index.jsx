import { useAuth } from "../provider";
import { LoadingPage } from "../loading";
import { useRouter } from 'next/router'

export const Guest = ({ children }) => {
    const router = useRouter()
    const { isLoading, isLoggedIn } = useAuth();
    return (
        <>
            {(isLoading) ? <LoadingPage /> :
                ((isLoggedIn) ? router.push('/') : children)}
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
    const router = useRouter()
    return (
        <>
            {(isLoading) ? <LoadingPage /> :
                ((isLoggedIn) ? children : router.push('/'))}
        </>
    )
}

