import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Maintenance from "./pages/maintenance/index";
import { LoginPage } from './pages/login/index';
import reportWebVitals from './reportWebVitals';
import { Provider } from './component/provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
        <LoginPage />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
