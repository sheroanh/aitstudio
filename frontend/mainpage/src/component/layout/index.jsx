import { AccountBar } from "../navbar"

export const FullScreen = ({children}) => {
    return (
        <div className="h-srceen w-screen">
            <div id="body" className="h-full w-full">{children}</div>
        </div>
    )
}

export const NavBar = ({children, accountBar = true}) => {
    return (
        <div className="flex flex-col h-screen w-screen m-0">
            <AccountBar/>
            <div id="body" className="h-full w-full pt-7 z-0">{children}</div>
        </div>
    )
}