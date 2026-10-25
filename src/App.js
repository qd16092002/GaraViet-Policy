import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OperationPolicy from "./pages/OperationPolicy";
import AccountDeletionPage from "./pages/AccountDeletionPage";
import LandingPage from "./pages/LandingPage";
import ImageCredits from "./pages/ImageCredits";
import SiteHeader from "./components/site/SiteHeader";
import SiteFooter from "./components/site/SiteFooter";
import "./components/site/site.scss";
import "./App.scss";

const BASE_URL = "https://garageviet.vn";

const App = () => {
    const location = useLocation();

    // Canonical: Nginx đã thay __CANONICAL_URL__ trong HTML; JS cập nhật thêm khi client điều hướng (optional)
    useEffect(() => {
        const canonical = document.getElementById("canonical-link");
        if (canonical && canonical.href.includes("__CANONICAL_URL__")) {
            const path = location.pathname === "/" ? "" : location.pathname;
            canonical.href = `${BASE_URL}${path}`;
        }
    }, [location.pathname]);

    // Chuyển trang trong app thì về đầu trang (trừ khi URL có #mục).
    useEffect(() => {
        if (!location.hash) window.scrollTo(0, 0);
    }, [location.pathname, location.hash]);

    const isLandingPage = location.pathname === "/";

    return (
        <div className="app">
            {!isLandingPage && <SiteHeader showLanguage />}
            <Routes>
                <Route path="/garageviet-privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/garageviet-operation-policy" element={<OperationPolicy />} />
                <Route path="/account-deletion" element={<AccountDeletionPage />} />
        <Route path="/nguon-anh" element={<ImageCredits />} />
                <Route path="/" element={<LandingPage />} />
            </Routes>
            {!isLandingPage && <SiteFooter />}
        </div>
    );
};

export default App;
