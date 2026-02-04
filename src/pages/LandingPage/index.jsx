import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo_chinh.jpg";
import {
    AppleOutlined,
    AndroidOutlined,
    CheckCircleOutlined,
    MessageOutlined,
    RightOutlined,
    SafetyCertificateOutlined,
    ThunderboltOutlined,
    StarOutlined,
    ClockCircleOutlined,
    BarChartOutlined,
    LikeOutlined,
    WalletOutlined,
    FormOutlined,
    FacebookOutlined,
    TikTokOutlined,
} from "@ant-design/icons";
import "./index.scss";

const APP_LINKS = {
    ios: "https://apps.apple.com/vn/app/garage-việt/id6754981981?l=vi",
    android: "https://play.google.com/store/apps/details?id=com.garageviet.app",
    facebook: "https://www.facebook.com/garageviet.vn",
    tiktok: "https://www.tiktok.com/@garageviet.vn",
};

const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Header: link Chính sách ngay từ đầu trang */}
            <header className="landing-header">
                <Link to="/" className="landing-header-logo">
                    <img src={logoImg} alt="Garage Việt" />
                    <span>Garage Việt</span>
                </Link>
                <nav className="landing-header-links">
                    <Link to="/garageviet-privacy-policy">Chính sách bảo mật</Link>
                    <Link to="/garageviet-operation-policy">Quy chế hoạt động</Link>
                    <Link to="/account-deletion">Xóa tài khoản</Link>
                </nav>
            </header>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-inner">
                    <div className="hero-content">
                        <span className="hero-tag">
                            <span className="hero-tag-dot" /> Ứng dụng #1 cho chủ xe Việt Nam
                        </span>
                        <h1 className="hero-title">
                            <span className="hero-title-brand">Garage Việt</span>
                            <span className="hero-title-accent">Kết nối chủ xe</span>
                            <span className="hero-title-brand"> với garage độ xe </span>
                            <span className="hero-title-accent">uy tín</span>
                        </h1>
                        <p className="hero-subtitle">
                            Đăng yêu cầu – Nhận nhiều báo giá – Chọn garage phù hợp ngay trên app
                        </p>
                        <div className="cta-buttons">
                            <a href={APP_LINKS.android} className="cta-button cta-android" target="_blank" rel="noopener noreferrer">
                                <AndroidOutlined /> Tải app Android
                            </a>
                            <a href={APP_LINKS.ios} className="cta-button cta-ios" target="_blank" rel="noopener noreferrer">
                                <AppleOutlined /> Tải app iOS
                            </a>
                        </div>
                        <div className="hero-stats">
                            <div className="hero-stat"><span className="hero-stat-num">500+</span><span className="hero-stat-label">Garage đối tác</span></div>
                            <div className="hero-stat"><span className="hero-stat-num">10K+</span><span className="hero-stat-label">Chủ xe tin dùng</span></div>
                            <div className="hero-stat"><span className="hero-stat-num">4.8★</span><span className="hero-stat-label">Đánh giá app</span></div>
                        </div>
                    </div>
                    <div className="hero-mockup">
                        <div className="phone-frame">
                            <div className="phone-notch" />
                            <div className="phone-screen">
                                <div className="phone-header-card">
                                    <div className="phone-header-row">
                                        <div className="phone-header-left">
                                            <img src={logoImg} alt="Garage Việt" className="phone-avatar" />
                                            <div className="phone-header-text">
                                                <div className="phone-app-name">Garage Việt</div>
                                                <div className="phone-greeting">Xin chào, Minh!</div>
                                            </div>
                                        </div>
                                        <div className="phone-status">9:41</div>
                                    </div>
                                    <span className="phone-input-label">Đăng yêu cầu mới</span>
                                </div>
                                <div className="phone-input-wrap">
                                    <div className="phone-input">Độ đèn LED...</div>
                                </div>
                                <div className="phone-quotes-label">Báo giá mới nhất</div>
                                <div className="phone-quote">
                                    <div className="phone-quote-name">Garage Pro 1</div>
                                    <div className="phone-quote-desc">Độ đèn LED</div>
                                    <div className="phone-quote-price">2.5tr</div>
                                    <span className="phone-quote-star">★ 4.8</span>
                                </div>
                                <div className="phone-quote">
                                    <div className="phone-quote-name">Garage Pro 2</div>
                                    <div className="phone-quote-desc">Độ đèn LED</div>
                                    <div className="phone-quote-price">2.8tr</div>
                                    <span className="phone-quote-star">★ 4.7</span>
                                </div>
                                <div className="phone-completed">Đã hoàn thành Garage đánh giá 5★</div>
                            </div>
                        </div>
                        <div className="phone-notification">
                            <span className="phone-notification-icon">🔔</span>
                            <div>
                                <div className="phone-notification-title">Báo giá mới!</div>
                                <div className="phone-notification-price">2.5 triệu VNĐ</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Garage Việt Section */}
            <section className="content-section section-what" style={{ maxWidth: "100%" }}>
                <div className="section-divider"></div>
                <h2 className="section-title">Garage Việt là gì?</h2>
                <p className="section-subtitle">
                    Garage Việt là ứng dụng giúp chủ xe dễ dàng tìm garage độ xe, nâng cấp xe phù hợp thông qua hệ thống <strong className="highlight-blue">báo giá</strong> và <strong className="highlight-blue">đánh giá minh bạch</strong>.
                </p>
                <div className="feature-cards">
                    <div className="feature-card">
                        <SafetyCertificateOutlined className="feature-icon feature-icon-orange" />
                        <h3 className="feature-card-title">Uy tín & Tin cậy</h3>
                        <p className="feature-card-desc">Tất cả garage đều được xác minh và đánh giá bởi cộng đồng chủ xe</p>
                    </div>
                    <div className="feature-card">
                        <ThunderboltOutlined className="feature-icon feature-icon-blue" />
                        <h3 className="feature-card-title">Nhanh chóng</h3>
                        <p className="feature-card-desc">Nhận báo giá từ nhiều garage chỉ trong vài phút sau khi đăng yêu cầu</p>
                    </div>
                    <div className="feature-card">
                        <StarOutlined className="feature-icon feature-icon-red" />
                        <h3 className="feature-card-title">Minh bạch</h3>
                        <p className="feature-card-desc">So sánh giá, xem đánh giá thực tế từ khách hàng trước khi quyết định</p>
                    </div>
                </div>
            </section>

            {/* Problems Section */}
            <section className="content-section" style={{ maxWidth: "100%" }}>
                <div className="section-divider"></div>
                <h2 className="section-title">Vấn đề của chủ xe khi độ – nâng cấp xe</h2>
                <div className="section-content">
                    <ul className="problem-list">
                        <li>Không biết chi phí độ xe bao nhiêu là hợp lý</li>
                        <li>Phải hỏi nhiều garage, báo giá mỗi nơi một kiểu</li>
                        <li>Khó đánh giá garage nào uy tín, làm đẹp – làm đúng</li>
                    </ul>
                </div>
            </section>

            {/* Solution Section */}
            <section className="content-section" style={{ maxWidth: "100%" }}>
                <div className="section-divider"></div>
                <h2 className="section-title">Garage Việt giải quyết thế nào</h2>
                <div className="section-content">
                    <div className="solution-list">
                        <div className="solution-item">
                            <CheckCircleOutlined className="check-icon" />
                            <span>Đăng yêu cầu độ xe hoặc nâng cấp xe chỉ trong vài phút</span>
                        </div>
                        <div className="solution-item">
                            <CheckCircleOutlined className="check-icon" />
                            <span>Nhiều garage gửi báo giá để so sánh</span>
                        </div>
                        <div className="solution-item">
                            <CheckCircleOutlined className="check-icon" />
                            <span>Chọn garage dựa trên giá và đánh giá thực tế</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="content-section section-benefits" style={{ maxWidth: "100%" }}>
                <div className="section-divider"></div>
                <h2 className="section-title">Lợi ích khi dùng Garage Việt</h2>
                <p className="section-subtitle">Trải nghiệm độ xe thông minh, tiết kiệm và an tâm</p>
                <div className="benefits-cards">
                    <div className="benefit-card">
                        <ClockCircleOutlined className="benefit-icon benefit-icon-yellow" />
                        <h3 className="benefit-card-title">Tiết kiệm thời gian tìm garage</h3>
                        <p className="benefit-card-desc">Không cần đi khắp nơi hỏi giá, mọi thứ có sẵn trên app</p>
                    </div>
                    <div className="benefit-card">
                        <BarChartOutlined className="benefit-icon benefit-icon-blue" />
                        <h3 className="benefit-card-title">So sánh giá minh bạch</h3>
                        <p className="benefit-card-desc">Dễ dàng so sánh báo giá từ nhiều garage cùng lúc</p>
                    </div>
                    <div className="benefit-card">
                        <LikeOutlined className="benefit-icon benefit-icon-red" />
                        <h3 className="benefit-card-title">Garage được đánh giá rõ ràng</h3>
                        <p className="benefit-card-desc">Đọc review thực từ khách hàng trước để chọn đúng garage</p>
                    </div>
                    <div className="benefit-card">
                        <WalletOutlined className="benefit-icon benefit-icon-orange" />
                        <h3 className="benefit-card-title">Tiết kiệm chi phí</h3>
                        <p className="benefit-card-desc">Garage cạnh tranh giá để có báo giá tốt nhất cho bạn</p>
                    </div>
                </div>
            </section>

            {/* How to Use Section - Cách hoạt động */}
            <section className="content-section section-how" style={{ maxWidth: "100%" }}>
                <div className="section-divider"></div>
                <h2 className="section-title">Cách hoạt động</h2>
                <p className="section-subtitle">Chỉ 3 bước đơn giản để tìm được garage độ xe hoàn hảo</p>
                <div className="steps-flow">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <FormOutlined className="step-card-icon" />
                        <h3 className="step-card-title">Đăng yêu cầu độ / nâng cấp xe</h3>
                        <p className="step-card-desc">Mô tả chi tiết nhu cầu độ xe của bạn: loại xe, dịch vụ cần, ngân sách dự kiến...</p>
                    </div>
                    <RightOutlined className="step-arrow" />
                    <div className="step-card">
                        <div className="step-number">2</div>
                        <MessageOutlined className="step-card-icon" />
                        <h3 className="step-card-title">Nhận nhiều báo giá từ garage</h3>
                        <p className="step-card-desc">Các garage uy tín sẽ gửi báo giá cạnh tranh, kèm theo portfolio và đánh giá thực tế</p>
                    </div>
                    <RightOutlined className="step-arrow" />
                    <div className="step-card">
                        <div className="step-number">3</div>
                        <CheckCircleOutlined className="step-card-icon" />
                        <h3 className="step-card-title">So sánh – chọn garage phù hợp</h3>
                        <p className="step-card-desc">Dễ dàng so sánh giá, đọc review và chọn garage phù hợp nhất với bạn</p>
                    </div>
                </div>
            </section>

            {/* Final CTA Section - dark blue */}
            <section className="cta-final-section" style={{ maxWidth: "100%" }}>
                <div className="cta-final-inner">
                    <h2 className="cta-final-title">Tải Garage Việt</h2>
                    <p className="cta-final-tagline">Độ xe dễ hơn bao giờ hết</p>
                    <p className="cta-final-desc">
                        Hàng nghìn chủ xe đã tin dùng. Tải app ngay để trải nghiệm cách tìm garage thông minh.
                    </p>
                    <div className="cta-store-buttons">
                        <a href={APP_LINKS.android} className="cta-store-btn cta-store-android" target="_blank" rel="noopener noreferrer" aria-label="Tải app trên Google Play">
                            <AndroidOutlined className="cta-store-icon" aria-hidden />
                            <span className="cta-store-text">
                                <span className="cta-store-label">Tải về trên</span>
                                <span className="cta-store-name">Google Play</span>
                            </span>
                        </a>
                        <a href={APP_LINKS.ios} className="cta-store-btn cta-store-ios" target="_blank" rel="noopener noreferrer" aria-label="Tải app trên App Store">
                            <AppleOutlined className="cta-store-icon" aria-hidden />
                            <span className="cta-store-text">
                                <span className="cta-store-label">Tải về trên</span>
                                <span className="cta-store-name">App Store</span>
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer - dark grey */}
            <footer className="footer" style={{ maxWidth: "100%" }}>
                <div className="footer-inner">
                    <div className="footer-brand">
                        <img src={logoImg} alt="Garage Việt" className="footer-logo-img" />
                        <span className="footer-name">Garage Việt</span>
                    </div>
                    <p className="footer-copy">© 2025 Garage Việt. Tất cả quyền được bảo lưu.</p>
                    <div className="footer-social">
                        <a href={APP_LINKS.facebook} className="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookOutlined /></a>
                        <a href={APP_LINKS.tiktok} className="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><TikTokOutlined /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
