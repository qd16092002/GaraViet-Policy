import React from "react";
import { Typography } from "antd";
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
import PolicyHero from "../../components/policy/PolicyHero";
import PolicyToc from "../../components/policy/PolicyToc";

const { Title, Paragraph } = Typography;

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  const sections = [
    { id: "intro", title: t("privacyPolicy.nav.intro"), icon: <FileTextOutlined /> },
    {
      id: "scope-and-definitions",
      title: t("privacyPolicy.nav.scopeAndDefinitions"),
      icon: <InfoCircleOutlined />,
    },
    {
      id: "data-collection",
      title: t("privacyPolicy.nav.dataCollection"),
      icon: <UserOutlined />,
    },
    {
      id: "data-types",
      title: t("privacyPolicy.nav.dataTypes"),
      icon: <GlobalOutlined />,
    },
    {
      id: "purpose-and-legal",
      title: t("privacyPolicy.nav.purposeAndLegal"),
      icon: <FileTextOutlined />,
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


  return (
    <div className="policy-page">
      <PolicyHero
        title={t("privacyPolicy.title")}
        subtitle={t("privacyPolicy.subtitle")}
        meta={t("updateTime", { date: "13/11/2025" })}
      />

      <div className="policy-body">
        <PolicyToc sections={sections} />

        <main id="policy-main-content" className="policy-content">
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

            {/* Phạm vi áp dụng và định nghĩa */}
            <section id="scope-and-definitions" className="policy-section">
              <div className="section-header">
                <InfoCircleOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("privacyPolicy.content.scopeAndDefinitions.title")}
                </Title>
              </div>
              <Paragraph>
                <strong>{t("privacyPolicy.content.scopeAndDefinitions.scopeTitle")}</strong> {t("privacyPolicy.content.scopeAndDefinitions.scope")}
              </Paragraph>
              <Paragraph>
                <strong>{t("privacyPolicy.content.scopeAndDefinitions.definitionTitle")}</strong> {t("privacyPolicy.content.scopeAndDefinitions.definition")}
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

            {/* Loại thông tin chúng tôi thu thập */}
            <section id="data-types" className="policy-section">
              <div className="section-header">
                <GlobalOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("privacyPolicy.content.dataTypes.title")}
                </Title>
              </div>

              <Title level={4}>{t("privacyPolicy.content.dataTypes.forCustomerTitle")}</Title>
              <Paragraph>
                {t("privacyPolicy.content.dataTypes.forCustomer")}
              </Paragraph>
              <Paragraph>
                {t("privacyPolicy.content.dataTypes.customerInfo")}
              </Paragraph>
              <Paragraph>
                {t("privacyPolicy.content.dataTypes.customerPayment")}
              </Paragraph>
              <Paragraph>
                {t("privacyPolicy.content.dataTypes.customerLocation")}
              </Paragraph>

              <Title level={4}>{t("privacyPolicy.content.dataTypes.forGarageTitle")}</Title>
              <Paragraph>
                {t("privacyPolicy.content.dataTypes.forGarage")}
              </Paragraph>
              <Paragraph>
                {t("privacyPolicy.content.dataTypes.garageInfo")}
              </Paragraph>
              <Paragraph>
                {t("privacyPolicy.content.dataTypes.garagePayment")}
              </Paragraph>

              <Title level={4}>{t("privacyPolicy.content.dataTypes.technicalTitle")}</Title>
              <Paragraph>
                {t("privacyPolicy.content.dataTypes.technicalInfo")}
              </Paragraph>
            </section>

            {/* Mục đích và cơ sở pháp lý của việc xử lý dữ liệu */}
            <section id="purpose-and-legal" className="policy-section">
              <div className="section-header">
                <FileTextOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("privacyPolicy.content.purposeAndLegal.title")}
                </Title>
              </div>
              <Paragraph>
                {t("privacyPolicy.content.purposeAndLegal.intro")}
              </Paragraph>
              <Paragraph>
                <ul>
                  {t("privacyPolicy.content.purposeAndLegal.purposeItems", { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Paragraph>
              <Title level={4}>{t("privacyPolicy.content.purposeAndLegal.legalBasisTitle")}</Title>
              <Paragraph>
                <ul>
                  {t("privacyPolicy.content.purposeAndLegal.legalBasisItems", { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Paragraph>
            </section>

            {/* Chia sẻ thông tin với bên thứ ba */}
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
                {t("privacyPolicy.content.dataSharing.intro2")}
              </Paragraph>
              <Paragraph>
                <ul>
                  {t("privacyPolicy.content.dataSharing.items", { returnObjects: true }).map((item, index, items) => {
                    // Nếu item là "Với đối tác cung cấp dịch vụ như:", hiển thị với danh sách con
                    if (item === "Với đối tác cung cấp dịch vụ như:") {
                      return (
                        <li key={index}>
                          {item}
                          <ul>
                            {items.slice(index + 1, index + 4).map((subItem, subIndex) => (
                              <li key={`${index}-${subIndex}`}>{subItem}</li>
                            ))}
                          </ul>
                        </li>
                      );
                    }
                    // Bỏ qua 3 items sau "Với đối tác cung cấp dịch vụ như:" vì đã hiển thị trong danh sách con
                    if (index > 0 && items[index - 1] === "Với đối tác cung cấp dịch vụ như:") {
                      return null;
                    }
                    if (index > 1 && items[index - 2] === "Với đối tác cung cấp dịch vụ như:") {
                      return null;
                    }
                    if (index > 2 && items[index - 3] === "Với đối tác cung cấp dịch vụ như:") {
                      return null;
                    }
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </Paragraph>
              <Paragraph>
                {t("privacyPolicy.content.dataSharing.p")}
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
              <Paragraph>
                {t("privacyPolicy.content.rights.howToTitle")}
                <ul>
                  <li>{t("privacyPolicy.content.rights.howTo1")}</li>
                  <li>{t("privacyPolicy.content.rights.howTo2")}</li>
                </ul>
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
              <Paragraph>
                {t("privacyPolicy.content.thirdParty.p3")}
              </Paragraph>
            </section>

            {/* Chuyển dữ liệu ra nước ngoài (nếu có) */}
            <section id="data-transfer" className="policy-section">
              <div className="section-header">
                <GlobalOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  {t("privacyPolicy.content.dataTransfer.title")}
                </Title>
              </div>
              <Paragraph>
                {t("privacyPolicy.content.dataTransfer.intro")}
              </Paragraph>
              <Paragraph>
                <ul>
                  {t("privacyPolicy.content.dataTransfer.items", { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
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
              <Paragraph>
                {t("privacyPolicy.content.changes.p3")}
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
