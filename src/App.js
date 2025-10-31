import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OperationPolicy from "./pages/OperationPolicy";
import { Tabs } from "antd";
import "./App.scss";

const App = () => {
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
                    <Tabs.TabPane tab="Chính sách bảo mật" key="privacy" />
                    <Tabs.TabPane tab="Quy chế hoạt động" key="operation" />
                </Tabs>
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

