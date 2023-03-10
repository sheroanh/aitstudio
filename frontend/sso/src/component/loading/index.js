export const Loading = ({title = "Loading" ,message = "Checking your account..."}) => {
    return(
        <div className="h-full w-full bg-gray-100 text-gray-700">
            <div className="grid grid-auto-rows content-center justify-items-center h-full w-full">
                <img className="w-20 md:w-32" src="/logo.svg" alt="logo"/>
                <p className="text-lg md:text-xl lg:text-3xl text-center font-semibold">{title}</p>
                <p className="text-sm text-center italic">{message}</p>
            </div>
        </div>
    )
}

export const LoadingPage = ({title,message}) => {
    return (
        <div className="fixed top-0 left-0 h-screen w-screen z-1">
            <Loading title={title} message={message}/>
        </div>
    )
}