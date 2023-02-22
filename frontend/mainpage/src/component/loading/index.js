import { Image } from "../image";

export const Loading = ({
  title = "Loading",
  message = "Checking your account...",
}) => {
  return (
    <div className="h-full w-full bg-gray-100 text-gray-700">
      <div className="grid grid-auto-rows content-center justify-items-center h-full w-full">
        <div className="w-32">
          <Image src="/logo.svg" alt="logo" />
        </div>
        <p className="text-lg md:text-xl lg:text-3xl text-center font-semibold">
          {title}
        </p>
        <p className="text-sm text-center italic">{message}</p>
      </div>
    </div>
  );
};

export const LoadingPage = ({ title, message }) => {
  return (
    <div className="h-screen w-screen">
      <Loading title={title} message={message} />
    </div>
  );
};
