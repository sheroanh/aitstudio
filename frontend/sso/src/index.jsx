import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { LoginPage } from "./pages/login/index";
import { Provider } from "./component/provider";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
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
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </Provider>
);
