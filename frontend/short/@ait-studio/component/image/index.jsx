import LazyLoad from "react-lazyload";

export const Image = ({ src = "", alt = "image" }) => {
  return (
    <>
      <LazyLoad
        once={true}
        placeholder={
          <svg className="animate-spin w-8 h-8" viewBox="0 0 24 24"></svg>
        }
      >
        <img className="h-full w-full" src={src} alt={alt} />
      </LazyLoad>
    </>
  );
};
