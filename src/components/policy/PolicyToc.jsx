import React, { useEffect, useState } from "react";
import { Anchor } from "antd";
import { useTranslation } from "react-i18next";
import Icon from "../site/Icon";

// Mục lục: cột dính bên trái trên desktop, nút thu gọn trên mobile.
const PolicyToc = ({ sections }) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(sections[0].id);
    const ids = sections.map((s) => s.id).join(",");

    // Đánh dấu mục đang đọc: mục cuối cùng có đầu đã cuộn qua mốc 200px.
    useEffect(() => {
        const list = ids.split(",");
        const onScroll = () => {
            const y = window.scrollY + 200;
            const current = [...list].reverse().find((id) => {
                const el = document.getElementById(id);
                return el && el.getBoundingClientRect().top + window.scrollY <= y;
            });
            setActiveSection(current || list[0]);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [ids]);
    return (
        <aside className={`policy-sidebar${open ? " is-open" : ""}`}>
            <button type="button" className="policy-sidebar__toggle" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
                <span>
                    {t("common.tableOfContents")} · {sections.length}
                </span>
                <Icon name="chevron-down" size={18} />
            </button>
            <span className="sidebar-title">{t("common.tableOfContents")}</span>
            <Anchor
                affix={false}
                className="sidebar-anchor"
                targetOffset={110}
                onClick={() => setOpen(false)}
                items={sections.map((s) => ({
                    key: s.id,
                    href: `#${s.id}`,
                    title: (
                        <span className={`nav-item${activeSection === s.id ? " active" : ""}`}>
                            <span className="nav-icon">{s.icon}</span>
                            <span>{s.title}</span>
                        </span>
                    ),
                }))}
            />
        </aside>
    );
};

export default PolicyToc;
