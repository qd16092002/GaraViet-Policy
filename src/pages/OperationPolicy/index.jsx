import React, { useState, useEffect } from "react";
import { Typography, Layout, Anchor } from "antd";
import {
    FileTextOutlined,
    TeamOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    DollarOutlined,
    SafetyOutlined,
    UserOutlined,
    InfoCircleOutlined,
    MailOutlined,
    CloseCircleOutlined,
    CheckCircleOutlined,
    WarningOutlined,
    GlobalOutlined,
} from "@ant-design/icons";
import "./index.scss";

const { Title, Paragraph, Text } = Typography;
const { Sider, Content } = Layout;
const { Link } = Anchor;

const sections = [
    { id: "intro", title: "Nguyên tắc chung", icon: <FileTextOutlined /> },
    {
        id: "definitions",
        title: "Định nghĩa",
        icon: <InfoCircleOutlined />,
    },
    {
        id: "usage",
        title: "Hướng dẫn sử dụng",
        icon: <GlobalOutlined />,
    },
    {
        id: "brand",
        title: "Thương hiệu",
        icon: <SafetyOutlined />,
    },
    {
        id: "transaction",
        title: "Quy trình giao dịch",
        icon: <ShoppingCartOutlined />,
    },
    {
        id: "security",
        title: "An toàn giao dịch",
        icon: <CheckCircleOutlined />,
    },
    {
        id: "privacy",
        title: "Bảo vệ thông tin",
        icon: <UserOutlined />,
    },
    {
        id: "revenue",
        title: "Chia sẻ doanh thu",
        icon: <DollarOutlined />,
    },
    {
        id: "content-management",
        title: "Quản lý thông tin",
        icon: <WarningOutlined />,
    },
    {
        id: "technical",
        title: "Lỗi kỹ thuật",
        icon: <CloseCircleOutlined />,
    },
    {
        id: "admin-rights",
        title: "Quyền Ban Quản lý",
        icon: <TeamOutlined />,
    },
    {
        id: "garage-rights",
        title: "Quyền Garage",
        icon: <ShopOutlined />,
    },
    {
        id: "customer-rights",
        title: "Quyền Khách hàng",
        icon: <UserOutlined />,
    },
    {
        id: "terms",
        title: "Điều khoản",
        icon: <FileTextOutlined />,
    },
    {
        id: "commitment",
        title: "Cam kết",
        icon: <CheckCircleOutlined />,
    },
    { id: "contact", title: "Liên hệ", icon: <MailOutlined /> },
];

const OperationPolicy = () => {
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
        <Layout className="operation-policy-layout">
            <div className="policy-header">
                <div className="header-content">
                    <div className="header-left">
                        <FileTextOutlined className="header-icon" />
                        <div>
                            <Title level={1} className="header-title">
                                Quy chế hoạt động
                            </Title>
                            <Text className="header-subtitle">
                                Sàn giao dịch thương mại điện tử Garage Việt
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
                                    I. Nguyên tắc chung
                                </Title>
                            </div>
                            <Paragraph>
                                Sàn giao dịch thương mại điện tử Garage Việt (sau đây gọi tắt là
                                "Sàn giao dịch") do Công ty TNHH Nền tảng Công nghệ Garage Việt
                                (sau đây gọi tắt là "Công ty") xây dựng và vận hành.
                            </Paragraph>
                            <Paragraph>
                                Thành viên trên Sàn giao dịch là các garage, thương nhân, tổ
                                chức, cá nhân có hoạt động thương mại hợp pháp được Ban Quản lý
                                Sàn giao dịch Garage Việt ("Ban Quản lý") công nhận và cho phép
                                sử dụng dịch vụ.
                            </Paragraph>
                            <Paragraph>
                                Nguyên tắc này áp dụng cho các Thành viên đăng ký sử dụng và tham
                                gia hoạt động đăng tải thông tin, báo giá, đặt dịch vụ sửa chữa
                                hoặc nâng cấp xe trên nền tảng Garage Việt.
                            </Paragraph>
                            <Paragraph>
                                Các bên tham gia giao dịch tại Sàn giao dịch được tự do thỏa
                                thuận trên cơ sở tôn trọng quyền và lợi ích hợp pháp của nhau,
                                không trái quy định của pháp luật Việt Nam.
                            </Paragraph>
                            <Paragraph>
                                <strong>
                                    Thông tin về Thành viên tham gia phải minh bạch, chính xác.
                                </strong>
                            </Paragraph>
                            <Paragraph>
                                <strong>
                                    Các dịch vụ, sản phẩm, linh kiện, phụ tùng được cung cấp qua
                                    Sàn giao dịch phải hợp pháp, rõ nguồn gốc, không thuộc danh
                                    mục cấm kinh doanh, cấm quảng cáo.
                                </strong>
                            </Paragraph>
                            <Paragraph>
                                <strong>
                                    Mọi nội dung trong Quy chế này đều tuân thủ theo pháp luật Việt
                                    Nam. Thành viên khi tham gia có trách nhiệm tìm hiểu và tuân
                                    thủ đầy đủ các quy định pháp lý hiện hành.
                                </strong>
                            </Paragraph>
                        </section>

                        {/* II. Quy định chung */}
                        <section id="definitions" className="policy-section">
                            <div className="section-header">
                                <InfoCircleOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    II. Quy định chung
                                </Title>
                            </div>

                            <Title level={4}>1. Định nghĩa</Title>
                            <Paragraph>
                                <strong>Nền tảng:</strong> là ứng dụng Garage Việt do Công ty TNHH
                                Nền tảng Công nghệ Garage Việt phát triển.
                            </Paragraph>

                            <Paragraph>
                                <strong>Garage/Đối tác (Người bán):</strong> là các thương nhân,
                                tổ chức, cá nhân có hoạt động hợp pháp trong lĩnh vực bảo dưỡng,
                                sửa chữa, nâng cấp xe ô tô, có nhu cầu giới thiệu dịch vụ, báo
                                giá, tiếp nhận khách hàng thông qua Sàn giao dịch.
                            </Paragraph>

                            <Paragraph>
                                <strong>Chủ xe/Khách hàng (Người mua):</strong> là cá nhân, tổ
                                chức sở hữu hoặc sử dụng xe ô tô có nhu cầu tìm kiếm, so sánh giá,
                                đặt dịch vụ sửa chữa/nâng cấp xe.
                            </Paragraph>

                            <Paragraph>
                                <strong>Thành viên:</strong> bao gồm cả Garage và Chủ xe đã đăng
                                ký tài khoản và được phê duyệt bởi Ban Quản lý.
                            </Paragraph>

                            <Paragraph>
                                <strong>Sản phẩm/Dịch vụ:</strong> bao gồm các dịch vụ bảo dưỡng,
                                sửa chữa, thay thế, độ xe, vệ sinh, chăm sóc xe, nâng cấp nội –
                                ngoại thất, linh kiện phụ tùng ô tô được đăng tải và giao dịch qua
                                nền tảng Garage Việt.
                            </Paragraph>

                            <Paragraph>
                                <strong>CRM Garage:</strong> hệ thống quản lý khách hàng, đơn hàng,
                                lịch hẹn và báo giá dành riêng cho garage thành viên.
                            </Paragraph>

                            <Paragraph>
                                <strong>Báo giá:</strong> là cơ chế để nhiều garage cùng đưa ra
                                mức giá thầu (tối đa 5 garage) cho một yêu cầu sửa chữa của khách
                                hàng.
                            </Paragraph>

                            <Paragraph>
                                <strong>Doanh thu chia sẻ:</strong> Công ty thu 10% phí giao dịch/doanh
                                thu trên mỗi đơn hàng hoàn tất thông qua Sàn giao dịch.
                            </Paragraph>
                        </section>

                        {/* Hướng dẫn sử dụng chung */}
                        <section id="usage" className="policy-section">
                            <div className="section-header">
                                <GlobalOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    2. Hướng dẫn sử dụng chung
                                </Title>
                            </div>
                            <Paragraph>
                                Mỗi Thành viên cần đăng ký tài khoản hợp lệ, cung cấp thông tin
                                chính xác và cập nhật kịp thời khi có thay đổi.
                            </Paragraph>
                            <Paragraph>
                                Thành viên chịu trách nhiệm hoàn toàn về bảo mật tài khoản và mọi
                                hoạt động phát sinh.
                            </Paragraph>
                            <Paragraph>
                                Thành viên không được ủy quyền hoặc chuyển nhượng tài khoản cho
                                người khác nếu không có sự đồng ý bằng văn bản của Công ty.
                            </Paragraph>
                            <Paragraph>
                                Việc sử dụng Sàn giao dịch chỉ được thực hiện vì mục đích hợp pháp,
                                không được lợi dụng để lừa đảo, phát tán thông tin sai lệch, quảng
                                cáo trái phép, gây rối hệ thống hoặc xâm phạm quyền của bên thứ ba.
                            </Paragraph>
                            <Paragraph>
                                Thành viên đồng ý nhận thông tin tiếp thị, thông báo hoạt động, hoặc
                                ưu đãi từ Garage Việt. Nếu muốn ngừng nhận, có thể gửi yêu cầu đến
                                support@garageviet.vn.
                            </Paragraph>
                            <Paragraph>
                                Công ty giữ quyền tạm khóa hoặc chấm dứt tài khoản nếu phát hiện
                                hành vi vi phạm quy chế, gian lận hoặc gây ảnh hưởng đến uy tín của
                                Sàn giao dịch.
                            </Paragraph>
                        </section>

                        {/* Thương hiệu và bản quyền */}
                        <section id="brand" className="policy-section">
                            <div className="section-header">
                                <SafetyOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    3. Thương hiệu và bản quyền
                                </Title>
                            </div>
                            <Paragraph>
                                Tất cả nội dung, thiết kế, phần mềm, hình ảnh, dữ liệu, mã nguồn,
                                logo, nhãn hiệu "Garage Việt" đều là tài sản sở hữu trí tuệ của
                                Công ty TNHH Nền tảng Công nghệ Garage Việt và được bảo vệ theo
                                Luật Sở hữu trí tuệ Việt Nam.
                            </Paragraph>
                            <Paragraph>
                                Mọi hành vi sao chép, phân phối, sửa đổi, khai thác trái phép đều
                                bị xử lý theo pháp luật.
                            </Paragraph>
                        </section>

                        {/* III. Quy trình giao dịch */}
                        <section id="transaction" className="policy-section">
                            <div className="section-header">
                                <ShoppingCartOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    III. Quy trình giao dịch
                                </Title>
                            </div>

                            <Title level={4}>1. Dành cho Khách hàng (Chủ xe)</Title>
                            <Paragraph>
                                <strong>Bước 1:</strong> Đăng nhập ứng dụng Garage Việt, chọn "Tạo
                                yêu cầu".
                            </Paragraph>
                            <Paragraph>
                                <strong>Bước 2:</strong> Nhập thông tin xe, mô tả vấn đề hoặc nhu
                                cầu, có thể kèm hình ảnh/video.
                            </Paragraph>
                            <Paragraph>
                                <strong>Bước 3:</strong> Hệ thống gửi yêu cầu đến các garage phù
                                hợp theo khu vực, loại dịch vụ.
                            </Paragraph>
                            <Paragraph>
                                <strong>Bước 4:</strong> Các garage gửi báo giá đấu thầu (bao gồm
                                giá, thời gian thực hiện, cam kết).
                            </Paragraph>
                            <Paragraph>
                                <strong>Bước 5:</strong> Khách hàng chọn garage mong muốn, có thể
                                lựa chọn đặt cọc trước qua app (3% giá trị đơn hàng) để hưởng một
                                số ưu đãi. Hoặc không đặt cọc.
                            </Paragraph>
                            <Paragraph>
                                <strong>Bước 6:</strong> Garage xác nhận, hoàn tất dịch vụ.
                            </Paragraph>
                            <Paragraph>
                                <strong>Bước 7:</strong> Khách hàng thanh toán phần còn lại trực
                                tiếp, sau đó đánh giá chất lượng dịch vụ.
                            </Paragraph>

                            <Title level={4}>2. Dành cho Garage (Đối tác)</Title>
                            <Paragraph>
                                <strong>Bước 1:</strong> Đăng ký tài khoản Garage trên app, cung
                                cấp giấy phép kinh doanh hoặc CMND/CCCD. Ký hợp đồng điện tử
                            </Paragraph>
                            <Paragraph>
                                <strong>Bước 2:</strong> Cập nhật hồ sơ garage: địa chỉ, hình ảnh
                                xưởng, danh mục dịch vụ, bảng giá cơ bản.
                            </Paragraph>
                            <Paragraph>
                                <strong>Bước 3:</strong> Nhận thông báo yêu cầu mới từ khách hàng,
                                tham gia báo giá.
                            </Paragraph>
                            <Paragraph>
                                <strong>Bước 4:</strong> Sau khi được chọn, xác nhận lịch hẹn và
                                thực hiện dịch vụ.
                            </Paragraph>
                            <Paragraph>
                                <strong>Bước 5:</strong> Hoàn tất dịch vụ và cập nhật kết quả trên
                                hệ thống.
                            </Paragraph>
                            <Paragraph>
                                <strong>Bước 6:</strong> Thanh toán phí nền tảng định kỳ
                            </Paragraph>

                            <Title level={4}>3. Hủy hoặc thay đổi dịch vụ</Title>
                            <Paragraph>
                                Khách hàng có thể hủy yêu cầu nếu garage chưa bắt đầu thực hiện,
                                và sẽ được hoàn lại tiền cọc sau tối đa 7 ngày làm việc.
                            </Paragraph>
                            <Paragraph>
                                Nếu hủy sau khi garage đã chuẩn bị hoặc mua linh kiện, phí huỷ là
                                50-100% tùy trường hợp.
                            </Paragraph>
                            <Paragraph>
                                Garage Việt hỗ trợ thương lượng giữa hai bên để đạt thỏa thuận hợp
                                lý.
                            </Paragraph>

                            <Title level={4}>4. Giải quyết khiếu nại</Title>
                            <Paragraph>
                                Khiếu nại được gửi qua email support@garageviet.vn hoặc hotline
                                0586.028.881 trong vòng 03 ngày kể từ khi phát sinh sự việc.
                            </Paragraph>
                            <Paragraph>
                                Bộ phận hỗ trợ xác nhận và xử lý trong 03 ngày làm việc.
                            </Paragraph>
                            <Paragraph>
                                Garage Việt có thể đóng băng tài khoản, giữ tiền cọc trong trường
                                hợp có tranh chấp chưa giải quyết xong.
                            </Paragraph>
                            <Paragraph>
                                Nếu hai bên không thỏa thuận được, Công ty sẽ chủ trì hòa giải hoặc
                                chuyển cho cơ quan có thẩm quyền.
                            </Paragraph>
                        </section>

                        {/* IV. Đảm bảo an toàn giao dịch */}
                        <section id="security" className="policy-section">
                            <div className="section-header">
                                <CheckCircleOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    IV. Đảm bảo an toàn giao dịch
                                </Title>
                            </div>
                            <Paragraph>
                                Tất cả các giao dịch, thanh toán, dữ liệu được mã hóa và lưu trữ
                                bảo mật trên hệ thống của Công ty.
                            </Paragraph>
                            <Paragraph>
                                Công ty không chịu trách nhiệm cho các giao dịch được thực hiện
                                ngoài nền tảng Garage Việt.
                            </Paragraph>
                            <Paragraph>
                                Nghiêm cấm mọi hành vi can thiệp hệ thống, lạm dụng API, phá hoại
                                dữ liệu hoặc gian lận đánh giá.
                            </Paragraph>
                        </section>

                        {/* V. Bảo vệ thông tin cá nhân */}
                        <section id="privacy" className="policy-section">
                            <div className="section-header">
                                <UserOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    V. Bảo vệ thông tin cá nhân
                                </Title>
                            </div>
                            <Paragraph>
                                Thông tin cá nhân được thu thập chỉ phục vụ cho các mục đích:
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    <li>Xác minh và duy trì tài khoản;</li>
                                    <li>Hỗ trợ giao dịch và thanh toán;</li>
                                    <li>Cải thiện chất lượng dịch vụ;</li>
                                    <li>Giải quyết tranh chấp</li>
                                    <li>
                                        Cung cấp thông tin cho cơ quan nhà nước khi được yêu cầu.
                                    </li>
                                </ul>
                            </Paragraph>
                            <Paragraph>
                                Thông tin cá nhân bao gồm: họ tên, số điện thoại, email, địa chỉ,
                                thông tin xe.
                            </Paragraph>
                            <Paragraph>
                                Dữ liệu được lưu trữ trên máy chủ của Công ty, không tiết lộ cho
                                bên thứ ba nếu không có sự đồng ý của chủ thể dữ liệu.
                            </Paragraph>
                            <Paragraph>
                                Trong trường hợp bị tấn công dữ liệu, Công ty có trách nhiệm thông
                                báo và phối hợp cơ quan chức năng xử lý.
                            </Paragraph>
                        </section>

                        {/* VI. Cơ chế chia sẻ doanh thu */}
                        <section id="revenue" className="policy-section">
                            <div className="section-header">
                                <DollarOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    VI. Cơ chế chia sẻ doanh thu
                                </Title>
                            </div>

                            <Title level={4}>1. Nguyên tắc chung</Title>
                            <Paragraph>
                                Công ty TNHH Nền tảng Công nghệ Garage Việt ("Công ty") vận hành
                                nền tảng ứng dụng Garage Việt, là bên trung gian cung cấp hạ tầng
                                công nghệ, tiếp thị, thanh toán và hỗ trợ kết nối giữa Khách hàng
                                (chủ xe) và Garage (đối tác cung cấp dịch vụ).
                            </Paragraph>
                            <Paragraph>
                                Để duy trì và phát triển hệ thống, Công ty thu phí nền tảng từ các
                                Garage tham gia, được tính theo tỷ lệ 10% (mười phần trăm) trên
                                giá trị báo giá ban đầu mà Garage gửi cho khách hàng thông qua
                                nền tảng Garage Việt.
                            </Paragraph>
                            <Paragraph>
                                Khoản phí này được gọi là Phí nền tảng Garage Việt và là nghĩa vụ
                                tài chính cố định của Garage đối với Công ty trên mỗi đơn hàng phát
                                sinh qua ứng dụng.
                            </Paragraph>

                            <Title level={4}>2. Phạm vi tính phí</Title>
                            <Paragraph>
                                Phí nền tảng được tính dựa trên giá trị báo giá ban đầu mà Garage
                                gửi đến khách hàng tại thời điểm tham gia báo giá dịch vụ.
                            </Paragraph>
                            <Paragraph>
                                Dù trong quá trình giao dịch, khách hàng có sử dụng mã giảm giá,
                                voucher, hoặc chương trình khuyến mãi do Garage Việt phát hành,
                                mức phí nền tảng vẫn được tính trên giá trị báo giá ban đầu, không
                                bị ảnh hưởng bởi phần giảm giá.
                            </Paragraph>

                            <Title level={4}>3. Thời điểm và phương thức thanh toán phí</Title>
                            <Paragraph>
                                Garage có trách nhiệm thanh toán phí nền tảng định kỳ cho Công ty,
                                theo chu kỳ tháng, hoặc tùy vào hình thức hợp tác và thỏa thuận
                                giữa hai bên.
                            </Paragraph>
                            <Paragraph>
                                Vào đầu mỗi kỳ, Garage Việt sẽ tổng hợp doanh thu các đơn hàng
                                hoàn tất trong kỳ tính phí và gửi báo cáo chi tiết cho Garage qua
                                hệ thống CRM hoặc email đã đăng ký.
                            </Paragraph>
                            <Paragraph>
                                Sau khi nhận báo cáo, Garage có trách nhiệm đối chiếu số liệu và
                                thanh toán phí nền tảng cho Công ty trong vòng 03 (ba) ngày làm
                                việc.
                            </Paragraph>
                            <Paragraph>
                                <strong>Hình thức thanh toán bao gồm:</strong>
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    <li>
                                        Chuyển khoản ngân hàng theo thông tin tài khoản của Công ty, hoặc
                                    </li>
                                    <li>
                                        Khấu trừ tự động từ tiền cọc dịch vụ của Garage (nếu có).
                                    </li>
                                </ul>
                            </Paragraph>
                            <Paragraph>
                                Trường hợp Garage chậm thanh toán quá 07 (bảy) ngày làm việc kể từ
                                thời hạn quy định, Garage Việt có quyền:
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    <li>
                                        Tạm ngưng hiển thị Garage trong danh sách đề xuất khách hàng;
                                    </li>
                                    <li>Tạm khóa tài khoản đối tác;</li>
                                    <li>
                                        Khấu trừ khoản nợ phí nền tảng từ các doanh thu tiếp theo của
                                        Garage.
                                    </li>
                                </ul>
                            </Paragraph>

                            <Title level={4}>4. Đối với giao dịch bị hủy hoặc thay đổi</Title>
                            <Paragraph>
                                Nếu đơn hàng bị hủy trước khi Garage xác nhận hoặc bắt đầu thực hiện
                                dịch vụ, Garage không phải thanh toán phí nền tảng cho đơn hàng đó.
                            </Paragraph>
                            <Paragraph>
                                Trong trường hợp tranh chấp, Công ty sẽ căn cứ trên dữ liệu giao
                                dịch lưu trữ trên hệ thống để xác định trách nhiệm và mức phí phải
                                thanh toán.
                            </Paragraph>

                            <Title level={4}>5. Hóa đơn và chứng từ tài chính</Title>
                            <Paragraph>
                                Sau khi Garage hoàn tất nghĩa vụ thanh toán phí nền tảng, Công ty
                                có trách nhiệm xuất hóa đơn giá trị gia tăng (VAT) tương ứng và gửi
                                cho Garage qua:
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    <li>Email đã đăng ký trên hệ thống, hoặc</li>
                                    <li>
                                        Tải trực tiếp trong phần quản lý doanh thu của CRM Garage Việt.
                                    </li>
                                </ul>
                            </Paragraph>
                            <Paragraph>
                                Mọi chứng từ, hóa đơn điện tử đều có giá trị pháp lý tương đương bản
                                giấy và được lưu trữ trên hệ thống theo quy định của pháp luật về
                                giao dịch điện tử.
                            </Paragraph>

                            <Title level={4}>6. Chính sách ưu đãi và khuyến khích đối tác</Title>
                            <Paragraph>
                                Garage Việt có thể áp dụng chính sách giảm phí nền tảng tạm thời
                                (ví dụ: còn 5%) cho các Garage mới trong 3 tháng đầu hợp tác, hoặc
                                cho các Garage đạt thành tích doanh thu, đánh giá uy tín cao, và
                                phản hồi tích cực từ khách hàng.
                            </Paragraph>
                            <Paragraph>
                                Các chương trình ưu đãi này được thông báo bằng văn bản hoặc thông
                                qua hệ thống quản lý Garage Việt, và được áp dụng minh bạch, công
                                bằng cho các đối tác đủ điều kiện.
                            </Paragraph>

                            <Title level={4}>7. Trách nhiệm tuân thủ</Title>
                            <Paragraph>
                                Garage có trách nhiệm theo dõi, đối chiếu doanh thu và phí nền tảng
                                phát sinh trên hệ thống; kịp thời phản hồi nếu có sai lệch.
                            </Paragraph>
                            <Paragraph>
                                Mọi trường hợp cố tình che giấu giao dịch, thực hiện giao dịch ngoài
                                hệ thống, hoặc trốn tránh nghĩa vụ phí nền tảng đều bị xử lý theo
                                quy định của Quy chế hoạt động và có thể dẫn tới việc chấm dứt hợp
                                tác vĩnh viễn.
                            </Paragraph>
                        </section>

                        {/* VII. Quản lý thông tin xấu */}
                        <section id="content-management" className="policy-section">
                            <div className="section-header">
                                <WarningOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    VII. Quản lý thông tin xấu
                                </Title>
                            </div>

                            <Title level={4}>1. Quy định đăng tin</Title>
                            <Paragraph>
                                Thành viên của Ứng dụng Garage Việt (bao gồm Chủ xe và Garage) tự
                                chịu trách nhiệm bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ
                                dưới tên đăng ký và mật khẩu của mình. Thành viên phải thông báo kịp
                                thời cho Công ty TNHH Nền tảng Công nghệ Garage Việt khi phát hiện
                                hành vi sử dụng trái phép hoặc vi phạm bảo mật để có biện pháp xử
                                lý.
                            </Paragraph>
                            <Paragraph>
                                Thành viên không được sử dụng dịch vụ của Garage Việt cho các mục
                                đích bất hợp pháp, lừa đảo, gây rối, xâm phạm quyền lợi của người
                                khác, hoặc phát tán mã độc, virus gây hại đến hệ thống. Trong trường
                                hợp vi phạm, Thành viên phải chịu hoàn toàn trách nhiệm trước pháp
                                luật.
                            </Paragraph>
                            <Paragraph>
                                Thành viên không được phép chỉnh sửa, sao chép, phân phối, hoặc cung
                                cấp lại dịch vụ, dữ liệu, hay công cụ của Ứng dụng Garage Việt cho
                                bên thứ ba nếu không có sự đồng ý bằng văn bản của Công ty.
                            </Paragraph>
                            <Paragraph>
                                Cấm mọi hành vi làm ảnh hưởng đến uy tín hoặc gây mất đoàn kết giữa
                                các thành viên Garage Việt thông qua việc tung tin sai sự thật, giả
                                mạo tài khoản, hoặc lan truyền thông tin gây hiểu lầm về nền tảng.
                            </Paragraph>

                            <Title level={4}>
                                2. Danh mục hàng hóa, dịch vụ cấm hoặc có điều kiện
                            </Title>
                            <Paragraph>
                                <strong>Danh mục cấm giao dịch:</strong>
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    <li>
                                        Ma túy, vũ khí, công cụ hỗ trợ, chất nổ, hóa chất độc hại.
                                    </li>
                                    <li>
                                        Động vật, thực vật hoang dã bị cấm khai thác hoặc kinh doanh.
                                    </li>
                                    <li>
                                        Sản phẩm, thiết bị có nội dung phản động, đồi trụy, mê tín dị
                                        đoan.
                                    </li>
                                    <li>
                                        Thông tin cá nhân (email, dữ liệu khách hàng, biển số xe...)
                                        được mua bán trái phép.
                                    </li>
                                    <li>
                                        Dịch vụ không liên quan đến lĩnh vực ô tô, sửa chữa, bảo dưỡng,
                                        nâng cấp, chăm sóc xe.
                                    </li>
                                    <li>
                                        Các sản phẩm vi phạm quyền sở hữu trí tuệ hoặc chưa được cấp
                                        phép sử dụng tại Việt Nam.
                                    </li>
                                </ul>
                            </Paragraph>

                            <Paragraph>
                                <strong>Danh mục giao dịch có điều kiện:</strong>
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    <li>
                                        Garage cung cấp sản phẩm, dịch vụ kỹ thuật đặc thù (như độ xe,
                                        thay đổi kết cấu, sơn đổi màu...) phải có giấy phép hoặc chứng
                                        nhận đủ điều kiện kinh doanh theo quy định của pháp luật.
                                    </li>
                                    <li>
                                        Việc bán phụ tùng, linh kiện, dầu nhớt, vật tư thay thế phải đảm
                                        bảo nguồn gốc rõ ràng, chính hãng hoặc được công bố xuất xứ cụ
                                        thể.
                                    </li>
                                </ul>
                            </Paragraph>

                            <Title level={4}>3. Hành vi cấm trong hoạt động đăng tải</Title>
                            <Paragraph>
                                <ul>
                                    <li>
                                        Quảng cáo sai sự thật, gây nhầm lẫn về chất lượng, giá cả hoặc
                                        xuất xứ sản phẩm/dịch vụ.
                                    </li>
                                    <li>
                                        Quảng cáo có nội dung thiếu thẩm mỹ, vi phạm thuần phong mỹ tục,
                                        xúc phạm cá nhân, tổ chức.
                                    </li>
                                    <li>
                                        Sử dụng hình ảnh, thương hiệu, dữ liệu của bên thứ ba mà không
                                        có sự đồng ý hợp pháp.
                                    </li>
                                    <li>Quảng cáo so sánh hoặc công kích trực tiếp đối thủ.</li>
                                    <li>
                                        Đăng tải nội dung vi phạm pháp luật về sở hữu trí tuệ, cạnh tranh
                                        hoặc bảo vệ người tiêu dùng.
                                    </li>
                                </ul>
                            </Paragraph>

                            <Title level={4}>4. Cơ chế rà soát và kiểm soát thông tin</Title>
                            <Paragraph>
                                Tất cả các tin đăng của Garage trên ứng dụng Garage Việt đều được
                                kiểm duyệt nội dung tự động và thủ công trước khi hiển thị.
                            </Paragraph>
                            <Paragraph>
                                Công ty có quyền tạm ẩn, xóa, hoặc điều chỉnh tin đăng nếu vi phạm
                                Quy chế hoặc có dấu hiệu gian lận.
                            </Paragraph>
                            <Paragraph>
                                Các nội dung sai phạm nghiêm trọng có thể bị khóa tài khoản, thu hồi
                                quyền truy cập mà không cần thông báo trước.
                            </Paragraph>
                        </section>

                        {/* VIII. Trách nhiệm trong trường hợp phát sinh lỗi kỹ thuật */}
                        <section id="technical" className="policy-section">
                            <div className="section-header">
                                <CloseCircleOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    VIII. Trách nhiệm trong trường hợp phát sinh lỗi kỹ thuật
                                </Title>
                            </div>
                            <Paragraph>
                                Garage Việt cam kết duy trì hệ thống ổn định và an toàn. Trường hợp
                                lỗi kỹ thuật xảy ra do phía ứng dụng, Công ty sẽ ngay lập tức xử lý,
                                khắc phục và bảo đảm quyền lợi cho người dùng.
                            </Paragraph>
                            <Paragraph>
                                Thành viên khi gặp lỗi có thể liên hệ qua email support@garageviet.vn
                                hoặc hotline (0848.294.369) để được hỗ trợ.
                            </Paragraph>
                            <Paragraph>
                                Garage Việt không chịu trách nhiệm đối với các sự cố xuất phát từ:
                                thiết bị người dùng, lỗi mạng, hoặc yếu tố ngoài tầm kiểm soát (thiên
                                tai, mất điện, tấn công mạng...).
                            </Paragraph>
                        </section>

                        {/* IX. Quyền và nghĩa vụ của Ban Quản lý Ứng dụng Garage Việt */}
                        <section id="admin-rights" className="policy-section">
                            <div className="section-header">
                                <TeamOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    IX. Quyền và nghĩa vụ của Ban Quản lý Ứng dụng Garage Việt
                                </Title>
                            </div>

                            <Title level={4}>1. Quyền hạn</Title>
                            <Paragraph>
                                <ul>
                                    <li>
                                        Cung cấp dịch vụ cho Thành viên sau khi hoàn tất thủ tục đăng ký
                                        hợp lệ.
                                    </li>
                                    <li>
                                        Từ chối, tạm ngừng, hoặc chấm dứt quyền sử dụng nếu Thành viên
                                        cung cấp thông tin sai lệch, vi phạm pháp luật, hay làm ảnh
                                        hưởng đến nền tảng.
                                    </li>
                                    <li>
                                        Thay đổi, nâng cấp, hoặc điều chỉnh biểu phí, chính sách dịch vụ
                                        (sẽ được thông báo trước ít nhất 30 ngày).
                                    </li>
                                    <li>
                                        Giữ quyền sở hữu toàn bộ nội dung, giao diện, logo, nhãn hiệu và
                                        dữ liệu hệ thống.
                                    </li>
                                    <li>
                                        Được phép cung cấp dữ liệu cho cơ quan nhà nước khi có yêu cầu
                                        hợp pháp.
                                    </li>
                                </ul>
                            </Paragraph>

                            <Title level={4}>2. Nghĩa vụ</Title>
                            <Paragraph>
                                <ul>
                                    <li>
                                        Đảm bảo cơ chế kiểm tra, giám sát thông tin đăng tải; loại bỏ
                                        các nội dung sai phạm hoặc hàng hóa, dịch vụ bị cấm.
                                    </li>
                                    <li>Hỗ trợ các cơ quan chức năng trong việc điều tra, xử lý vi phạm.</li>
                                    <li>
                                        Tiếp nhận, hòa giải tranh chấp giữa Garage và Chủ xe khi phát
                                        sinh.
                                    </li>
                                    <li>
                                        Đảm bảo an toàn thông tin cá nhân và dữ liệu kinh doanh của
                                        Thành viên.
                                    </li>
                                    <li>
                                        Công bố công khai cơ chế giải quyết khiếu nại và biện pháp xử lý
                                        tranh chấp.
                                    </li>
                                </ul>
                            </Paragraph>
                        </section>

                        {/* X. Quyền và nghĩa vụ của Garage (người cung cấp dịch vụ) */}
                        <section id="garage-rights" className="policy-section">
                            <div className="section-header">
                                <ShopOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    X. Quyền và nghĩa vụ của Garage (người cung cấp dịch vụ)
                                </Title>
                            </div>

                            <Title level={4}>Quyền</Title>
                            <Paragraph>
                                <ul>
                                    <li>
                                        Được đăng tin, quảng bá dịch vụ sửa chữa/nâng cấp xe trên ứng
                                        dụng.
                                    </li>
                                    <li>
                                        Được sử dụng các công cụ CRM, chat, và quản lý báo giá do Garage
                                        Việt cung cấp.
                                    </li>
                                    <li>
                                        Được đóng góp ý kiến, đề xuất cải tiến sản phẩm và chính sách
                                        dịch vụ.
                                    </li>
                                </ul>
                            </Paragraph>

                            <Title level={4}>Nghĩa vụ</Title>
                            <Paragraph>
                                <ul>
                                    <li>
                                        Cung cấp thông tin chính xác, minh bạch về doanh nghiệp, giấy
                                        phép kinh doanh, địa chỉ, giá, thời gian, và bảo hành dịch vụ.
                                    </li>
                                    <li>
                                        Đảm bảo chất lượng dịch vụ đúng như cam kết với khách hàng.
                                    </li>
                                    <li>
                                        Không đăng nội dung sai sự thật, sử dụng hình ảnh vi phạm bản
                                        quyền, hoặc giả mạo.
                                    </li>
                                    <li>
                                        Bồi thường thiệt hại nếu gây tổn thất cho khách hàng hoặc làm ảnh
                                        hưởng uy tín nền tảng.
                                    </li>
                                    <li>
                                        Tuân thủ quy định pháp luật về thương mại điện tử, bảo vệ người
                                        tiêu dùng, thuế, và sở hữu trí tuệ.
                                    </li>
                                </ul>
                            </Paragraph>
                        </section>

                        {/* XI. Quyền và nghĩa vụ của Chủ xe (người sử dụng dịch vụ) */}
                        <section id="customer-rights" className="policy-section">
                            <div className="section-header">
                                <UserOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    XI. Quyền và nghĩa vụ của Chủ xe (người sử dụng dịch vụ)
                                </Title>
                            </div>

                            <Title level={4}>Quyền</Title>
                            <Paragraph>
                                <ul>
                                    <li>
                                        Được truy cập, tìm kiếm, so sánh, và lựa chọn Garage uy tín để
                                        đặt dịch vụ.
                                    </li>
                                    <li>Được phản hồi, đánh giá chất lượng dịch vụ sau khi hoàn thành.</li>
                                    <li>Được bảo mật thông tin cá nhân và lịch sử giao dịch.</li>
                                </ul>
                            </Paragraph>

                            <Title level={4}>Nghĩa vụ</Title>
                            <Paragraph>
                                <ul>
                                    <li>
                                        Cung cấp thông tin chính xác khi đặt dịch vụ: loại xe, yêu cầu,
                                        địa chỉ, thời gian.
                                    </li>
                                    <li>
                                        Không lợi dụng hệ thống để đăng yêu cầu ảo, spam, hoặc gây thiệt
                                        hại cho Garage khác.
                                    </li>
                                    <li>
                                        Tuân thủ quy trình giao dịch, đánh giá công bằng và trung thực.
                                    </li>
                                    <li>
                                        Hợp tác với Garage Việt khi có yêu cầu xác minh, khiếu nại hoặc
                                        tranh chấp.
                                    </li>
                                </ul>
                            </Paragraph>
                        </section>

                        {/* XII. Điều khoản áp dụng */}
                        <section id="terms" className="policy-section">
                            <div className="section-header">
                                <FileTextOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    XII. Điều khoản áp dụng
                                </Title>
                            </div>
                            <Paragraph>
                                Quy chế hoạt động này có hiệu lực kể từ ngày ký và được công bố trên
                                website và ứng dụng Garage Việt.
                            </Paragraph>
                            <Paragraph>
                                Công ty TNHH Nền tảng Công nghệ Garage Việt có quyền điều chỉnh Quy
                                chế để phù hợp với thực tế hoạt động và quy định pháp luật.
                            </Paragraph>
                            <Paragraph>
                                Mọi thay đổi sẽ được thông báo công khai ít nhất 07 ngày trước khi
                                áp dụng.
                            </Paragraph>
                            <Paragraph>
                                Việc Thành viên tiếp tục sử dụng ứng dụng sau khi Quy chế sửa đổi có
                                hiệu lực đồng nghĩa với việc chấp thuận toàn bộ nội dung Quy chế
                                mới.
                            </Paragraph>
                        </section>

                        {/* XIII. Điều khoản cam kết */}
                        <section id="commitment" className="policy-section">
                            <div className="section-header">
                                <CheckCircleOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    XIII. Điều khoản cam kết
                                </Title>
                            </div>
                            <Paragraph>
                                Mọi Thành viên, bao gồm Khách hàng (chủ xe) và Garage (đối tác cung
                                cấp dịch vụ), khi đăng ký tài khoản, truy cập, hoặc sử dụng ứng dụng
                                Garage Việt để thực hiện giao dịch, đồng nghĩa với việc đã đọc, hiểu
                                rõ, và chấp thuận toàn bộ nội dung của Quy chế hoạt động này.
                            </Paragraph>
                            <Paragraph>
                                <strong>Thành viên cam kết:</strong>
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    <li>
                                        Tuân thủ đầy đủ các quy định trong Quy chế hoạt động Sàn giao dịch
                                        thương mại điện tử GarageViet.vn và các chính sách khác do Công ty
                                        TNHH Nền tảng Công nghệ Garage Việt ban hành.
                                    </li>
                                    <li>
                                        Chịu trách nhiệm trước pháp luật và trước Công ty về mọi hành vi,
                                        thông tin, nội dung, giao dịch được thực hiện thông qua tài khoản
                                        của mình trên hệ thống Garage Việt.
                                    </li>
                                    <li>
                                        Không thực hiện bất kỳ hành vi nào vi phạm pháp luật, xâm phạm
                                        quyền, lợi ích hợp pháp của bên thứ ba hoặc gây ảnh hưởng đến uy
                                        tín, hoạt động của Sàn giao dịch.
                                    </li>
                                </ul>
                            </Paragraph>
                            <Paragraph>
                                <strong>Công ty TNHH Nền tảng Công nghệ Garage Việt cam kết:</strong>
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    <li>
                                        Vận hành hệ thống ổn định, minh bạch, bảo mật thông tin và đảm bảo
                                        quyền lợi chính đáng của tất cả Thành viên;
                                    </li>
                                    <li>
                                        Giải quyết kịp thời các khiếu nại, tranh chấp phát sinh trong quá
                                        trình giao dịch, theo đúng quy định của Quy chế này và pháp luật
                                        Việt Nam.
                                    </li>
                                </ul>
                            </Paragraph>
                        </section>

                        {/* Thông tin liên hệ */}
                        <section id="contact" className="policy-section">
                            <div className="section-header">
                                <MailOutlined className="section-icon" />
                                <Title level={2} className="section-title">
                                    Liên hệ
                                </Title>
                            </div>
                            <Paragraph>
                                Mọi thắc mắc, khiếu nại hoặc yêu cầu hỗ trợ của Thành viên xin vui lòng
                                liên hệ:
                            </Paragraph>
                            <Paragraph>
                                <strong>Phòng Dịch vụ Khách hàng</strong>
                            </Paragraph>
                            <Paragraph>
                                <strong>
                                    CÔNG TY TNHH NỀN TẢNG CÔNG NGHỆ GARAGE VIỆT
                                </strong>
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    <li>
                                        <strong>Địa chỉ:</strong> Ngã Ba Kỳ Đồng, Xã Kỳ Anh, Tỉnh Hà Tĩnh,
                                        Việt Nam
                                    </li>
                                    <li>
                                        <strong>Điện thoại:</strong> 0586 028 881
                                    </li>
                                    <li>
                                        <strong>Email:</strong> support@garageviet.vn
                                    </li>
                                    <li>
                                        <strong>Website:</strong> https://garageviet.vn
                                    </li>
                                </ul>
                            </Paragraph>
                        </section>

                        <div className="policy-footer-section">
                            <Text type="secondary" className="footer-text">
                                © {new Date().getFullYear()} Garage Việt. Tất cả quyền được bảo lưu.
                            </Text>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default OperationPolicy;

