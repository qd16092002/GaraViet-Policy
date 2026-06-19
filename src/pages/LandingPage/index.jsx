import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo_chinh.jpg";
import {
    FacebookOutlined,
    TikTokOutlined,
} from "@ant-design/icons";
import {
    CountUp,
    SparkleIcon,
    BrandMarquee,
    IShield,
    IBolt,
    IStarFill,
    IChart,
    IHeart,
    IEdit,
    IChat,
    ICheck,
    IRocket,
    IBell,
    ITeam,
    ISearch,
    ICalendar,
    IPin,
    IVerified,
    IArrowDown,
    IArrowRight,
    AppleLogo,
    GooglePlayLogo,
} from "./landing-helpers";
import "./index.scss";

const APP_LINKS = {
    ios: "https://apps.apple.com/vn/app/garage-việt/id6754981981?l=vi",
    android: "https://play.google.com/store/apps/details?id=com.garageviet.app",
    facebook: "https://www.facebook.com/garageviet.vn",
    tiktok: "https://www.tiktok.com/@garageviet.vn",
};

const SHOT = (n) => `${process.env.PUBLIC_URL || ""}/screenshots/screen-${n}.jpg`;

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

const useScrolled = (offset = 8) => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > offset);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [offset]);
    return scrolled;
};

/* ---------- Small building blocks ---------- */

const SectionHeader = ({ eyebrow, title, desc, align = "center" }) => (
    <div className={`section-head section-head--${align}`} data-reveal>
        <span className="eyebrow">
            <SparkleIcon className="eyebrow-icon" />
            {eyebrow}
        </span>
        <h2 className="section-title">{title}</h2>
        {desc && <p className="section-desc">{desc}</p>}
    </div>
);

const Shot = ({ n, alt, className = "" }) => (
    <div className={`shot ${className}`}>
        <img src={SHOT(n)} alt={alt} loading="lazy" />
    </div>
);

/* ---------- Data ---------- */

const TRUST = [
    { Icon: ISearch, title: "Garage uy tín gần bạn", desc: "Danh sách xưởng đã xác thực, có đánh giá thật từ cộng đồng." },
    { Icon: IChart, title: "Báo giá cạnh tranh", desc: "Nhiều garage gửi báo giá để bạn dễ dàng so sánh." },
    { Icon: ICalendar, title: "Đặt lịch nhanh chóng", desc: "Chốt báo giá tốt nhất và đặt lịch ngay trên ứng dụng." },
    { Icon: IShield, title: "Minh bạch & tin cậy", desc: "Hồ sơ garage, tiêu chuẩn và đánh giá rõ ràng." },
];

const FEATURES = [
    { Icon: IPin, title: "Tìm garage uy tín gần bạn", desc: "Duyệt danh sách gara, xưởng dịch vụ đã được xác thực và đánh giá chất lượng theo vị trí." },
    { Icon: IChart, title: "Nhận báo giá cạnh tranh", desc: "Gửi yêu cầu nâng cấp – chăm sóc xe và nhận báo giá từ nhiều gara khác nhau để so sánh." },
    { Icon: ICalendar, title: "Đặt lịch trực tiếp", desc: "Chọn báo giá phù hợp nhất rồi đặt lịch hẹn sửa chữa ngay trên ứng dụng, không cần gọi điện." },
    { Icon: IHeart, title: "Đánh giá thật từ cộng đồng", desc: "Đọc review thực tế từ những chủ xe khác để đưa ra quyết định tốt nhất." },
    { Icon: IChat, title: "Chat trực tiếp với garage", desc: "Trao đổi chi tiết dịch vụ và nhận tư vấn tức thì ngay trong app." },
    { Icon: IBolt, title: "Quản lý lịch sử dịch vụ", desc: "Lưu trữ và theo dõi toàn bộ lịch sử nâng cấp, chăm sóc xe của bạn." },
];

const SHOWCASE = [
    {
        n: 3,
        tag: "Đơn giản",
        title: "Nhận nhiều báo giá – so sánh trong tích tắc",
        desc: "Đăng một yêu cầu, nhận về nhiều báo giá từ các garage khác nhau. Xem giá, đánh giá và khoảng cách rồi nhắn tin hoặc đặt lịch chỉ với một chạm.",
        points: ["So sánh giá song song nhiều garage", "Xem sao đánh giá & khoảng cách", "Nhắn tin hoặc đặt lịch ngay"],
    },
    {
        n: 2,
        tag: "Minh bạch",
        title: "Hồ sơ garage rõ ràng, đã được xác thực",
        desc: "Mỗi garage có hồ sơ đầy đủ: số đơn hoàn thành, tiêu chuẩn, mức xác thực và các dịch vụ nổi bật — để bạn an tâm trước khi chọn.",
        points: ["Huy hiệu xác thực & cấp độ uy tín", "Dịch vụ nổi bật và mô tả chi tiết", "Số đơn hoàn thành minh bạch"],
    },
    {
        n: 4,
        tag: "Nhiều ưu đãi",
        title: "Voucher giảm giá, đặt cọc & đặt lịch dễ dàng",
        desc: "Áp dụng mã giảm giá ngay khi đặt lịch, đặt cọc an toàn và xem tổng thanh toán rõ ràng trước khi xác nhận.",
        points: ["Nhiều mã ưu đãi áp dụng tự động", "Đặt cọc & tính tổng thanh toán minh bạch", "Chọn ngày giờ hẹn linh hoạt"],
    },
    {
        n: 5,
        tag: "Hiệu quả",
        title: "Thông báo báo giá tức thì, đánh giá sau dịch vụ",
        desc: "Nhận thông báo ngay khi có garage báo giá cho yêu cầu của bạn, và để lại đánh giá thật sau khi hoàn thành để giúp cộng đồng.",
        points: ["Thông báo real-time mọi báo giá mới", "Đánh giá & review minh bạch", "Theo dõi tiến độ mọi yêu cầu"],
    },
];

const STEPS = [
    { Icon: IEdit, n: "01", title: "Đăng yêu cầu", desc: "Mô tả nhu cầu độ / nâng cấp / chăm sóc xe chỉ trong vài phút." },
    { Icon: IChat, n: "02", title: "Nhận nhiều báo giá", desc: "Các garage uy tín gửi báo giá cạnh tranh để bạn so sánh." },
    { Icon: ICheck, n: "03", title: "So sánh & đặt lịch", desc: "Chọn garage phù hợp theo giá và đánh giá, rồi đặt lịch ngay." },
];

const FAQS = [
    { q: "Garage Việt là gì?", a: "Garage Việt là nền tảng kết nối chủ xe với mạng lưới garage ô tô uy tín trên toàn quốc. Bạn đăng yêu cầu, nhận nhiều báo giá, so sánh và đặt lịch — tất cả trên một ứng dụng." },
    { q: "Sử dụng ứng dụng có mất phí không?", a: "Tải app và đăng yêu cầu nhận báo giá hoàn toàn miễn phí. Bạn chỉ thanh toán cho dịch vụ với garage mà bạn lựa chọn." },
    { q: "Làm sao để biết garage có uy tín?", a: "Mỗi garage đều có hồ sơ với huy hiệu xác thực, cấp độ tiêu chuẩn, số đơn hoàn thành và đánh giá thật từ những chủ xe khác." },
    { q: "Tôi nhận báo giá nhanh như thế nào?", a: "Sau khi đăng yêu cầu, các garage phù hợp có thể gửi báo giá chỉ trong vài phút. Bạn sẽ nhận thông báo tức thì cho mỗi báo giá mới." },
    { q: "Có áp dụng được mã giảm giá không?", a: "Có. Khi đặt lịch, bạn có thể áp dụng các mã ưu đãi hiện có, đặt cọc an toàn và xem tổng thanh toán minh bạch trước khi xác nhận." },
    { q: "Ứng dụng hỗ trợ những hãng xe nào?", a: "Garage Việt hỗ trợ hầu hết các hãng xe phổ biến tại Việt Nam như VinFast, Toyota, Honda, Mazda, Ford, Hyundai, Kia và nhiều hãng khác." },
];

const NAV = [
    { label: "Tính năng", href: "#features" },
    { label: "Trải nghiệm", href: "#showcase" },
    { label: "Cách hoạt động", href: "#how" },
    { label: "Câu hỏi", href: "#faq" },
];

const StoreButtons = ({ variant = "solid" }) => (
    <div className={`store-buttons store-buttons--${variant}`}>
        <a href={APP_LINKS.ios} className="store-btn store-btn--primary" target="_blank" rel="noopener noreferrer" aria-label="Tải trên App Store">
            <AppleLogo className="store-btn-glyph" />
            <span className="store-btn-text">
                <span className="store-btn-label">Tải về trên</span>
                <span className="store-btn-name">App Store</span>
            </span>
        </a>
        <a href={APP_LINKS.android} className="store-btn store-btn--ghost" target="_blank" rel="noopener noreferrer" aria-label="Tải trên CH Play">
            <GooglePlayLogo className="store-btn-glyph store-btn-glyph--play" />
            <span className="store-btn-text">
                <span className="store-btn-label">Tải về trên</span>
                <span className="store-btn-name">CH Play</span>
            </span>
        </a>
    </div>
);

const LandingPage = () => {
    const rootRef = useScrollReveal();
    const scrolled = useScrolled(8);

    return (
        <div className={`gv-landing${scrolled ? " is-scrolled" : ""}`} ref={rootRef}>
            {/* ---------------- Header ---------------- */}
            <header className="lp-header">
                <div className="lp-container lp-header-inner">
                    <Link to="/" className="lp-logo">
                        <img src={logoImg} alt="Garage Việt" />
                        <span className="lp-logo-text">
                            <span className="lp-logo-strong">Garage</span> Việt
                        </span>
                    </Link>
                    <nav className="lp-nav">
                        {NAV.map((item) => (
                            <a key={item.href} href={item.href}>{item.label}</a>
                        ))}
                    </nav>
                    <a href={APP_LINKS.ios} className="lp-header-cta" target="_blank" rel="noopener noreferrer">
                        Tải app <IArrowRight />
                    </a>
                </div>
            </header>

            <main>
                {/* ---------------- Hero ---------------- */}
                <section className="hero">
                    <div className="hero-glow" aria-hidden />
                    <div className="hero-grid-bg" aria-hidden />
                    <div className="lp-container hero-inner">
                        <div className="hero-copy" data-reveal>
                            <span className="eyebrow">
                                <span className="eyebrow-dot" />
                                Ứng dụng kết nối chủ xe &amp; garage độ xe
                            </span>
                            <h1 className="hero-title">
                                Tìm garage độ xe uy tín,{" "}
                                <span className="hero-accent">
                                    nhận báo giá trong vài phút
                                    <span className="hero-accent-underline" aria-hidden />
                                </span>
                            </h1>
                            <p className="hero-sub">
                                Đăng yêu cầu · nhận nhiều báo giá cạnh tranh · so sánh và chọn
                                garage phù hợp — tất cả gói gọn trong một ứng dụng.
                            </p>

                            <StoreButtons variant="solid" />

                            <div className="hero-trustrow">
                                <span className="hero-stars">
                                    <IStarFill /><IStarFill /><IStarFill /><IStarFill /><IStarFill />
                                    <strong>4.8</strong>/5
                                </span>
                                <span className="hero-trust-sep" />
                                <span className="hero-trust-item">
                                    <ITeam /> 10.000+ chủ xe tin dùng
                                </span>
                                <span className="hero-trust-sep" />
                                <span className="hero-trust-item">
                                    <IVerified className="ic-verified" /> Garage được xác thực
                                </span>
                            </div>

                            <div className="hero-stats">
                                <div className="hero-stat">
                                    <span className="hero-stat-num"><CountUp to={500} suffix="+" /></span>
                                    <span className="hero-stat-label">Garage đối tác</span>
                                </div>
                                <div className="hero-stat">
                                    <span className="hero-stat-num"><CountUp to={10000} suffix="+" /></span>
                                    <span className="hero-stat-label">Chủ xe tin dùng</span>
                                </div>
                                <div className="hero-stat">
                                    <span className="hero-stat-num"><CountUp to={50000} suffix="+" /></span>
                                    <span className="hero-stat-label">Báo giá đã gửi</span>
                                </div>
                            </div>
                        </div>

                        <div className="hero-visual" data-reveal>
                            <span className="float-chip float-chip--top">
                                <span className="float-chip-icon"><IBell /></span>
                                <span>
                                    <span className="float-chip-title">Báo giá mới!</span>
                                    <span className="float-chip-sub">2.5 triệu VNĐ</span>
                                </span>
                            </span>
                            <span className="float-chip float-chip--bottom">
                                <span className="float-chip-icon float-chip-icon--green"><ICheck /></span>
                                <span>
                                    <span className="float-chip-title">Đã xác thực</span>
                                    <span className="float-chip-sub">Garage uy tín</span>
                                </span>
                            </span>
                            <Shot n={1} alt="Màn hình chính ứng dụng Garage Việt" className="shot--hero" />
                        </div>
                    </div>
                </section>

                {/* ---------------- Trust strip ---------------- */}
                <section className="trust">
                    <div className="lp-container trust-grid">
                        {TRUST.map(({ Icon, title, desc }) => (
                            <div className="trust-item" key={title} data-reveal>
                                <span className="trust-icon"><Icon /></span>
                                <div>
                                    <p className="trust-title">{title}</p>
                                    <p className="trust-desc">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="lp-container">
                        <p className="brand-strip-label">Hỗ trợ hầu hết các hãng xe phổ biến tại Việt Nam</p>
                        <BrandMarquee />
                    </div>
                </section>

                {/* ---------------- Features ---------------- */}
                <section id="features" className="features lp-section">
                    <div className="lp-container">
                        <SectionHeader
                            eyebrow="Tính năng"
                            title="Mọi thứ chủ xe cần, trong một ứng dụng"
                            desc="Từ tìm garage, nhận báo giá đến đặt lịch và đánh giá — tinh gọn, minh bạch và nhanh chóng."
                        />
                        <div className="feature-grid">
                            {FEATURES.map(({ Icon, title, desc }) => (
                                <article className="feature-card" key={title} data-reveal>
                                    <span className="feature-icon"><Icon /></span>
                                    <h3>{title}</h3>
                                    <p>{desc}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---------------- Showcase (real screenshots) ---------------- */}
                <section id="showcase" className="showcase lp-section">
                    <div className="lp-container">
                        <SectionHeader
                            eyebrow="Trải nghiệm"
                            title="Nhìn tận mắt cách Garage Việt hoạt động"
                            desc="Giao diện thật từ ứng dụng — nhanh chóng, đơn giản, minh bạch và nhiều ưu đãi."
                        />
                        <div className="showcase-rows">
                            {SHOWCASE.map((row, i) => (
                                <div className={`showcase-row${i % 2 ? " is-reversed" : ""}`} key={row.n} data-reveal>
                                    <div className="showcase-media">
                                        <Shot n={row.n} alt={`${row.tag} – Garage Việt`} className="shot--showcase" />
                                    </div>
                                    <div className="showcase-text">
                                        <span className="showcase-tag">{row.tag}</span>
                                        <h3>{row.title}</h3>
                                        <p>{row.desc}</p>
                                        <ul className="showcase-points">
                                            {row.points.map((pt) => (
                                                <li key={pt}><ICheck className="ic-check" /> {pt}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---------------- How it works ---------------- */}
                <section id="how" className="how lp-section">
                    <div className="lp-container">
                        <SectionHeader
                            eyebrow="Cách hoạt động"
                            title="Chỉ 3 bước đơn giản"
                            desc="Từ khi đăng yêu cầu đến khi tìm được garage hoàn hảo — chưa đến vài phút."
                        />
                        <div className="how-grid">
                            {STEPS.map(({ Icon, n, title, desc }, i) => (
                                <div className="how-step" key={n} data-reveal>
                                    {i < STEPS.length - 1 && <span className="how-connector" aria-hidden />}
                                    <article className="how-card">
                                        <div className="how-card-top">
                                            <span className="how-icon"><Icon /></span>
                                            <span className="how-num">{n}</span>
                                        </div>
                                        <h3>{title}</h3>
                                        <p>{desc}</p>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---------------- FAQ ---------------- */}
                <section id="faq" className="faq lp-section">
                    <div className="lp-container lp-container--narrow">
                        <SectionHeader
                            eyebrow="Câu hỏi thường gặp"
                            title="Giải đáp nhanh mọi thắc mắc"
                            desc="Vẫn cần hỗ trợ? Tải app và nhắn cho đội ngũ chăm sóc khách hàng."
                        />
                        <div className="faq-list" data-reveal>
                            {FAQS.map((item, i) => (
                                <details className="faq-item" key={i}>
                                    <summary>
                                        <span>{item.q}</span>
                                        <span className="faq-chevron"><IArrowDown /></span>
                                    </summary>
                                    <div className="faq-answer">{item.a}</div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---------------- Final CTA ---------------- */}
                <section className="cta lp-section">
                    <div className="lp-container">
                        <div className="cta-card" data-reveal>
                            <div className="cta-card-glow cta-card-glow--blue" aria-hidden />
                            <div className="cta-card-glow cta-card-glow--yellow" aria-hidden />
                            <div className="cta-card-grid" aria-hidden />
                            <div className="cta-card-inner">
                                <span className="cta-eyebrow">
                                    <IRocket /> Sẵn sàng độ xe theo cách thông minh?
                                </span>
                                <h2 className="cta-title">
                                    Tải <span className="cta-brand">Garage Việt</span> ngay hôm nay
                                </h2>
                                <p className="cta-desc">
                                    Hàng nghìn chủ xe đã tin dùng. Tải app để trải nghiệm cách tìm garage
                                    thông minh, nhanh và minh bạch.
                                </p>
                                <StoreButtons variant="onDark" />
                                <div className="cta-trust">
                                    <span><ITeam /> 10.000+ chủ xe</span>
                                    <span className="dot" />
                                    <span><IStarFill /> 4.8 / 5</span>
                                    <span className="dot" />
                                    <span><IShield /> Garage được xác thực</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* ---------------- Footer ---------------- */}
            <footer className="lp-footer">
                <div className="lp-container lp-footer-inner">
                    <div className="lp-footer-brand">
                        <Link to="/" className="lp-logo">
                            <img src={logoImg} alt="Garage Việt" />
                            <span className="lp-logo-text">
                                <span className="lp-logo-strong">Garage</span> Việt
                            </span>
                        </Link>
                        <p className="lp-footer-tagline">
                            Nền tảng kết nối chủ xe với mạng lưới garage ô tô uy tín trên toàn quốc.
                        </p>
                        <div className="lp-footer-social">
                            <a href={APP_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookOutlined /></a>
                            <a href={APP_LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><TikTokOutlined /></a>
                        </div>
                    </div>

                    <div className="lp-footer-col">
                        <h4>Khám phá</h4>
                        <a href="#features">Tính năng</a>
                        <a href="#showcase">Trải nghiệm</a>
                        <a href="#how">Cách hoạt động</a>
                        <a href="#faq">Câu hỏi</a>
                    </div>

                    <div className="lp-footer-col">
                        <h4>Pháp lý</h4>
                        <Link to="/garageviet-privacy-policy">Chính sách bảo mật</Link>
                        <Link to="/garageviet-operation-policy">Quy chế hoạt động</Link>
                        <Link to="/account-deletion">Xóa tài khoản</Link>
                    </div>

                    <div className="lp-footer-col">
                        <h4>Tải ứng dụng</h4>
                        <a href={APP_LINKS.ios} target="_blank" rel="noopener noreferrer"><AppleLogo className="footer-store-glyph" /> App Store</a>
                        <a href={APP_LINKS.android} target="_blank" rel="noopener noreferrer"><GooglePlayLogo className="footer-store-glyph" /> CH Play</a>
                    </div>
                </div>
                <div className="lp-container lp-footer-bottom">
                    <p>© {new Date().getFullYear()} Garage Việt. Tất cả quyền được bảo lưu.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
