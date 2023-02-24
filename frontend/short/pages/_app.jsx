import "@/styles/globals.css";
import { Provider } from "@/@ait-studio/component/provider";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Toaster
        toastOptions={{
          className: "",
          success: {
            style: {
              background: "green",
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "green",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "red",
            },
          },
        }}
      />
      <Component {...pageProps} />
    </Provider>
  );
}
