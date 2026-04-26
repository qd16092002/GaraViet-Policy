import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo_chinh.jpg";
import {
    AppleOutlined,
    AndroidOutlined,
    CloseCircleOutlined,
    ArrowRightOutlined,
    FacebookOutlined,
    TikTokOutlined,
} from "@ant-design/icons";
import {
    CountUp,
    SparkleIcon,
    HeroDecor,
    FeaturedCardDecor,
    CtaWavesDecor,
    BrandMarquee,
    AuroraMesh,
    IShield,
    IBolt,
    IStar,
    IStarFill,
    IClock,
    IChart,
    IHeart,
    IWallet,
    IEdit,
    IChat,
    ICheck,
    IRocket,
    IBell,
    IDollar,
    ITeam,
} from "./landing-helpers";
import "./index.scss";

const APP_LINKS = {
    ios: "https://apps.apple.com/vn/app/garage-việt/id6754981981?l=vi",
    android: "https://play.google.com/store/apps/details?id=com.garageviet.app",
    facebook: "https://www.facebook.com/garageviet.vn",
    tiktok: "https://www.tiktok.com/@garageviet.vn",
};

const useScrollReveal = () => {
    const rootRef = useRef(null);
    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;
        const targets = root.querySelectorAll("[data-reveal]");
        if (!("IntersectionObserver" in window)) {
            targets.forEach((el) => el.classList.add("is-revealed"));
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-revealed");
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
        );
        targets.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);
    return rootRef;
};

const useScrolled = (offset = 12) => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > offset);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [offset]);
    return scrolled;
};

const LandingPage = () => {
    const rootRef = useScrollReveal();
    const scrolled = useScrolled(8);

    return (
        <div className={`landing-page${scrolled ? " is-scrolled" : ""}`} ref={rootRef}>
            {/* Header */}
            <header className="landing-header">
                <div className="landing-header-inner">
                    <Link to="/" className="landing-header-logo">
                        <img src={logoImg} alt="Garage Việt" />
                        <span>Garage Việt</span>
                    </Link>
                    <nav className="landing-header-links">
                        <Link to="/garageviet-privacy-policy">Chính sách bảo mật</Link>
                        <Link to="/garageviet-operation-policy">Quy chế hoạt động</Link>
                        <Link to="/account-deletion">Xóa tài khoản</Link>
                    </nav>
                    <a
                        href={APP_LINKS.android}
                        className="landing-header-cta"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Tải app
                        <ArrowRightOutlined />
                    </a>
                </div>
            </header>

            {/* Hero */}
            <section className="hero-section">
                <div className="hero-bg" aria-hidden>
                    <div className="hero-bg-image" />
                    <div className="hero-bg-overlay" />
                    <span className="hero-bg-blob hero-bg-blob--orange" />
                    <span className="hero-bg-blob hero-bg-blob--blue" />
                    <span className="hero-bg-grid" />
                    <HeroDecor />
                </div>

                <div className="hero-inner">
                    <div className="hero-content" data-reveal>
                        <span className="hero-tag">
                            <span className="hero-tag-dot" />
                            Ứng dụng <strong>#1</strong> kết nối chủ xe &amp; garage độ xe
                        </span>
                        <h1 className="hero-title">
                            <span className="hero-title-line">Tìm garage độ xe</span>
                            <span className="hero-title-line">
                                <span className="hero-title-accent">uy tín</span>
                                <span className="hero-title-italic">chỉ trong vài phút</span>
                            </span>
                        </h1>
                        <p className="hero-subtitle">
                            Đăng yêu cầu &middot; Nhận nhiều báo giá cạnh tranh &middot; Chọn garage phù hợp –
                            tất cả ngay trên một ứng dụng.
                        </p>

                        <div className="cta-buttons">
                            <a
                                href={APP_LINKS.android}
                                className="cta-button cta-android has-shimmer"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AndroidOutlined /> Tải app Android
                            </a>
                            <a
                                href={APP_LINKS.ios}
                                className="cta-button cta-ios has-shimmer"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AppleOutlined /> Tải app iOS
                            </a>
                        </div>

                        <div className="hero-trust">
                            <div className="hero-trust-avatars" aria-hidden>
                                <span className="ta ta-1">M</span>
                                <span className="ta ta-2">H</span>
                                <span className="ta ta-3">T</span>
                                <span className="ta ta-4">+</span>
                            </div>
                            <div className="hero-trust-text">
                                <div className="hero-trust-stars">
                                    <IStarFill /><IStarFill /><IStarFill /><IStarFill /><IStarFill />
                                    <span>4.8/5</span>
                                </div>
                                <div className="hero-trust-sub">10,000+ chủ xe đã tin dùng</div>
                            </div>
                        </div>

                        <div className="hero-stats">
                            <div className="hero-stat">
                                <span className="hero-stat-num">
                                    <CountUp to={500} suffix="+" />
                                </span>
                                <span className="hero-stat-label">Garage đối tác</span>
                            </div>
                            <div className="hero-stat">
                                <span className="hero-stat-num">
                                    <CountUp to={10000} suffix="+" />
                                </span>
                                <span className="hero-stat-label">Chủ xe tin dùng</span>
                            </div>
                            <div className="hero-stat">
                                <span className="hero-stat-num">
                                    <CountUp to={50000} suffix="+" />
                                </span>
                                <span className="hero-stat-label">Báo giá đã gửi</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-mockup" data-reveal>
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
                                <div className="phone-quotes-label">
                                    Báo giá mới nhất
                                    <span className="phone-badge-new">NEW</span>
                                </div>
                                <div className="phone-quote">
                                    <div className="phone-quote-name">Garage Pro 1</div>
                                    <div className="phone-quote-desc">Độ đèn LED</div>
                                    <div className="phone-quote-price">2.5tr</div>
                                    <span className="phone-quote-star"><IStarFill /> 4.8</span>
                                </div>
                                <div className="phone-quote">
                                    <div className="phone-quote-name">Garage Pro 2</div>
                                    <div className="phone-quote-desc">Độ đèn LED</div>
                                    <div className="phone-quote-price">2.8tr</div>
                                    <span className="phone-quote-star"><IStarFill /> 4.7</span>
                                </div>
                                <div className="phone-completed">
                                    <ICheck /> Đã hoàn thành · Garage đánh giá 5★
                                </div>
                            </div>
                        </div>

                        <div className="phone-notification phone-notification--top">
                            <span className="phone-notification-icon">
                                <IBell />
                            </span>
                            <div>
                                <div className="phone-notification-title">Báo giá mới!</div>
                                <div className="phone-notification-price">2.5 triệu VNĐ</div>
                            </div>
                        </div>

                        <div className="phone-notification phone-notification--bottom">
                            <span className="phone-notification-icon phone-notification-icon--green">
                                <ICheck />
                            </span>
                            <div>
                                <div className="phone-notification-title">Đã xác minh</div>
                                <div className="phone-notification-price">Garage uy tín</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand marquee – trust strip */}
            <section className="brand-strip" data-reveal>
                <p className="brand-strip-label">Hỗ trợ tất cả các hãng xe phổ biến tại Việt Nam</p>
                <BrandMarquee />
            </section>

            {/* What is Garage Việt */}
            <section className="content-section section-what" data-reveal>
                <span className="section-eyebrow">
                    <SparkleIcon className="section-eyebrow-icon" />
                    Garage Việt là gì?
                </span>
                <h2 className="section-title">
                    Một ứng dụng – <span className="title-accent">mọi giải pháp</span> cho chủ xe
                </h2>
                <p className="section-subtitle">
                    Garage Việt là ứng dụng giúp chủ xe dễ dàng tìm garage độ xe, nâng cấp xe phù hợp thông qua hệ thống{" "}
                    <strong className="highlight-blue">báo giá</strong> và{" "}
                    <strong className="highlight-blue">đánh giá minh bạch</strong>.
                </p>
                <div className="feature-cards">
                    <div className="feature-card" data-reveal>
                        <div className="feature-icon-wrap feature-icon-wrap--orange has-glow">
                            <IShield className="feature-icon" />
                            <span className="icon-ring" aria-hidden />
                        </div>
                        <h3 className="feature-card-title">Uy tín & Tin cậy</h3>
                        <p className="feature-card-desc">
                            Tất cả garage đều được xác minh và đánh giá bởi cộng đồng chủ xe trên cả nước
                        </p>
                    </div>
                    <div className="feature-card" data-reveal>
                        <div className="feature-icon-wrap feature-icon-wrap--blue has-glow">
                            <IBolt className="feature-icon" />
                            <span className="icon-ring" aria-hidden />
                        </div>
                        <h3 className="feature-card-title">Nhanh chóng</h3>
                        <p className="feature-card-desc">
                            Nhận báo giá từ nhiều garage chỉ trong vài phút sau khi đăng yêu cầu
                        </p>
                    </div>
                    <div className="feature-card" data-reveal>
                        <div className="feature-icon-wrap feature-icon-wrap--red has-glow">
                            <IStar className="feature-icon" />
                            <span className="icon-ring" aria-hidden />
                        </div>
                        <h3 className="feature-card-title">Minh bạch</h3>
                        <p className="feature-card-desc">
                            So sánh giá, xem đánh giá thực tế từ khách hàng trước khi quyết định
                        </p>
                    </div>
                </div>
            </section>

            {/* Problem vs Solution Compare */}
            <section className="content-section section-compare" data-reveal>
                <span className="section-eyebrow">
                    <SparkleIcon className="section-eyebrow-icon" />
                    Trước &amp; Sau
                </span>
                <h2 className="section-title">
                    Khác biệt khi có <span className="title-accent">Garage Việt</span>
                </h2>
                <p className="section-subtitle">
                    Tạm biệt cảnh hỏi giá khắp nơi, chọn nhầm garage. Mọi thứ trở nên dễ dàng và minh bạch hơn.
                </p>

                <div className="compare-grid">
                    <div className="compare-card compare-card--bad" data-reveal>
                        <div className="compare-card-head">
                            <span className="compare-badge compare-badge--bad">Trước đây</span>
                            <h3>Khi tự đi tìm garage</h3>
                        </div>
                        <ul className="compare-list">
                            <li>
                                <CloseCircleOutlined className="compare-icon compare-icon--bad" />
                                <span>Không biết chi phí độ xe bao nhiêu là hợp lý</span>
                            </li>
                            <li>
                                <CloseCircleOutlined className="compare-icon compare-icon--bad" />
                                <span>Phải hỏi nhiều garage, mỗi nơi báo giá một kiểu</span>
                            </li>
                            <li>
                                <CloseCircleOutlined className="compare-icon compare-icon--bad" />
                                <span>Khó đánh giá garage nào uy tín, làm đẹp – làm đúng</span>
                            </li>
                            <li>
                                <CloseCircleOutlined className="compare-icon compare-icon--bad" />
                                <span>Mất thời gian đi lại, gọi điện hỏi giá khắp nơi</span>
                            </li>
                        </ul>
                    </div>

                    <div className="compare-card compare-card--good" data-reveal>
                        <div className="compare-card-head">
                            <span className="compare-badge compare-badge--good">Với Garage Việt</span>
                            <h3>Đăng yêu cầu – nhận báo giá</h3>
                        </div>
                        <ul className="compare-list">
                            <li>
                                <ICheck className="compare-icon compare-icon--good" />
                                <span>Đăng yêu cầu độ xe hoặc nâng cấp chỉ trong vài phút</span>
                            </li>
                            <li>
                                <ICheck className="compare-icon compare-icon--good" />
                                <span>Nhiều garage gửi báo giá cạnh tranh để bạn so sánh</span>
                            </li>
                            <li>
                                <ICheck className="compare-icon compare-icon--good" />
                                <span>Chọn garage dựa trên giá và đánh giá thực tế từ chủ xe khác</span>
                            </li>
                            <li>
                                <ICheck className="compare-icon compare-icon--good" />
                                <span>Toàn bộ quy trình được minh bạch và lưu lại trên app</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Benefits – bento layout */}
            <section className="content-section section-benefits" data-reveal>
                <span className="section-eyebrow">
                    <SparkleIcon className="section-eyebrow-icon" />
                    Lợi ích
                </span>
                <h2 className="section-title">
                    Vì sao chủ xe <span className="title-accent">chọn Garage Việt</span>?
                </h2>
                <p className="section-subtitle">Trải nghiệm độ xe thông minh, tiết kiệm và an tâm</p>

                <div className="benefits-bento">
                    <div className="benefit-card benefit-card--featured" data-reveal>
                        <span className="benefit-card-conic" aria-hidden />
                        <FeaturedCardDecor />
                        <div className="benefit-card-inner">
                            <div className="benefit-icon-wrap benefit-icon-wrap--orange has-glow">
                                <IWallet />
                                <span className="icon-ring" aria-hidden />
                            </div>
                            <h3 className="benefit-card-title">
                                Tiết kiệm chi phí <span className="text-shine">tới 30%</span>
                            </h3>
                            <p className="benefit-card-desc">
                                Garage cạnh tranh báo giá để có mức tốt nhất cho bạn. Không còn tình trạng mỗi
                                nơi một giá trên trời.
                            </p>
                            <div className="benefit-card-meta">
                                <IDollar /> Trung bình tiết kiệm 1.2 triệu / dịch vụ
                            </div>
                        </div>
                    </div>

                    <div className="benefit-card" data-reveal>
                        <div className="benefit-icon-wrap benefit-icon-wrap--yellow">
                            <IClock />
                        </div>
                        <h3 className="benefit-card-title">Tiết kiệm thời gian</h3>
                        <p className="benefit-card-desc">
                            Không cần đi khắp nơi hỏi giá, mọi thứ có sẵn trên app
                        </p>
                    </div>

                    <div className="benefit-card" data-reveal>
                        <div className="benefit-icon-wrap benefit-icon-wrap--blue">
                            <IChart />
                        </div>
                        <h3 className="benefit-card-title">So sánh giá minh bạch</h3>
                        <p className="benefit-card-desc">
                            Dễ dàng so sánh báo giá từ nhiều garage cùng lúc
                        </p>
                    </div>

                    <div className="benefit-card" data-reveal>
                        <div className="benefit-icon-wrap benefit-icon-wrap--red">
                            <IHeart />
                        </div>
                        <h3 className="benefit-card-title">Đánh giá thật từ cộng đồng</h3>
                        <p className="benefit-card-desc">
                            Đọc review thực từ khách hàng để chọn đúng garage uy tín
                        </p>
                    </div>
                </div>
            </section>

            {/* How it works – timeline */}
            <section className="content-section section-how" data-reveal>
                <span className="section-eyebrow">
                    <SparkleIcon className="section-eyebrow-icon" />
                    Cách hoạt động
                </span>
                <h2 className="section-title">
                    Chỉ <span className="title-accent">3 bước đơn giản</span>
                </h2>
                <p className="section-subtitle">Từ khi đăng yêu cầu đến khi tìm được garage hoàn hảo</p>

                <div className="steps-flow">
                    <span className="steps-line" aria-hidden />
                    <div className="step-card" data-reveal>
                        <div className="step-card-top">
                            <div className="step-number">1<span className="step-ring" aria-hidden /></div>
                            <div className="step-card-icon-wrap">
                                <IEdit />
                            </div>
                        </div>
                        <h3 className="step-card-title">Đăng yêu cầu độ / nâng cấp xe</h3>
                        <p className="step-card-desc">
                            Mô tả nhu cầu: loại xe, dịch vụ cần, ngân sách dự kiến… chỉ trong vài phút.
                        </p>
                    </div>
                    <div className="step-card" data-reveal>
                        <div className="step-card-top">
                            <div className="step-number">2<span className="step-ring" aria-hidden /></div>
                            <div className="step-card-icon-wrap">
                                <IChat />
                            </div>
                        </div>
                        <h3 className="step-card-title">Nhận nhiều báo giá từ garage</h3>
                        <p className="step-card-desc">
                            Garage uy tín gửi báo giá cạnh tranh kèm portfolio và đánh giá thực tế.
                        </p>
                    </div>
                    <div className="step-card" data-reveal>
                        <div className="step-card-top">
                            <div className="step-number">3<span className="step-ring" aria-hidden /></div>
                            <div className="step-card-icon-wrap">
                                <ICheck />
                            </div>
                        </div>
                        <h3 className="step-card-title">So sánh – chọn garage phù hợp</h3>
                        <p className="step-card-desc">
                            So sánh giá, đọc review và chọn garage phù hợp nhất với nhu cầu của bạn.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="cta-final-section" data-reveal>
                <div className="cta-final-bg" aria-hidden>
                    <AuroraMesh />
                    <span className="cta-final-blob cta-final-blob--orange" />
                    <span className="cta-final-blob cta-final-blob--blue" />
                    <span className="cta-final-stars" />
                    <CtaWavesDecor />
                </div>
                <div className="cta-final-inner">
                    <span className="cta-final-eyebrow">
                        <IRocket /> Sẵn sàng độ xe theo cách thông minh?
                    </span>
                    <h2 className="cta-final-title">
                        Tải <span className="cta-final-brand">Garage Việt</span>
                    </h2>
                    <p className="cta-final-tagline">Độ xe dễ hơn bao giờ hết</p>
                    <p className="cta-final-desc">
                        Hàng nghìn chủ xe đã tin dùng. Tải app ngay để trải nghiệm cách tìm garage thông minh,
                        nhanh và minh bạch.
                    </p>
                    <div className="cta-store-buttons">
                        <a
                            href={APP_LINKS.android}
                            className="cta-store-btn cta-store-android has-shimmer"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Tải app trên Google Play"
                        >
                            <AndroidOutlined className="cta-store-icon" aria-hidden />
                            <span className="cta-store-text">
                                <span className="cta-store-label">Tải về trên</span>
                                <span className="cta-store-name">Google Play</span>
                            </span>
                        </a>
                        <a
                            href={APP_LINKS.ios}
                            className="cta-store-btn cta-store-ios has-shimmer"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Tải app trên App Store"
                        >
                            <AppleOutlined className="cta-store-icon" aria-hidden />
                            <span className="cta-store-text">
                                <span className="cta-store-label">Tải về trên</span>
                                <span className="cta-store-name">App Store</span>
                            </span>
                        </a>
                    </div>

                    <div className="cta-final-trust">
                        <span><ITeam /> 10,000+ chủ xe</span>
                        <span className="dot" />
                        <span><IStarFill /> 4.8 / 5</span>
                        <span className="dot" />
                        <span><IShield /> Garage được xác minh</span>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <img src={logoImg} alt="Garage Việt" className="footer-logo-img" />
                        <span className="footer-name">Garage Việt</span>
                    </div>
                    <nav className="footer-policy-links" aria-label="Chính sách">
                        <Link to="/garageviet-privacy-policy">Chính sách bảo mật</Link>
                        <span className="footer-policy-sep">·</span>
                        <Link to="/garageviet-operation-policy">Quy chế hoạt động</Link>
                        <span className="footer-policy-sep">·</span>
                        <Link to="/account-deletion">Xóa tài khoản</Link>
                    </nav>
                    <p className="footer-copy">© 2025 Garage Việt. Tất cả quyền được bảo lưu.</p>
                    <div className="footer-social">
                        <a
                            href={APP_LINKS.facebook}
                            className="footer-social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FacebookOutlined />
                        </a>
                        <a
                            href={APP_LINKS.tiktok}
                            className="footer-social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TikTok"
                        >
                            <TikTokOutlined />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
