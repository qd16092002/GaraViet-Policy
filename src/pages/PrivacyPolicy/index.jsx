import React, { useState, useEffect } from "react";
import { Typography, Layout, Anchor } from "antd";
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

const sections = [
  { id: "intro", title: "Giới thiệu", icon: <FileTextOutlined /> },
  {
    id: "data-collection",
    title: "Thu thập dữ liệu",
    icon: <UserOutlined />,
  },
  {
    id: "data-scope",
    title: "Phạm vi thu thập",
    icon: <GlobalOutlined />,
  },
  {
    id: "data-sharing",
    title: "Tiếp cận thông tin",
    icon: <SecurityScanOutlined />,
  },
  {
    id: "security",
    title: "Bảo mật & Lưu trữ",
    icon: <LockOutlined />,
  },
  { id: "rights", title: "Quyền người dùng", icon: <KeyOutlined /> },
  {
    id: "cookies",
    title: "Cookie & Định vị",
    icon: <InfoCircleOutlined />,
  },
  {
    id: "children",
    title: "Bảo vệ trẻ em",
    icon: <SafetyOutlined />,
  },
  {
    id: "third-party",
    title: "Bên thứ ba",
    icon: <GlobalOutlined />,
  },
  { id: "changes", title: "Cập nhật", icon: <FileTextOutlined /> },
  { id: "contact", title: "Liên hệ", icon: <MailOutlined /> },
];

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("intro");

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
  }, []);

  return (
    <Layout className="privacy-policy-layout">
      <div className="policy-header">
        <div className="header-content">
          <div className="header-left">
            <SafetyOutlined className="header-icon" />
            <div>
              <Title level={1} className="header-title">
                Chính sách bảo mật
              </Title>
              <Text className="header-subtitle">
                Bảo vệ dữ liệu cá nhân của người dùng
              </Text>
            </div>
          </div>
          <div className="header-meta">
            <Text type="secondary" className="last-updated-header">
              Cập nhật lần cuối: {new Date().toLocaleDateString("vi-VN")}
            </Text>
          </div>
        </div>
      </div>

      <Layout className="policy-body">
        <Sider width={280} className="policy-sidebar">
          <div className="sidebar-content">
            <Text strong className="sidebar-title">
              Nội dung
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
                      className={`nav-item ${
                        activeSection === section.id ? "active" : ""
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
                  1. Giới thiệu
                </Title>
              </div>
              <Paragraph>
                Chào mừng bạn đến với Garage Việt – nền tảng kết nối giữa chủ xe
                và garage sửa chữa/nâng cấp ô tô trên toàn quốc, được vận hành
                bởi Công ty TNHH Nền tảng Công nghệ Garage Việt.
              </Paragraph>
              <Paragraph>
                Garage Việt hiểu rằng bảo vệ dữ liệu cá nhân là trách nhiệm quan
                trọng và cam kết tuân thủ quy định của Nghị định 13/2023/NĐ-CP
                và các văn bản pháp luật liên quan về bảo vệ dữ liệu cá nhân.
              </Paragraph>
              <Paragraph>
                Chính sách bảo mật này (“Chính sách”) được thiết lập để giúp bạn
                hiểu rõ cách Garage Việt thu thập, sử dụng, lưu trữ, chia sẻ và
                bảo vệ thông tin cá nhân khi bạn sử dụng ứng dụng và website
                Garage Việt, cũng như quyền của bạn liên quan đến các thông tin
                này.
              </Paragraph>
              <Paragraph>
                Bằng việc truy cập, đăng ký hoặc sử dụng dịch vụ của Garage
                Việt, bạn xác nhận rằng bạn đồng ý với các điều khoản được quy
                định trong Chính sách này. Nếu bạn không đồng ý, vui lòng ngừng
                sử dụng nền tảng hoặc liên hệ với chúng tôi để rút lại sự đồng
                ý.
              </Paragraph>
            </section>

            {/* Khi nào Garage Việt thu thập dữ liệu cá nhân */}
            <section id="data-collection" className="policy-section">
              <div className="section-header">
                <UserOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  2. Khi nào Garage Việt thu thập dữ liệu cá nhân
                </Title>
              </div>
              <Paragraph>
                Chúng tôi có thể thu thập dữ liệu cá nhân của bạn trong các
                trường hợp sau:
              </Paragraph>
              <Paragraph>
                <ul>
                  <li>
                    Khi bạn đăng ký tài khoản hoặc sử dụng dịch vụ của Garage
                    Việt;
                  </li>
                  <li>
                    Khi bạn điền các biểu mẫu hoặc gửi thông tin liên hệ, yêu
                    cầu hỗ trợ;
                  </li>
                  <li>
                    Khi bạn thực hiện các giao dịch (đăng yêu cầu, báo giá,
                    thanh toán, v.v.);
                  </li>
                  <li>
                    Khi bạn tương tác với bộ phận hỗ trợ khách hàng của chúng
                    tôi;
                  </li>
                  <li>
                    Khi bạn kết nối tài khoản Garage Việt với mạng xã hội
                    (Facebook, Google,…);
                  </li>
                  <li>
                    Khi bạn phản hồi khảo sát, gửi đánh giá hoặc khiếu nại;
                  </li>
                  <li>
                    Khi bạn truy cập ứng dụng/website của chúng tôi (thông qua
                    cookies hoặc các công nghệ khác).
                  </li>
                </ul>
              </Paragraph>
            </section>

            {/* Phạm vi và mục đích thu thập thông tin */}
            <section id="data-scope" className="policy-section">
              <div className="section-header">
                <GlobalOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  3. Phạm vi và mục đích thu thập thông tin
                </Title>
              </div>

              <Title level={4}>3.1. Phạm vi thu thập</Title>
              <Paragraph>
                <strong>Đối với Chủ xe (Khách hàng):</strong>
              </Paragraph>
              <Paragraph>
                Họ tên, số điện thoại, email, địa chỉ, biển số xe, loại xe, hình
                ảnh xe, thông tin thanh toán, lịch sử giao dịch, và các thông
                tin cần thiết khác để cung cấp dịch vụ.
              </Paragraph>

              <Paragraph>
                <strong>Đối với Garage (Đối tác):</strong>
              </Paragraph>
              <Paragraph>
                Tên chủ garage, số điện thoại, email, giấy phép kinh doanh (nếu
                có), số tài khoản ngân hàng, địa chỉ cơ sở, hình ảnh, dịch vụ
                cung cấp, thông tin về kỹ thuật viên và lịch sử giao dịch.
              </Paragraph>

              <Paragraph>
                <strong>Thông tin kỹ thuật:</strong>
              </Paragraph>
              <Paragraph>
                Địa chỉ IP, thiết bị sử dụng, hệ điều hành, lịch sử truy cập, vị
                trí địa lý (GPS), cookie, và các dữ liệu liên quan đến hoạt động
                sử dụng ứng dụng.
              </Paragraph>

              <Title level={4}>3.2. Mục đích sử dụng thông tin</Title>
              <Paragraph>
                Garage Việt thu thập và sử dụng dữ liệu cá nhân cho các mục đích
                sau:
              </Paragraph>
              <Paragraph>
                <ul>
                  <li>
                    Xác minh danh tính người dùng, đảm bảo an toàn cho các giao
                    dịch;
                  </li>
                  <li>Kết nối và hỗ trợ trao đổi giữa Chủ xe và Garage;</li>
                  <li>
                    Xử lý yêu cầu báo giá, đặt lịch, thanh toán và đánh giá dịch
                    vụ;
                  </li>
                  <li>
                    Gửi thông báo, khuyến mãi, cập nhật hoặc thay đổi chính
                    sách;
                  </li>
                  <li>
                    Hỗ trợ kỹ thuật, giải quyết khiếu nại, phản hồi người dùng;
                  </li>
                  <li>Nâng cao trải nghiệm người dùng và cải thiện dịch vụ;</li>
                  <li>
                    Tuân thủ nghĩa vụ pháp lý và các yêu cầu của cơ quan Nhà
                    nước có thẩm quyền.
                  </li>
                </ul>
              </Paragraph>
            </section>

            {/* Đối tượng được tiếp cận thông tin */}
            <section id="data-sharing" className="policy-section">
              <div className="section-header">
                <SecurityScanOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  4. Đối tượng được tiếp cận thông tin
                </Title>
              </div>
              <Paragraph>
                Garage Việt cam kết không chia sẻ dữ liệu cá nhân của người dùng
                cho bên thứ ba vì mục đích thương mại mà không có sự đồng ý của
                bạn, ngoại trừ các trường hợp sau:
              </Paragraph>
              <Paragraph>
                <ul>
                  <li>
                    Theo yêu cầu của pháp luật hoặc cơ quan Nhà nước có thẩm
                    quyền;
                  </li>
                  <li>
                    Các bộ phận nội bộ của Garage Việt được ủy quyền (kỹ thuật,
                    chăm sóc khách hàng, vận hành,…);
                  </li>
                  <li>
                    Đối tác hỗ trợ kỹ thuật, thanh toán, xác thực danh tính nhằm
                    phục vụ việc cung cấp dịch vụ;
                  </li>
                  <li>
                    Khi người dùng đồng ý chia sẻ thông tin để thực hiện giao
                    dịch hoặc dịch vụ liên quan.
                  </li>
                </ul>
              </Paragraph>
            </section>

            {/* Bảo mật và lưu trữ thông tin */}
            <section id="security" className="policy-section">
              <div className="section-header">
                <LockOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  5. Bảo mật và lưu trữ thông tin
                </Title>
              </div>
              <Paragraph>
                Dữ liệu cá nhân của bạn được lưu trữ trên hệ thống máy chủ bảo
                mật của Garage Việt và các nhà cung cấp dịch vụ điện toán đám
                mây uy tín.
              </Paragraph>
              <Paragraph>
                Chúng tôi áp dụng biện pháp kỹ thuật, mã hóa, tường lửa và kiểm
                soát truy cập nội bộ nghiêm ngặt để bảo vệ thông tin khỏi mất
                mát, truy cập trái phép hoặc lạm dụng.
              </Paragraph>
              <Paragraph>
                <strong>Thời gian lưu trữ:</strong> Dữ liệu cá nhân được lưu trữ
                cho đến khi người dùng yêu cầu xóa hoặc Garage Việt chấm dứt
                cung cấp dịch vụ.
              </Paragraph>
              <Paragraph>
                Trong trường hợp hệ thống bị tấn công dẫn đến mất dữ liệu,
                Garage Việt sẽ thông báo cho cơ quan chức năng và người dùng
                trong vòng 72 giờ kể từ khi phát hiện.
              </Paragraph>
            </section>

            {/* Quyền của người dùng */}
            <section id="rights" className="policy-section">
              <div className="section-header">
                <KeyOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  6. Quyền của người dùng
                </Title>
              </div>
              <Paragraph>Người dùng có quyền:</Paragraph>
              <Paragraph>
                <ul>
                  <li>
                    Truy cập, chỉnh sửa, cập nhật hoặc xóa thông tin cá nhân của
                    mình;
                  </li>
                  <li>Rút lại sự đồng ý cho việc xử lý dữ liệu cá nhân;</li>
                  <li>
                    Gửi yêu cầu hoặc khiếu nại về việc lộ thông tin cá nhân qua
                    email: contact@garageviet.vn;
                  </li>
                  <li>
                    Đề nghị Garage Việt ngừng xử lý hoặc chia sẻ dữ liệu cá nhân
                    trong các trường hợp nhất định.
                  </li>
                </ul>
              </Paragraph>
            </section>

            {/* Cookie và dữ liệu định vị */}
            <section id="cookies" className="policy-section">
              <div className="section-header">
                <InfoCircleOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  7. Cookie và dữ liệu định vị
                </Title>
              </div>
              <Paragraph>
                Garage Việt có thể sử dụng cookie, mã định danh thiết bị, hoặc
                dữ liệu GPS để:
              </Paragraph>
              <Paragraph>
                <ul>
                  <li>
                    Ghi nhớ lựa chọn của người dùng và tối ưu hóa trải nghiệm;
                  </li>
                  <li>
                    Gợi ý garage gần nhất hoặc khuyến nghị dịch vụ phù hợp;
                  </li>
                  <li>Phân tích hành vi người dùng nhằm cải thiện hệ thống.</li>
                </ul>
              </Paragraph>
              <Paragraph>
                Người dùng có thể tắt cookie hoặc chia sẻ vị trí trong phần cài
                đặt của thiết bị. Tuy nhiên, việc này có thể làm giảm chất lượng
                trải nghiệm dịch vụ.
              </Paragraph>
            </section>

            {/* Bảo vệ thông tin trẻ em */}
            <section id="children" className="policy-section">
              <div className="section-header">
                <SafetyOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  8. Bảo vệ thông tin trẻ em
                </Title>
              </div>
              <Paragraph>
                Garage Việt không hướng đến người dùng dưới 18 tuổi.
              </Paragraph>
              <Paragraph>
                Nếu phát hiện người dùng dưới 18 tuổi cung cấp dữ liệu cá nhân,
                chúng tôi sẽ khóa tài khoản và xóa dữ liệu liên quan.
              </Paragraph>
            </section>

            {/* Liên kết với bên thứ ba */}
            <section id="third-party" className="policy-section">
              <div className="section-header">
                <GlobalOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  9. Liên kết với bên thứ ba
                </Title>
              </div>
              <Paragraph>
                Garage Việt có thể chứa liên kết đến website hoặc dịch vụ bên
                thứ ba. Chúng tôi không chịu trách nhiệm về nội dung, chính sách
                bảo mật hoặc bảo đảm an toàn dữ liệu trên các nền tảng đó.
              </Paragraph>
              <Paragraph>
                Người dùng nên xem xét chính sách riêng tư của bên thứ ba trước
                khi cung cấp bất kỳ thông tin nào.
              </Paragraph>
            </section>

            {/* Cập nhật Chính sách */}
            <section id="changes" className="policy-section">
              <div className="section-header">
                <FileTextOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  10. Cập nhật Chính sách
                </Title>
              </div>
              <Paragraph>
                Garage Việt có thể cập nhật Chính sách này theo từng thời kỳ để
                phù hợp với thay đổi của pháp luật hoặc hoạt động của nền tảng.
              </Paragraph>
              <Paragraph>
                Bất kỳ thay đổi nào sẽ được thông báo trên website hoặc ứng dụng
                Garage Việt. Việc tiếp tục sử dụng dịch vụ sau khi có thay đổi
                đồng nghĩa với việc bạn chấp nhận chính sách sửa đổi.
              </Paragraph>
            </section>

            {/* Thông tin liên hệ */}
            <section id="contact" className="policy-section">
              <div className="section-header">
                <MailOutlined className="section-icon" />
                <Title level={2} className="section-title">
                  11. Thông tin liên hệ
                </Title>
              </div>
              <Paragraph>
                <strong>Công ty TNHH Nền tảng Công nghệ Garage Việt</strong>
              </Paragraph>
              <Paragraph>
                <strong>Mã số doanh nghiệp:</strong> 3002300759
              </Paragraph>
              <Paragraph>
                <ul>
                  <li>
                    <strong>Địa chỉ:</strong> Ngã Ba Kỳ Đồng, Xã Kỳ Anh, Tỉnh Hà
                    Tĩnh, Việt Nam
                  </li>
                  <li>
                    <strong>Email:</strong> support@garageviet.vn
                  </li>
                  <li>
                    <strong>Điện thoại:</strong> 0586 028 881
                  </li>
                </ul>
              </Paragraph>
            </section>

            <div className="policy-footer-section">
              <Text type="secondary" className="footer-text">
                © {new Date().getFullYear()} Garage Việt. Tất cả quyền được bảo
                lưu.
              </Text>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PrivacyPolicy;
