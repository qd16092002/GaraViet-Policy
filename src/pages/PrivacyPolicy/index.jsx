import React from "react";
import { Typography, Card, Divider, Layout } from "antd";
import {
  ShieldOutlined,
  LockOutlined,
  UserOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import "./index.scss";

const { Title, Paragraph, Text } = Typography;
const { Header, Content, Footer } = Layout;

const PrivacyPolicy = () => {
  return (
    <Layout className="privacy-policy-layout">
      <Header className="policy-header">
        <div className="header-content">
          <ShieldOutlined className="header-icon" />
          <Title level={2} className="header-title">
            Chính sách quyền riêng tư và bảo mật
          </Title>
        </div>
      </Header>

      <Content className="policy-content">
        <div className="policy-container">
          <Card className="policy-card">
            {/* Giới thiệu */}
            <div className="policy-section">
              <Title level={3}>
                <FileTextOutlined /> 1. Giới thiệu
              </Title>
              <Paragraph>
                Chào mừng bạn đến với Garaviet. Chúng tôi cam kết bảo vệ quyền
                riêng tư và thông tin cá nhân của bạn. Chính sách quyền riêng tư
                này mô tả cách chúng tôi thu thập, sử dụng, chia sẻ và bảo vệ
                thông tin của bạn khi bạn sử dụng dịch vụ của chúng tôi.
              </Paragraph>
              <Paragraph>
                Bằng việc sử dụng dịch vụ của Garaviet, bạn đồng ý với các điều
                khoản và thực hành được mô tả trong chính sách này. Nếu bạn
                không đồng ý với chính sách này, vui lòng không sử dụng dịch vụ
                của chúng tôi.
              </Paragraph>
            </div>

            <Divider />

            {/* Thông tin thu thập */}
            <div className="policy-section">
              <Title level={3}>
                <UserOutlined /> 2. Thông tin chúng tôi thu thập
              </Title>
              <Paragraph>
                Chúng tôi có thể thu thập các loại thông tin sau đây:
              </Paragraph>
              <Title level={4}>2.1. Thông tin cá nhân</Title>
              <Paragraph>
                <ul>
                  <li>Họ và tên</li>
                  <li>Số điện thoại</li>
                  <li>Địa chỉ email</li>
                  <li>Địa chỉ</li>
                  <li>Thông tin thanh toán</li>
                  <li>Thông tin định danh khác mà bạn cung cấp</li>
                </ul>
              </Paragraph>
              <Title level={4}>2.2. Thông tin sử dụng dịch vụ</Title>
              <Paragraph>
                <ul>
                  <li>Lịch sử giao dịch</li>
                  <li>Hoạt động trên ứng dụng</li>
                  <li>
                    Thông tin thiết bị (IP address, loại trình duyệt, hệ điều
                    hành)
                  </li>
                  <li>Thông tin vị trí (nếu được phép)</li>
                </ul>
              </Paragraph>
            </div>

            <Divider />

            {/* Mục đích sử dụng */}
            <div className="policy-section">
              <Title level={3}>3. Mục đích sử dụng thông tin</Title>
              <Paragraph>
                Chúng tôi sử dụng thông tin thu thập được cho các mục đích sau:
              </Paragraph>
              <Paragraph>
                <ul>
                  <li>Cung cấp, duy trì và cải thiện dịch vụ của chúng tôi</li>
                  <li>Xử lý các giao dịch và yêu cầu của bạn</li>
                  <li>Gửi thông báo và cập nhật về dịch vụ</li>
                  <li>Hỗ trợ khách hàng và phản hồi các câu hỏi của bạn</li>
                  <li>
                    Phát hiện và ngăn chặn các hoạt động gian lận, lạm dụng và
                    vi phạm pháp luật
                  </li>
                  <li>Phân tích và cải thiện trải nghiệm người dùng</li>
                  <li>Tuân thủ các nghĩa vụ pháp lý</li>
                </ul>
              </Paragraph>
            </div>

            <Divider />

            {/* Chia sẻ thông tin */}
            <div className="policy-section">
              <Title level={3}>4. Chia sẻ thông tin</Title>
              <Paragraph>
                Chúng tôi có thể chia sẻ thông tin của bạn trong các trường hợp
                sau:
              </Paragraph>
              <Paragraph>
                <ul>
                  <li>
                    <strong>Nhà cung cấp dịch vụ:</strong> Với các bên thứ ba
                    cung cấp dịch vụ cho chúng tôi (như hosting, thanh toán,
                    phân tích)
                  </li>
                  <li>
                    <strong>Yêu cầu pháp lý:</strong> Khi được yêu cầu bởi pháp
                    luật hoặc cơ quan có thẩm quyền
                  </li>
                  <li>
                    <strong>Bảo vệ quyền lợi:</strong> Để bảo vệ quyền, tài sản
                    hoặc an toàn của Garaviet, người dùng hoặc công chúng
                  </li>
                  <li>
                    <strong>Chuyển giao kinh doanh:</strong> Trong trường hợp
                    sáp nhập, mua lại hoặc chuyển giao tài sản
                  </li>
                  <li>
                    <strong>Với sự đồng ý của bạn:</strong> Trong các trường hợp
                    khác khi bạn đồng ý
                  </li>
                </ul>
              </Paragraph>
            </div>

            <Divider />

            {/* Bảo mật */}
            <div className="policy-section">
              <Title level={3}>
                <LockOutlined /> 5. Bảo mật thông tin
              </Title>
              <Paragraph>
                Chúng tôi áp dụng các biện pháp bảo mật kỹ thuật và quản lý phù
                hợp để bảo vệ thông tin của bạn khỏi truy cập, sử dụng, tiết lộ
                trái phép hoặc mất mát. Tuy nhiên, không có phương thức truyền
                tải qua internet hoặc lưu trữ điện tử nào là 100% an toàn.
              </Paragraph>
              <Paragraph>
                Các biện pháp bảo mật của chúng tôi bao gồm:
              </Paragraph>
              <Paragraph>
                <ul>
                  <li>Mã hóa dữ liệu trong quá trình truyền (SSL/TLS)</li>
                  <li>Bảo vệ dữ liệu được lưu trữ bằng các biện pháp mã hóa</li>
                  <li>Kiểm soát truy cập nghiêm ngặt</li>
                  <li>Giám sát và kiểm tra bảo mật thường xuyên</li>
                  <li>Đào tạo nhân viên về bảo mật dữ liệu</li>
                </ul>
              </Paragraph>
            </div>

            <Divider />

            {/* Quyền của người dùng */}
            <div className="policy-section">
              <Title level={3}>6. Quyền của bạn</Title>
              <Paragraph>
                Bạn có các quyền sau đối với thông tin cá nhân của mình:
              </Paragraph>
              <Paragraph>
                <ul>
                  <li>
                    <strong>Truy cập:</strong> Yêu cầu truy cập thông tin cá
                    nhân mà chúng tôi lưu trữ về bạn
                  </li>
                  <li>
                    <strong>Sửa đổi:</strong> Yêu cầu chỉnh sửa thông tin không
                    chính xác
                  </li>
                  <li>
                    <strong>Xóa:</strong> Yêu cầu xóa thông tin cá nhân của bạn
                  </li>
                  <li>
                    <strong>Rút lại đồng ý:</strong> Rút lại sự đồng ý đã cung
                    cấp trước đó
                  </li>
                  <li>
                    <strong>Phản đối:</strong> Phản đối việc xử lý thông tin cá
                    nhân của bạn trong một số trường hợp
                  </li>
                  <li>
                    <strong>Yêu cầu ngừng xử lý:</strong> Yêu cầu chúng tôi
                    ngừng xử lý thông tin cá nhân của bạn
                  </li>
                </ul>
              </Paragraph>
              <Paragraph>
                Để thực hiện các quyền này, vui lòng liên hệ với chúng tôi qua
                thông tin liên hệ được cung cấp ở cuối chính sách này.
              </Paragraph>
            </div>

            <Divider />

            {/* Cookie */}
            <div className="policy-section">
              <Title level={3}>7. Cookie và công nghệ theo dõi</Title>
              <Paragraph>
                Chúng tôi sử dụng cookie và các công nghệ tương tự để thu thập
                thông tin về cách bạn sử dụng dịch vụ của chúng tôi. Cookie là
                các file nhỏ được lưu trên thiết bị của bạn.
              </Paragraph>
              <Paragraph>Chúng tôi sử dụng cookie cho các mục đích:</Paragraph>
              <Paragraph>
                <ul>
                  <li>Đảm bảo dịch vụ hoạt động đúng cách</li>
                  <li>Nhớ tùy chọn và cài đặt của bạn</li>
                  <li>Phân tích cách sử dụng dịch vụ</li>
                  <li>Cải thiện trải nghiệm người dùng</li>
                </ul>
              </Paragraph>
              <Paragraph>
                Bạn có thể kiểm soát cookie thông qua cài đặt trình duyệt của
                mình. Tuy nhiên, việc vô hiệu hóa cookie có thể ảnh hưởng đến
                chức năng của dịch vụ.
              </Paragraph>
            </div>

            <Divider />

            {/* Thay đổi chính sách */}
            <div className="policy-section">
              <Title level={3}>8. Thay đổi chính sách</Title>
              <Paragraph>
                Chúng tôi có thể cập nhật chính sách quyền riêng tư này theo
                thời gian. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi
                quan trọng nào bằng cách đăng chính sách mới trên trang này và
                cập nhật ngày "Cập nhật lần cuối" ở cuối chính sách.
              </Paragraph>
              <Paragraph>
                Bạn nên xem xét chính sách này định kỳ để cập nhật về cách chúng
                tôi bảo vệ thông tin của bạn.
              </Paragraph>
            </div>

            <Divider />

            {/* Liên hệ */}
            <div className="policy-section">
              <Title level={3}>9. Liên hệ với chúng tôi</Title>
              <Paragraph>
                Nếu bạn có bất kỳ câu hỏi hoặc lo ngại nào về chính sách quyền
                riêng tư này hoặc cách chúng tôi xử lý thông tin cá nhân của
                bạn, vui lòng liên hệ với chúng tôi:
              </Paragraph>
              <Paragraph>
                <ul>
                  <li>
                    <strong>Email:</strong> privacy@garaviet.com
                  </li>
                  <li>
                    <strong>Địa chỉ:</strong> [Địa chỉ của Garaviet]
                  </li>
                  <li>
                    <strong>Điện thoại:</strong> [Số điện thoại liên hệ]
                  </li>
                </ul>
              </Paragraph>
            </div>

            <Divider />

            <div className="policy-section">
              <Paragraph className="last-updated">
                <Text type="secondary">
                  <strong>Cập nhật lần cuối:</strong>{" "}
                  {new Date().toLocaleDateString("vi-VN")}
                </Text>
              </Paragraph>
            </div>
          </Card>
        </div>
      </Content>

      <Footer className="policy-footer">
        <Text type="secondary">
          © {new Date().getFullYear()} Garaviet. Tất cả quyền được bảo lưu.
        </Text>
      </Footer>
    </Layout>
  );
};

export default PrivacyPolicy;
