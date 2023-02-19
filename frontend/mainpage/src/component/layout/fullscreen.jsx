export const FullScreen = ({children}) => {
    return (
        <div className="h-srceen w-screen">
            <div id="body" className="h-full w-full">{children}</div>
        </div>
    )
}