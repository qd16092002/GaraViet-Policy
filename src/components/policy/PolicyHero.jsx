import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./policy.scss";

const TABS = [
    { key: "privacyPolicy", to: "/garageviet-privacy-policy" },
    { key: "operationPolicy", to: "/garageviet-operation-policy" },
    { key: "accountDeletion", to: "/account-deletion" },
    { key: "imageCredits", to: "/nguon-anh" },
];

// Dải tiêu đề tối + tab dạng pill, dùng chung cho các trang chính sách.
const PolicyHero = ({ title, subtitle, meta }) => {
    const { t } = useTranslation();
    return (
        <>
            <section className="policy-hero">
                <div className="policy-hero__inner">
                    <span className="eyebrow eyebrow--yellow">{t("site.legalEyebrow")}</span>
                    <h1>{title}</h1>
                    {subtitle && <p>{subtitle}</p>}
                    {meta && <span className="policy-hero__meta">{meta}</span>}
                </div>
            </section>
            <nav className="policy-tabs" aria-label={t("site.legalEyebrow")}>
                <div className="policy-tabs__inner">
                    {TABS.map((tab) => (
                        <NavLink key={tab.key} to={tab.to} className={({ isActive }) => `policy-tab${isActive ? " is-active" : ""}`}>
                            {t(`header.${tab.key}`)}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default PolicyHero;
