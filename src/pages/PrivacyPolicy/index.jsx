import React, { useState, useEffect } from "react";
import { Typography, Layout, Anchor } from "antd";
import { useTranslation } from "react-i18next";
import {
  SafetyOutlined,
  LockOutlined,
  UserOutlined,
  FileTextOutlined,
  GlobalOutlined,
  KeyOutlined,
  SecurityScanOutlined,
  InfoCircleOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "./index.scss";

const { Title, Paragraph, Text } = Typography;
const { Sider, Content } = Layout;
const { Link } = Anchor;

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    { id: "intro", title: t("privacyPolicy.nav.intro"), icon: <FileTextOutlined /> },
    {
      id: "data-collection",
      title: t("privacyPolicy.nav.dataCollection"),
      icon: <UserOutlined />,
    },
    {
      id: "data-scope",
      title: t("privacyPolicy.nav.dataScope"),
      icon: <GlobalOutlined />,
    },
    {
      id: "data-sharing",
      title: t("privacyPolicy.nav.dataSharing"),
      icon: <SecurityScanOutlined />,
    },
    {
      id: "security",
      title: t("privacyPolicy.nav.security"),
      icon: <LockOutlined />,
    },
    { id: "rights", title: t("privacyPolicy.nav.rights"), icon: <KeyOutlined /> },
    {
      id: "cookies",
      title: t("privacyPolicy.nav.cookies"),
      icon: <InfoCircleOutlined />,
    },
    {
      id: "children",
      title: t("privacyPolicy.nav.children"),
      icon: <SafetyOutlined />,
    },
    {
      id: "third-party",
      title: t("privacyPolicy.nav.thirdParty"),
      icon: <GlobalOutlined />,
    },
    { id: "changes", title: t("privacyPolicy.nav.changes"), icon: <FileTextOutlined /> },
    { id: "contact", title: t("privacyPolicy.nav.contact"), icon: <MailOutlined /> },
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
    <Layout className="privacy-policy-layout">
      <div className="policy-header">
        <div className="header-content">
          <div className="header-left">
            <SafetyOutlined className="header-icon" />
            <div>
              <Title level={1} className="header-title">
                {t("privacyPolicy.title")}
              </Title>
              <Text className="header-subtitle">
                {t("privacyPolicy.subtitle")}
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
            {/* Giới thiệu */}
            <section id="intro" className="policy-section">
              <div className="section-header">
                <FileTextOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("privacyPolicy.content.intro.title")}
                </Title>
              </div>
              <Paragraph>
                {t("privacyPolicy.content.intro.p1")}
              </Paragraph>
              <Paragraph>
                {t("privacyPolicy.content.intro.p2")}
              </Paragraph>
              <Paragraph>
                {t("privacyPolicy.content.intro.p3")}
              </Paragraph>
              <Paragraph>
                {t("privacyPolicy.content.intro.p4")}
              </Paragraph>
            </section>

            {/* Khi nào Garage Việt thu thập dữ liệu cá nhân */}
            <section id="data-collection" className="policy-section">
              <div className="section-header">
                <UserOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("privacyPolicy.content.dataCollection.title")}
                </Title>
              </div>
              <Paragraph>
                {t("privacyPolicy.content.dataCollection.intro")}
              </Paragraph>
              <Paragraph>
                <ul>
                  {t("privacyPolicy.content.dataCollection.items", { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Paragraph>
            </section>

            {/* Phạm vi và mục đích thu thập thông tin */}
            <section id="data-scope" className="policy-section">
              <div className="section-header">
                <GlobalOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("privacyPolicy.content.dataScope.title")}
                </Title>
              </div>

              <Title level={4}>{t("privacyPolicy.content.dataScope.scopeTitle")}</Title>
              <Paragraph>
                <strong>{t("privacyPolicy.content.dataScope.forCustomer")}</strong>
              </Paragraph>
              <Paragraph>
                {t("privacyPolicy.content.dataScope.customerInfo")}
              </Paragraph>

              <Paragraph>
                <strong>{t("privacyPolicy.content.dataScope.forGarage")}</strong>
              </Paragraph>
              <Paragraph>
                {t("privacyPolicy.content.dataScope.garageInfo")}
              </Paragraph>

              <Paragraph>
                <strong>{t("privacyPolicy.content.dataScope.technicalInfo")}</strong>
              </Paragraph>
              <Paragraph>
                {t("privacyPolicy.content.dataScope.technicalDetails")}
              </Paragraph>

              <Title level={4}>{t("privacyPolicy.content.dataScope.purposeTitle")}</Title>
              <Paragraph>
                {t("privacyPolicy.content.dataScope.purposeIntro")}
              </Paragraph>
              <Paragraph>
                <ul>
                  {t("privacyPolicy.content.dataScope.purposeItems", { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Paragraph>
            </section>

            {/* Đối tượng được tiếp cận thông tin */}
            <section id="data-sharing" className="policy-section">
              <div className="section-header">
                <SecurityScanOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("privacyPolicy.content.dataSharing.title")}
                </Title>
              </div>
              <Paragraph>
                {t("privacyPolicy.content.dataSharing.intro")}
              </Paragraph>
              <Paragraph>
                <ul>
                  {t("privacyPolicy.content.dataSharing.items", { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Paragraph>
            </section>

            {/* Bảo mật và lưu trữ thông tin */}
            <section id="security" className="policy-section">
              <div className="section-header">
                <LockOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("privacyPolicy.content.security.title")}
                </Title>
              </div>
              <Paragraph>
                {t("privacyPolicy.content.security.p1")}
              </Paragraph>
              <Paragraph>
                {t("privacyPolicy.content.security.p2")}
              </Paragraph>
              <Paragraph>
                <strong>{t("privacyPolicy.content.security.storageTime")}</strong> {t("privacyPolicy.content.security.p3")}
              </Paragraph>
              <Paragraph>
                {t("privacyPolicy.content.security.p4")}
              </Paragraph>
            </section>

            {/* Quyền của người dùng */}
            <section id="rights" className="policy-section">
              <div className="section-header">
                <KeyOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("privacyPolicy.content.rights.title")}
                </Title>
              </div>
              <Paragraph>{t("privacyPolicy.content.rights.intro")}</Paragraph>
              <Paragraph>
                <ul>
                  {t("privacyPolicy.content.rights.items", { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Paragraph>
            </section>

            {/* Cookie và dữ liệu định vị */}
            <section id="cookies" className="policy-section">
              <div className="section-header">
                <InfoCircleOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("privacyPolicy.content.cookies.title")}
                </Title>
              </div>
              <Paragraph>
                {t("privacyPolicy.content.cookies.intro")}
              </Paragraph>
              <Paragraph>
                <ul>
                  {t("privacyPolicy.content.cookies.items", { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Paragraph>
              <Paragraph>
                {t("privacyPolicy.content.cookies.p")}
              </Paragraph>
            </section>

            {/* Bảo vệ thông tin trẻ em */}
            <section id="children" className="policy-section">
              <div className="section-header">
                <SafetyOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("privacyPolicy.content.children.title")}
                </Title>
              </div>
              <Paragraph>
                {t("privacyPolicy.content.children.p1")}
              </Paragraph>
              <Paragraph>
                {t("privacyPolicy.content.children.p2")}
              </Paragraph>
            </section>

            {/* Liên kết với bên thứ ba */}
            <section id="third-party" className="policy-section">
              <div className="section-header">
                <GlobalOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("privacyPolicy.content.thirdParty.title")}
                </Title>
              </div>
              <Paragraph>
                {t("privacyPolicy.content.thirdParty.p1")}
              </Paragraph>
              <Paragraph>
                {t("privacyPolicy.content.thirdParty.p2")}
              </Paragraph>
            </section>

            {/* Cập nhật Chính sách */}
            <section id="changes" className="policy-section">
              <div className="section-header">
                <FileTextOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("privacyPolicy.content.changes.title")}
                </Title>
              </div>
              <Paragraph>
                {t("privacyPolicy.content.changes.p1")}
              </Paragraph>
              <Paragraph>
                {t("privacyPolicy.content.changes.p2")}
              </Paragraph>
            </section>

            {/* Thông tin liên hệ */}
            <section id="contact" className="policy-section">
              <div className="section-header">
                <MailOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("privacyPolicy.content.contact.title")}
                </Title>
              </div>
              <Paragraph>
                <strong>{t("privacyPolicy.content.contact.company")}</strong>
              </Paragraph>
              <Paragraph>
                <strong>{t("privacyPolicy.content.contact.taxCode")}</strong> {t("privacyPolicy.content.contact.taxValue")}
              </Paragraph>
              <Paragraph>
                <ul>
                  <li>
                    <strong>{t("privacyPolicy.content.contact.address")}</strong> {t("privacyPolicy.content.contact.addressValue")}
                  </li>
                  <li>
                    <strong>{t("privacyPolicy.content.contact.email")}</strong> {t("privacyPolicy.content.contact.emailValue")}
                  </li>
                  <li>
                    <strong>{t("privacyPolicy.content.contact.phone")}</strong> {t("privacyPolicy.content.contact.phoneValue")}
                  </li>
                </ul>
              </Paragraph>
            </section>

            <div className="policy-footer-section">
              <Text type="secondary" className="footer-text">
                {t("footer.copyright", { year: 2025 })}
              </Text>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PrivacyPolicy;
