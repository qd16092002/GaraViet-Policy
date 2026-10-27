import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/garageviet-logo.webp";
import Icon from "./Icon";
import LanguageSwitcher from "../LanguageSwitcher";
import { COMPANY, NAV } from "./constants";
import { useSiteT } from "./useSiteT";

// dark: header nằm đè lên hero tối của trang chủ, chuyển sang nền đặc khi cuộn.
const SiteHeader = ({ dark = false, showLanguage = false }) => {
    const t = useSiteT(!showLanguage);
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => setOpen(false), [location]);

    const cls = ["site-header", dark ? "site-header--dark" : "", scrolled ? "is-scrolled" : "", open ? "is-open" : ""].join(" ");
    return (
        <header className={cls}>
            <div className="site-header__bar">
                <Link to="/" className="site-header__logo" aria-label="Garage Việt">
                    <img src={logo} alt="Garage Việt" width="161" height="26" />
                </Link>
                <nav className="site-header__nav" aria-label={t("site.nav.label")}>
                    {NAV.map((n) => (
                        <a key={n.key} href={n.href}>
                            {t(`site.nav.${n.key}`)}
                        </a>
                    ))}
                </nav>
                <div className="site-header__actions">
                    <a className="site-header__phone" href={COMPANY.phoneHref}>
                        <Icon name="call" size={18} />
                        {COMPANY.phone}
                    </a>
                    {showLanguage && (
                        <span className="site-header__lang">
                            <LanguageSwitcher />
                        </span>
                    )}
                    <a className="btn btn--primary btn--sm" href="/#tai-app">
                        {t("site.download")}
                    </a>
                    <button
                        type="button"
                        className="site-header__burger"
                        aria-label={t("site.nav.menu")}
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        <Icon name={open ? "close" : "menu"} size={24} />
                    </button>
                </div>
            </div>
            {open && (
                <nav className="site-header__sheet" aria-label={t("site.nav.label")}>
                    {NAV.map((n) => (
                        <a key={n.key} href={n.href} onClick={() => setOpen(false)}>
                            {t(`site.nav.${n.key}`)}
                            <Icon name="chevron-right" size={18} />
                        </a>
                    ))}
                    <a href={COMPANY.phoneHref}>
                        {t("site.hotline")} {COMPANY.phone}
                        <Icon name="call" size={18} />
                    </a>
                </nav>
            )}
        </header>
    );
};

export default SiteHeader;
