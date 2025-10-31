import { Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "./App.scss";

const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/garageviet-privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/" element={<PrivacyPolicy />} />
            </Routes>
        </div>
    );
};

export default App;

