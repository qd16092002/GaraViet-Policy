import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import VN from "antd/locale/vi_VN";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ConfigProvider locale={VN}>
                <App />
            </ConfigProvider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();

