import React, { useEffect, useState } from "react";
import { Layout, Anchor, Typography } from "antd";
import { useTranslation } from "react-i18next";
import {
  UserDeleteOutlined,
  MobileOutlined,
  InfoCircleOutlined,
  MailOutlined,
  ClockCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import "./index.scss";

const { Title, Paragraph, Text } = Typography;
const { Sider, Content } = Layout;
const { Link } = Anchor;

const AccountDeletionPage = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    { id: "intro", title: t("accountDeletion.nav.intro"), icon: <UserDeleteOutlined /> },
    { id: "in-app", title: t("accountDeletion.nav.inApp"), icon: <MobileOutlined /> },
    { id: "effects", title: t("accountDeletion.nav.effects"), icon: <InfoCircleOutlined /> },
    { id: "email", title: t("accountDeletion.nav.email"), icon: <MailOutlined /> },
    { id: "timeline", title: t("accountDeletion.nav.timeline"), icon: <ClockCircleOutlined /> },
    { id: "faq", title: t("accountDeletion.nav.faq"), icon: <QuestionCircleOutlined /> },
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

  const steps = t("accountDeletion.content.inApp.steps", { returnObjects: true });
  const effectItems = t("accountDeletion.content.effects.items", { returnObjects: true });
  const emailFields = t("accountDeletion.content.email.fields", { returnObjects: true });
  const timelineItems = t("accountDeletion.content.timeline.items", { returnObjects: true });
  const faqItems = t("accountDeletion.content.faq.items", { returnObjects: true });

  return (
    <Layout className="privacy-policy-layout account-deletion-layout">
      <div className="policy-header">
        <div className="header-content">
          <div className="header-left">
            <UserDeleteOutlined className="header-icon" />
            <div>
              <Title level={1} className="header-title">
                {t("accountDeletion.title")}
              </Title>
              <Text className="header-subtitle">
                {t("accountDeletion.subtitle")}
              </Text>
            </div>
          </div>
          <div className="header-meta">
            <Text type="secondary" className="last-updated-header">
              {t("updateTime", { date: "13/11/2025" })}
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
              getContainer={() => document.getElementById("policy-main-content") || window}
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
                    <div className={`nav-item ${activeSection === section.id ? "active" : ""}`}>
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
            <section id="intro" className="policy-section">
              <div className="section-header">
                <UserDeleteOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("accountDeletion.content.intro.title")}
                </Title>
              </div>
              <Paragraph>{t("accountDeletion.content.intro.p1")}</Paragraph>
              <Paragraph>{t("accountDeletion.content.intro.p2")}</Paragraph>
            </section>

            <section id="in-app" className="policy-section">
              <div className="section-header">
                <MobileOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("accountDeletion.content.inApp.title")}
                </Title>
              </div>
              <Paragraph>{t("accountDeletion.content.inApp.intro")}</Paragraph>
              <Paragraph>
                <ul>
                  {steps.map((step, index) => (
                    <li key={index}>
                      <strong>
                        {t("common.step")} {index + 1}:
                      </strong>{" "}
                      {step}
                    </li>
                  ))}
                </ul>
              </Paragraph>
              <Paragraph>
                <Text strong>{t("accountDeletion.content.inApp.noteTitle")}</Text>{" "}
                {t("accountDeletion.content.inApp.note")}
              </Paragraph>
            </section>

            <section id="effects" className="policy-section">
              <div className="section-header">
                <InfoCircleOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("accountDeletion.content.effects.title")}
                </Title>
              </div>
              <Paragraph>{t("accountDeletion.content.effects.intro")}</Paragraph>
              <Paragraph>
                <ul>
                  {effectItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Paragraph>
            </section>

            <section id="email" className="policy-section">
              <div className="section-header">
                <MailOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("accountDeletion.content.email.title")}
                </Title>
              </div>
              <Paragraph>{t("accountDeletion.content.email.intro")}</Paragraph>
              <Paragraph>
                <strong>{t("accountDeletion.content.email.emailLabel")}</strong>{" "}
                <Text code>{t("accountDeletion.content.email.email")}</Text>
              </Paragraph>
              <Paragraph>
                <strong>{t("accountDeletion.content.email.subjectLabel")}</strong>{" "}
                {t("accountDeletion.content.email.subject")}
              </Paragraph>
              <Paragraph>
                <strong>{t("accountDeletion.content.email.fieldsTitle")}</strong>
                <ul>
                  {emailFields.map((field, index) => (
                    <li key={index}>{field}</li>
                  ))}
                </ul>
              </Paragraph>
            </section>

            <section id="timeline" className="policy-section">
              <div className="section-header">
                <ClockCircleOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("accountDeletion.content.timeline.title")}
                </Title>
              </div>
              <Paragraph>
                <ul>
                  {timelineItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Paragraph>
            </section>

            <section id="faq" className="policy-section">
              <div className="section-header">
                <QuestionCircleOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("accountDeletion.content.faq.title")}
                </Title>
              </div>
              {faqItems.map((faq, index) => (
                <Paragraph key={index}>
                  <strong>{faq.question}</strong>
                  <br />
                  {faq.answer}
                </Paragraph>
              ))}
              <Paragraph>{t("accountDeletion.content.faq.contactNote")}</Paragraph>
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

export default AccountDeletionPage;

