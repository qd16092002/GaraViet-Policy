import React from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, Space } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const items = [
        {
            key: "vi",
            label: (
                <span>
                    <span style={{ marginRight: 8 }}>VI</span>
                    Tiếng Việt
                </span>
            ),
            onClick: () => i18n.changeLanguage("vi"),
        },
        {
            key: "en",
            label: (
                <span>
                    <span style={{ marginRight: 8 }}>EN</span>
                    English
                </span>
            ),
            onClick: () => i18n.changeLanguage("en"),
        },
    ];

    return (
        <Dropdown
            menu={{ items }}
            placement="bottomRight"
            trigger={["click"]}
        >
            <Space
                style={{
                    cursor: "pointer",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f5f5f5";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                }}
            >
                <GlobalOutlined style={{ fontSize: 18 }} />
            </Space>
        </Dropdown>
    );
};

export default LanguageSwitcher;

