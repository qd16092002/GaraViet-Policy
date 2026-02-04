import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OperationPolicy from "./pages/OperationPolicy";
import AccountDeletionPage from "./pages/AccountDeletionPage";
import LandingPage from "./pages/LandingPage";
import { Tabs } from "antd";
import LanguageSwitcher from "./components/LanguageSwitcher";
import "./App.scss";
import { useTranslation } from "react-i18next";

const BASE_URL = "https://garageviet.vn";

const App = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    // Cập nhật canonical URL theo từng trang → Google biết trang chính tắc, hết báo "duplicate"
    useEffect(() => {
        const canonical = document.getElementById("canonical-link");
        if (canonical) {
            const path = location.pathname === "/" ? "" : location.pathname;
            canonical.href = `${BASE_URL}${path}`;
        }
    }, [location.pathname]);

    const handleTabChange = (key) => {
        if (key === "privacy") {
            navigate("/garageviet-privacy-policy");
        } else if (key === "operation") {
            navigate("/garageviet-operation-policy");
        } else if (key === "accountDeletion") {
            navigate("/account-deletion");   
        }
    };

    const getActiveTab = () => {
        if (location.pathname === "/garageviet-operation-policy") {
            return "operation";
        }
        if (location.pathname === "/account-deletion") { 
            return "accountDeletion";
        }
        return "privacy";
    };

    const isLandingPage = location.pathname === "/";

    return (
        <div className={`app ${isLandingPage ? "landing-page-active" : ""}`}>
            {!isLandingPage && (
                <div className="policy-tabs-container">
                    <Tabs
                        activeKey={getActiveTab()}
                        onChange={handleTabChange}
                        centered
                        className="policy-tabs"
                    >
                        <Tabs.TabPane tab={t("header.privacyPolicy")} key="privacy" />
                        <Tabs.TabPane tab={t("header.operationPolicy")} key="operation" />
                        <Tabs.TabPane tab={t("header.accountDeletion")} key="accountDeletion" />
                    </Tabs>
                    <div className="language-switcher-container">
                        <LanguageSwitcher />
                    </div>
                </div>
            )}
            <Routes>
                <Route path="/garageviet-privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/garageviet-operation-policy" element={<OperationPolicy />} />
                <Route path="/account-deletion" element={<AccountDeletionPage />} />
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </div>
    );
};

export default App;

