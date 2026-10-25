import React from "react";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import {
  UserDeleteOutlined,
  MobileOutlined,
  InfoCircleOutlined,
  MailOutlined,
  ClockCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import PolicyHero from "../../components/policy/PolicyHero";
import PolicyToc from "../../components/policy/PolicyToc";

const { Title, Paragraph, Text } = Typography;

const AccountDeletionPage = () => {
  const { t } = useTranslation();

  const sections = [
    { id: "intro", title: t("accountDeletion.nav.intro"), icon: <UserDeleteOutlined /> },
    { id: "in-app", title: t("accountDeletion.nav.inApp"), icon: <MobileOutlined /> },
    { id: "effects", title: t("accountDeletion.nav.effects"), icon: <InfoCircleOutlined /> },
    { id: "email", title: t("accountDeletion.nav.email"), icon: <MailOutlined /> },
    { id: "timeline", title: t("accountDeletion.nav.timeline"), icon: <ClockCircleOutlined /> },
    { id: "faq", title: t("accountDeletion.nav.faq"), icon: <QuestionCircleOutlined /> },
  ];


  const steps = t("accountDeletion.content.inApp.steps", { returnObjects: true });
  const effectItems = t("accountDeletion.content.effects.items", { returnObjects: true });
  const emailFields = t("accountDeletion.content.email.fields", { returnObjects: true });
  const timelineItems = t("accountDeletion.content.timeline.items", { returnObjects: true });
  const faqItems = t("accountDeletion.content.faq.items", { returnObjects: true });

  return (
    <div className="policy-page">
      <PolicyHero
        title={t("accountDeletion.title")}
        subtitle={t("accountDeletion.subtitle")}
        meta={t("updateTime", { date: "13/11/2025" })}
      />

      <div className="policy-body">
        <PolicyToc sections={sections} />

        <main id="policy-main-content" className="policy-content">
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default AccountDeletionPage;

