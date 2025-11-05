import React, { useState, useEffect } from "react";
import { Typography, Layout, Anchor } from "antd";
import { useTranslation } from "react-i18next";
import {
    FileTextOutlined,
    TeamOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    DollarOutlined,
    UserOutlined,
    InfoCircleOutlined,
    MailOutlined,
    CloseCircleOutlined,
    CheckCircleOutlined,
    WarningOutlined,
} from "@ant-design/icons";
import "./index.scss";

const { Title, Paragraph, Text } = Typography;
const { Sider, Content } = Layout;
const { Link } = Anchor;

const OperationPolicy = () => {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState("intro");

    const sections = [
        { id: "intro", title: t("operationPolicy.nav.intro"), icon: <FileTextOutlined /> },
        {
            id: "quy_dinh_chung",
            title: t("operationPolicy.nav.quy_dinh_chung"),
            icon: <InfoCircleOutlined />,
        },
        {
            id: "transaction",
            title: t("operationPolicy.nav.transaction"),
            icon: <ShoppingCartOutlined />,
        },
        {
            id: "security",
            title: t("operationPolicy.nav.security"),
            icon: <CheckCircleOutlined />,
        },
        {
            id: "privacy",
            title: t("operationPolicy.nav.privacy"),
            icon: <UserOutlined />,
        },
        {
            id: "revenue",
            title: t("operationPolicy.nav.revenue"),
            icon: <DollarOutlined />,
        },
        {
            id: "content-management",
            title: t("operationPolicy.nav.contentManagement"),
            icon: <WarningOutlined />,
        },
        {
            id: "technical",
            title: t("operationPolicy.nav.technical"),
            icon: <CloseCircleOutlined />,
        },
        {
            id: "admin-rights",
            title: t("operationPolicy.nav.adminRights"),
            icon: <TeamOutlined />,
        },
        {
            id: "garage-rights",
            title: t("operationPolicy.nav.garageRights"),
            icon: <ShopOutlined />,
        },
        {
            id: "customer-rights",
            title: t("operationPolicy.nav.customerRights"),
            icon: <UserOutlined />,
        },
        {
            id: "terms",
            title: t("operationPolicy.nav.terms"),
            icon: <FileTextOutlined />,
        },
        {
            id: "commitment",
            title: t("operationPolicy.nav.commitment"),
            icon: <CheckCircleOutlined />,
        },
        { id: "contact", title: t("operationPolicy.nav.contact"), icon: <MailOutlined /> },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i].id);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    return (
        <Layout className="operation-policy-layout">
            <div className="policy-header">
                <div className="header-content">
                    <div className="header-left">
                        <FileTextOutlined className="header-icon" />
                        <div>
                            <Title level={1} className="header-title">
                                {t("operationPolicy.title")}
                            </Title>
                            <Text className="header-subtitle">
                                {t("operationPolicy.subtitle")}
                            </Text>
                        </div>
                    </div>
                    <div className="header-meta">
                        <Text type="secondary" className="last-updated-header">
                            {t("updateTime", { date: "1/11/2025" })}
                        </Text>
                    </div>
                </div>
            </div>

            <Layout className="policy-body">
                <Sider width={280} className="policy-sidebar">
                    <div className="sidebar-content">
                        <Text strong className="sidebar-title">
                            {t("common.tableOfContents")}
                        </Text>
                        <Anchor
                            getContainer={() =>
                                document.getElementById("policy-main-content") || window
                            }
                            showInkInFixed
                            className="sidebar-anchor"
                            offsetTop={100}
                            targetOffset={100}
                        >
                            {sections.map((section) => (
                                <Link
                                    key={section.id}
                                    href={`#${section.id}`}
                                    title={
                                        <div
                                            className={`nav-item ${activeSection === section.id ? "active" : ""
                                                }`}
                                        >
                                            <span className="nav-icon">{section.icon}</span>
                                            <span>{section.title}</span>
                                        </div>
                                    }
                                />
                            ))}
                        </Anchor>
                    </div>
                </Sider>

                <Content id="policy-main-content" className="policy-content">
                    <div className="content-wrapper">
                        {/* I. Nguyên tắc chung */}
                        <section id="intro" className="policy-section">
                            <div className="section-header">
                                <FileTextOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    {t("operationPolicy.content.intro.title")}
                                </Title>
                            </div>
                            <Paragraph>
                                {t("operationPolicy.content.intro.p1")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.intro.p2")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.intro.p3")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.intro.p4")}
                            </Paragraph>
                            <Paragraph>
                                <strong>
                                    {t("operationPolicy.content.intro.p5")}
                                </strong>
                            </Paragraph>
                            <Paragraph>
                                <strong>
                                    {t("operationPolicy.content.intro.p6")}
                                </strong>
                            </Paragraph>
                            <Paragraph>
                                <strong>
                                    {t("operationPolicy.content.intro.p7")}
                                </strong>
                            </Paragraph>
                        </section>

                        {/* II. Quy định chung */}
                        <section id="quy_dinh_chung" className="policy-section">
                            <div className="section-header">
                                <InfoCircleOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    {t("operationPolicy.content.definitions.title")}
                                </Title>
                            </div>

                            <Title level={4}>{t("operationPolicy.content.definitions.defTitle")}</Title>
                            <Paragraph>
                                <strong>{t("operationPolicy.content.definitions.platformLabel")}</strong> {t("operationPolicy.content.definitions.platform")}
                            </Paragraph>

                            <Paragraph>
                                <strong>{t("operationPolicy.content.definitions.garageLabel")}</strong> {t("operationPolicy.content.definitions.garage")}
                            </Paragraph>

                            <Paragraph>
                                <strong>{t("operationPolicy.content.definitions.customerLabel")}</strong> {t("operationPolicy.content.definitions.customer")}
                            </Paragraph>

                            <Paragraph>
                                <strong>{t("operationPolicy.content.definitions.memberLabel")}</strong> {t("operationPolicy.content.definitions.member")}
                            </Paragraph>

                            <Paragraph>
                                <strong>{t("operationPolicy.content.definitions.productLabel")}</strong> {t("operationPolicy.content.definitions.product")}
                            </Paragraph>

                            <Paragraph>
                                <strong>{t("operationPolicy.content.definitions.crmLabel")}</strong> {t("operationPolicy.content.definitions.crm")}
                            </Paragraph>

                            <Paragraph>
                                <strong>{t("operationPolicy.content.definitions.quoteLabel")}</strong> {t("operationPolicy.content.definitions.quote")}
                            </Paragraph>

                            <Paragraph>
                                <strong>{t("operationPolicy.content.definitions.revenueLabel")}</strong> {t("operationPolicy.content.definitions.revenue")}
                            </Paragraph>
                        </section>

                        {/* Hướng dẫn sử dụng chung */}
                        <Title level={4}>{t("operationPolicy.content.usage.title")}</Title>
                        <Paragraph>
                            {t("operationPolicy.content.usage.p1")}
                        </Paragraph>
                        <Paragraph>
                            {t("operationPolicy.content.usage.p2")}
                        </Paragraph>
                        <Paragraph>
                            {t("operationPolicy.content.usage.p3")}
                        </Paragraph>
                        <Paragraph>
                            {t("operationPolicy.content.usage.p4")}
                        </Paragraph>
                        <Paragraph>
                            {t("operationPolicy.content.usage.p5")}
                        </Paragraph>
                        <Paragraph>
                            {t("operationPolicy.content.usage.p6")}
                        </Paragraph>

                        {/* Thương hiệu và bản quyền */}
                        <Title level={4}>{t("operationPolicy.content.brand.title")}</Title>
                        <Paragraph>
                            {t("operationPolicy.content.brand.p1")}
                        </Paragraph>
                        <Paragraph>
                            {t("operationPolicy.content.brand.p2")}
                        </Paragraph>

                        {/* III. Quy trình giao dịch */}
                        <section id="transaction" className="policy-section">
                            <div className="section-header">
                                <ShoppingCartOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    {t("operationPolicy.content.transaction.title")}
                                </Title>
                            </div>

                            <Title level={4}>{t("operationPolicy.content.transaction.customerTitle")}</Title>
                            <Paragraph>
                                <strong>{t("common.step")} 1:</strong> {t("operationPolicy.content.transaction.customerStep1")}
                            </Paragraph>
                            <Paragraph>
                                <strong>{t("common.step")} 2:</strong> {t("operationPolicy.content.transaction.customerStep2")}
                            </Paragraph>
                            <Paragraph>
                                <strong>{t("common.step")} 3:</strong> {t("operationPolicy.content.transaction.customerStep3")}
                            </Paragraph>
                            <Paragraph>
                                <strong>{t("common.step")} 4:</strong> {t("operationPolicy.content.transaction.customerStep4")}
                            </Paragraph>
                            <Paragraph>
                                <strong>{t("common.step")} 5:</strong> {t("operationPolicy.content.transaction.customerStep5")}
                            </Paragraph>
                            <Paragraph>
                                <strong>{t("common.step")} 6:</strong> {t("operationPolicy.content.transaction.customerStep6")}
                            </Paragraph>
                            <Paragraph>
                                <strong>{t("common.step")} 7:</strong> {t("operationPolicy.content.transaction.customerStep7")}
                            </Paragraph>

                            <Title level={4}>{t("operationPolicy.content.transaction.garageTitle")}</Title>
                            <Paragraph>
                                <strong>{t("common.step")} 1:</strong> {t("operationPolicy.content.transaction.garageStep1")}
                            </Paragraph>
                            <Paragraph>
                                <strong>{t("common.step")} 2:</strong> {t("operationPolicy.content.transaction.garageStep2")}
                            </Paragraph>
                            <Paragraph>
                                <strong>{t("common.step")} 3:</strong> {t("operationPolicy.content.transaction.garageStep3")}
                            </Paragraph>
                            <Paragraph>
                                <strong>{t("common.step")} 4:</strong> {t("operationPolicy.content.transaction.garageStep4")}
                            </Paragraph>
                            <Paragraph>
                                <strong>{t("common.step")} 5:</strong> {t("operationPolicy.content.transaction.garageStep5")}
                            </Paragraph>
                            <Paragraph>
                                <strong>{t("common.step")} 6:</strong> {t("operationPolicy.content.transaction.garageStep6")}
                            </Paragraph>

                            <Title level={4}>{t("operationPolicy.content.transaction.cancelTitle")}</Title>
                            <Paragraph>
                                {t("operationPolicy.content.transaction.cancelP1")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.transaction.cancelP2")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.transaction.cancelP3")}
                            </Paragraph>

                            <Title level={4}>{t("operationPolicy.content.transaction.complaintTitle")}</Title>
                            <Paragraph>
                                {t("operationPolicy.content.transaction.complaintP1")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.transaction.complaintP2")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.transaction.complaintP3")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.transaction.complaintP4")}
                            </Paragraph>
                        </section>

                        {/* IV. Đảm bảo an toàn giao dịch */}
                        <section id="security" className="policy-section">
                            <div className="section-header">
                                <CheckCircleOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    {t("operationPolicy.content.security.title")}
                                </Title>
                            </div>
                            <Paragraph>
                                {t("operationPolicy.content.security.p1")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.security.p2")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.security.p3")}
                            </Paragraph>
                        </section>

                        {/* V. Bảo vệ thông tin cá nhân */}
                        <section id="privacy" className="policy-section">
                            <div className="section-header">
                                <UserOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    {t("operationPolicy.content.privacy.title")}
                                </Title>
                            </div>
                            <Paragraph>
                                {t("operationPolicy.content.privacy.intro")}
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    {t("operationPolicy.content.privacy.items", { returnObjects: true }).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.privacy.p1")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.privacy.p2")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.privacy.p3")}
                            </Paragraph>
                        </section>

                        {/* VI. Cơ chế chia sẻ doanh thu */}
                        <section id="revenue" className="policy-section">
                            <div className="section-header">
                                <DollarOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    {t("operationPolicy.content.revenue.title")}
                                </Title>
                            </div>

                            <Title level={4}>{t("operationPolicy.content.revenue.principleTitle")}</Title>
                            <Paragraph>
                                {t("operationPolicy.content.revenue.principleP1")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.revenue.principleP2")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.revenue.principleP3")}
                            </Paragraph>

                            <Title level={4}>{t("operationPolicy.content.revenue.scopeTitle")}</Title>
                            <Paragraph>
                                {t("operationPolicy.content.revenue.scopeP1")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.revenue.scopeP2")}
                            </Paragraph>

                            <Title level={4}>{t("operationPolicy.content.revenue.paymentTitle")}</Title>
                            <Paragraph>
                                {t("operationPolicy.content.revenue.paymentP1")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.revenue.paymentP2")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.revenue.paymentP3")}
                            </Paragraph>
                            <Paragraph>
                                <strong>{t("operationPolicy.content.revenue.paymentMethodsLabel")}</strong>
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    {t("operationPolicy.content.revenue.paymentMethods", { returnObjects: true }).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.revenue.paymentP4")}
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    {t("operationPolicy.content.revenue.penalties", { returnObjects: true }).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Paragraph>

                            <Title level={4}>{t("operationPolicy.content.revenue.cancelledTitle")}</Title>
                            <Paragraph>
                                {t("operationPolicy.content.revenue.cancelledP1")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.revenue.cancelledP2")}
                            </Paragraph>

                            <Title level={4}>{t("operationPolicy.content.revenue.invoiceTitle")}</Title>
                            <Paragraph>
                                {t("operationPolicy.content.revenue.invoiceP1")}
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    {t("operationPolicy.content.revenue.invoiceMethods", { returnObjects: true }).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.revenue.invoiceP2")}
                            </Paragraph>

                            <Title level={4}>{t("operationPolicy.content.revenue.incentivesTitle")}</Title>
                            <Paragraph>
                                {t("operationPolicy.content.revenue.incentivesP1")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.revenue.incentivesP2")}
                            </Paragraph>

                            <Title level={4}>{t("operationPolicy.content.revenue.complianceTitle")}</Title>
                            <Paragraph>
                                {t("operationPolicy.content.revenue.complianceP1")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.revenue.complianceP2")}
                            </Paragraph>
                        </section>

                        {/* VII. Quản lý thông tin xấu */}
                        <section id="content-management" className="policy-section">
                            <div className="section-header">
                                <WarningOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    {t("operationPolicy.content.contentManagement.title")}
                                </Title>
                            </div>

                            <Title level={4}>{t("operationPolicy.content.contentManagement.postingTitle")}</Title>
                            <Paragraph>
                                {t("operationPolicy.content.contentManagement.postingP1")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.contentManagement.postingP2")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.contentManagement.postingP3")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.contentManagement.postingP4")}
                            </Paragraph>

                            <Title level={4}>
                                {t("operationPolicy.content.contentManagement.prohibitedTitle")}
                            </Title>
                            <Paragraph>
                                <strong>{t("operationPolicy.content.contentManagement.prohibitedItemsLabel")}</strong>
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    {t("operationPolicy.content.contentManagement.prohibitedItems", { returnObjects: true }).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Paragraph>

                            <Paragraph>
                                <strong>{t("operationPolicy.content.contentManagement.conditionalItemsLabel")}</strong>
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    {t("operationPolicy.content.contentManagement.conditionalItems", { returnObjects: true }).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Paragraph>

                            <Title level={4}>{t("operationPolicy.content.contentManagement.bannedBehaviorsTitle")}</Title>
                            <Paragraph>
                                <ul>
                                    {t("operationPolicy.content.contentManagement.bannedBehaviors", { returnObjects: true }).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Paragraph>

                            <Title level={4}>{t("operationPolicy.content.contentManagement.moderationTitle")}</Title>
                            <Paragraph>
                                {t("operationPolicy.content.contentManagement.moderationP1")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.contentManagement.moderationP2")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.contentManagement.moderationP3")}
                            </Paragraph>
                        </section>

                        {/* VIII. Trách nhiệm trong trường hợp phát sinh lỗi kỹ thuật */}
                        <section id="technical" className="policy-section">
                            <div className="section-header">
                                <CloseCircleOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    {t("operationPolicy.content.technical.title")}
                                </Title>
                            </div>
                            <Paragraph>
                                {t("operationPolicy.content.technical.p1")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.technical.p2")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.technical.p3")}
                            </Paragraph>
                        </section>

                        {/* IX. Quyền và nghĩa vụ của Ban Quản lý Ứng dụng Garage Việt */}
                        <section id="admin-rights" className="policy-section">
                            <div className="section-header">
                                <TeamOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    {t("operationPolicy.content.adminRights.title")}
                                </Title>
                            </div>

                            <Title level={4}>{t("operationPolicy.content.adminRights.rightsTitle")}</Title>
                            <Paragraph>
                                <ul>
                                    {t("operationPolicy.content.adminRights.rights", { returnObjects: true }).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Paragraph>

                            <Title level={4}>{t("operationPolicy.content.adminRights.dutiesTitle")}</Title>
                            <Paragraph>
                                <ul>
                                    {t("operationPolicy.content.adminRights.duties", { returnObjects: true }).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Paragraph>
                        </section>

                        {/* X. Quyền và nghĩa vụ của Garage (người cung cấp dịch vụ) */}
                        <section id="garage-rights" className="policy-section">
                            <div className="section-header">
                                <ShopOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    {t("operationPolicy.content.garageRights.title")}
                                </Title>
                            </div>

                            <Title level={4}>{t("operationPolicy.content.garageRights.rightsTitle")}</Title>
                            <Paragraph>
                                <ul>
                                    {t("operationPolicy.content.garageRights.rights", { returnObjects: true }).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Paragraph>

                            <Title level={4}>{t("operationPolicy.content.garageRights.dutiesTitle")}</Title>
                            <Paragraph>
                                <ul>
                                    {t("operationPolicy.content.garageRights.duties", { returnObjects: true }).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Paragraph>
                        </section>

                        {/* XI. Quyền và nghĩa vụ của Chủ xe (người sử dụng dịch vụ) */}
                        <section id="customer-rights" className="policy-section">
                            <div className="section-header">
                                <UserOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    {t("operationPolicy.content.customerRights.title")}
                                </Title>
                            </div>

                            <Title level={4}>{t("operationPolicy.content.customerRights.rightsTitle")}</Title>
                            <Paragraph>
                                <ul>
                                    {t("operationPolicy.content.customerRights.rights", { returnObjects: true }).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Paragraph>

                            <Title level={4}>{t("operationPolicy.content.customerRights.dutiesTitle")}</Title>
                            <Paragraph>
                                <ul>
                                    {t("operationPolicy.content.customerRights.duties", { returnObjects: true }).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Paragraph>
                        </section>

                        {/* XII. Điều khoản áp dụng */}
                        <section id="terms" className="policy-section">
                            <div className="section-header">
                                <FileTextOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    {t("operationPolicy.content.terms.title")}
                                </Title>
                            </div>
                            <Paragraph>
                                {t("operationPolicy.content.terms.p1")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.terms.p2")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.terms.p3")}
                            </Paragraph>
                            <Paragraph>
                                {t("operationPolicy.content.terms.p4")}
                            </Paragraph>
                        </section>

                        {/* XIII. Điều khoản cam kết */}
                        <section id="commitment" className="policy-section">
                            <div className="section-header">
                                <CheckCircleOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    {t("operationPolicy.content.commitment.title")}
                                </Title>
                            </div>
                            <Paragraph>
                                {t("operationPolicy.content.commitment.intro")}
                            </Paragraph>
                            <Paragraph>
                                <strong>{t("operationPolicy.content.commitment.memberCommitmentLabel")}</strong>
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    {t("operationPolicy.content.commitment.memberCommitments", { returnObjects: true }).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Paragraph>
                            <Paragraph>
                                <strong>{t("operationPolicy.content.commitment.companyCommitmentLabel")}</strong>
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    {t("operationPolicy.content.commitment.companyCommitments", { returnObjects: true }).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Paragraph>
                        </section>

                        {/* Thông tin liên hệ */}
                        <section id="contact" className="policy-section">
                            <div className="section-header">
                                <MailOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    {t("operationPolicy.content.contact.title")}
                                </Title>
                            </div>
                            <Paragraph>
                                {t("operationPolicy.content.contact.intro")}
                            </Paragraph>
                            <Paragraph>
                                <strong>{t("operationPolicy.content.contact.departmentLabel")}</strong>
                            </Paragraph>
                            <Paragraph>
                                <strong>
                                    {t("operationPolicy.content.contact.company")}
                                </strong>
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    <li>
                                        <strong>{t("operationPolicy.content.contact.addressLabel")}</strong> {t("operationPolicy.content.contact.address")}
                                    </li>
                                    <li>
                                        <strong>{t("operationPolicy.content.contact.phoneLabel")}</strong> {t("operationPolicy.content.contact.phone")}
                                    </li>
                                    <li>
                                        <strong>{t("operationPolicy.content.contact.emailLabel")}</strong> {t("operationPolicy.content.contact.email")}
                                    </li>
                                </ul>
                            </Paragraph>
                        </section>

                        <div className="policy-footer-section">
                            <Text type="secondary" className="footer-text">
                                {t("footer.copyright", { year: new Date().getFullYear() })}
                            </Text>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default OperationPolicy;

