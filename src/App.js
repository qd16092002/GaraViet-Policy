import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OperationPolicy from "./pages/OperationPolicy";
import { Tabs } from "antd";
import LanguageSwitcher from "./components/LanguageSwitcher";
import "./App.scss";
import { useTranslation } from "react-i18next";

const App = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const handleTabChange = (key) => {
        if (key === "privacy") {
            navigate("/garageviet-privacy-policy");
        } else if (key === "operation") {
            navigate("/garageviet-operation-policy");
        }
    };

    const getActiveTab = () => {
        if (location.pathname === "/garageviet-operation-policy") {
            return "operation";
        }
        return "privacy";
    };

    return (
        <div className="app">
            <div className="policy-tabs-container">
                <Tabs
                    activeKey={getActiveTab()}
                    onChange={handleTabChange}
                    centered
                    className="policy-tabs"
                >
                    <Tabs.TabPane tab={t("header.privacyPolicy")} key="privacy" />
                    <Tabs.TabPane tab={t("header.operationPolicy")} key="operation" />
                </Tabs>
                <div className="language-switcher-container">
                    <LanguageSwitcher />
                </div>
            </div>
            <Routes>
                <Route path="/garageviet-privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/garageviet-operation-policy" element={<OperationPolicy />} />
                <Route path="/" element={<PrivacyPolicy />} />
            </Routes>
        </div>
    );
};

export default App;

