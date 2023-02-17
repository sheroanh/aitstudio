import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Maintenance from "./pages/maintenance/index";
import { LoginPage } from "./pages/login/index";
import { Provider } from "./component/provider";
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <Toaster toastOptions={{
    className: "",
    success: {
      style: {
        background: 'green',
        color: 'white',
      },
      iconTheme: {
        primary: 'white',
        secondary: 'black',
      },
    },
    error: {
      style: {
        background: 'red',
        color: 'white',
      },
      iconTheme: {
        primary: 'white',
        secondary: 'black',
      },
    },
  }}/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Maintenance />} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
