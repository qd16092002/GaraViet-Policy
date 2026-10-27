import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/garageviet-logo.webp";
import { StoreButtons } from "./StoreButton";
import { COMPANY } from "./constants";
import { useSiteT } from "./useSiteT";

const SiteFooter = ({ lockVietnamese = false }) => {
    const t = useSiteT(lockVietnamese);
    const cols = [
        {
            title: t("site.footer.product"),
            links: [
                { label: t("site.nav.buy"), href: "/#mua-lap" },
                { label: t("site.nav.quote"), href: "/#bao-gia" },
                { label: t("site.footer.film"), href: "/#phim" },
                { label: t("site.nav.garage"), href: "/#garage" },
            ],
        },
        {
            title: t("site.footer.policy"),
            links: [
                { label: t("header.privacyPolicy"), to: "/garageviet-privacy-policy" },
                { label: t("header.operationPolicy"), to: "/garageviet-operation-policy" },
                { label: t("header.accountDeletion"), to: "/account-deletion" },
                { label: t("header.imageCredits"), to: "/nguon-anh" },
            ],
        },
        {
            title: t("site.footer.support"),
            wide: true,
            links: [
                { label: `${t("site.hotline")} · Zalo ${COMPANY.phone}`, href: COMPANY.phoneHref },
                { label: COMPANY.email, href: `mailto:${COMPANY.email}` },
            ],
        },
    ];
    return (
        <footer className="site-footer">
            <div className="site-footer__inner">
                <div className="site-footer__top">
                    <div className="site-footer__brand">
                        <img src={logo} alt="Garage Việt" width="186" height="30" />
                        <p>{t("site.footer.tagline")}</p>
                        <StoreButtons small />
                    </div>
                    <div className="site-footer__cols">
                        {cols.map((c) => (
                            <div key={c.title} className={`site-footer__col${c.wide ? " site-footer__col--wide" : ""}`}>
                                <span className="site-footer__col-title">{c.title}</span>
                                {c.links.map((l) =>
                                    l.to ? (
                                        <Link key={l.label} to={l.to}>
                                            {l.label}
                                        </Link>
                                    ) : (
                                        <a key={l.label} href={l.href}>
                                            {l.label}
                                        </a>
                                    )
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="site-footer__legal">
                    <span>
                        {COMPANY.name} · {t("site.footer.taxCode")} {COMPANY.taxCode} · {COMPANY.address}
                    </span>
                    <span>© {new Date().getFullYear()} Garage Việt</span>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
