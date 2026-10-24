import React, { useEffect, useRef, useState } from "react";
import SiteHeader from "../../components/site/SiteHeader";
import SiteFooter from "../../components/site/SiteFooter";
import Icon from "../../components/site/Icon";
import { StoreButtons } from "../../components/site/StoreButton";
import { COMPANY } from "../../components/site/constants";
import { BRANDS, FAQ, GARAGES, PRODUCTS, SITE_IMG, STATS } from "./data";
import qrPath from "./qr";
import "./index.scss";

const money = (v) => `${v.toLocaleString("vi-VN")}đ`;

// Hiện dần từng khối khi cuộn tới (tắt khi người dùng giảm chuyển động).
const useReveal = () => {
    const ref = useRef(null);
    useEffect(() => {
        const els = ref.current.querySelectorAll("[data-reveal]");
        if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            els.forEach((el) => el.classList.add("is-in"));
            return undefined;
        }
        const io = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("is-in");
                        io.unobserve(e.target);
                    }
                }),
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);
    return ref;
};

const Phone = ({ src, alt, className = "" }) => (
    <div className={`phone ${className}`}>
        <div className="phone__screen">
            <img src={src} alt={alt} loading="lazy" />
            <span className="phone__island" />
        </div>
    </div>
);

const Check = ({ children }) => (
    <li className="check">
        <span className="check__dot">
            <Icon name="tick" size={13} stroke={2.4} />
        </span>
        {children}
    </li>
);

const Eyebrow = ({ children, yellow }) => <span className={`eyebrow${yellow ? " eyebrow--yellow" : ""}`}>{children}</span>;

const Hero = () => (
    <section className="lp-hero" style={{ "--hero-img": `url(${SITE_IMG.hero})` }}>
        <div className="lp-wrap lp-hero__inner">
            <div className="lp-hero__copy">
                <Eyebrow yellow>
                    <Icon name="verify" size={15} />
                    Nền tảng công nghệ cho ngành ô tô Việt Nam
                </Eyebrow>
                <h1>
                    Phụ kiện chính hãng,
                    <br />
                    <em>lắp tận garage</em> gần bạn
                </h1>
                <p>
                    Giá niêm yết đã gồm công lắp, cọc 10% giữ lịch. Hoặc đăng yêu cầu để nhận báo giá từ nhiều garage uy tín, chọn
                    nơi hợp ý.
                </p>
                <StoreButtons />
                <dl className="lp-stats">
                    {STATS.map((s) => (
                        <div key={s.label}>
                            <dt>{s.value}</dt>
                            <dd>{s.label}</dd>
                        </div>
                    ))}
                </dl>
            </div>
            <div className="lp-hero__art">
                <Phone src={SITE_IMG.appProduct} alt="Trang sản phẩm Mua & lắp" className="phone--back" />
                <Phone src={SITE_IMG.appHome} alt="Trang chủ ứng dụng Garage Việt" className="phone--front" />
                <div className="lp-hero__toast">
                    <span>
                        <Icon name="calendar" size={20} />
                    </span>
                    <span>
                        <strong>Đã giữ lịch lắp</strong>
                        <small>T7 17/10 · 09:00 · Bắc Á Auto</small>
                    </span>
                </div>
            </div>
        </div>
    </section>
);

const Brands = () => (
    <section className="lp-brands">
        <div className="lp-wrap lp-brands__inner">
            <span className="lp-brands__label">Phân phối chính hãng từ các nhãn hàng uy tín</span>
            <ul className="lp-brands__list">
                {BRANDS.map((b) => (
                    <li key={b.name}>
                        <img src={b.logo} alt="" width="32" height="32" loading="lazy" />
                        {b.name}
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

const WayCard = ({ id, dark, tag, tagIcon, title, desc, points, shot, shotAlt, cta, ctaHref }) => (
    <article id={id} className={`lp-way${dark ? " lp-way--dark" : ""}`} data-reveal>
        <div className="lp-way__body">
            <Eyebrow yellow={dark}>
                <Icon name={tagIcon} size={14} />
                {tag}
            </Eyebrow>
            <h3>{title}</h3>
            <p>{desc}</p>
            <ul className="checks">
                {points.map((p) => (
                    <Check key={p}>{p}</Check>
                ))}
            </ul>
            <a className={`btn ${dark ? "btn--yellow" : "btn--primary"}`} href={ctaHref}>
                {cta}
                <Icon name="arrow-right" size={18} stroke={2} />
            </a>
        </div>
        <div className="lp-way__shot">
            <Phone src={shot} alt={shotAlt} />
        </div>
    </article>
);

const TwoWays = () => (
    <section className="lp-section">
        <div className="lp-wrap">
            <header className="lp-head lp-head--center" data-reveal>
                <Eyebrow>Hai cách dùng Garage Việt</Eyebrow>
                <h2>Biết rõ món cần lắp, hoặc cần garage tư vấn</h2>
                <p>Một ứng dụng cho cả hai: mua phụ kiện có giá sẵn và lắp ngay, hoặc để garage báo giá cho việc khó định giá.</p>
            </header>
            <div className="lp-ways">
                <WayCard
                    id="mua-lap"
                    tag="MUA & LẮP"
                    tagIcon="cart"
                    title="Giá niêm yết, đã gồm công lắp"
                    desc="Chọn phụ kiện chính hãng, chọn garage đối tác và giờ lắp. Cọc 10% để giữ lịch, phần còn lại thanh toán tại xưởng."
                    points={["Không phát sinh chi phí ngoài giá niêm yết", "Bảo hành chính hãng, có hoá đơn", "Đổi lịch linh hoạt trước 24 giờ"]}
                    shot={SITE_IMG.appProduct}
                    shotAlt="Trang sản phẩm có giá niêm yết"
                    cta="Mua & lắp ngay"
                    ctaHref="#tai-app"
                />
                <WayCard
                    id="bao-gia"
                    dark
                    tag="NHẬN BÁO GIÁ"
                    tagIcon="send"
                    title="Đăng yêu cầu, garage tự báo giá"
                    desc="Mô tả việc cần làm và ảnh xe. Garage quanh bạn gửi báo giá trong vài giờ, bạn so sánh giá, đánh giá, khoảng cách rồi chọn."
                    points={["Miễn phí đăng yêu cầu", "Nhiều báo giá để so sánh song song", "Nhắn tin trực tiếp với garage"]}
                    shot={SITE_IMG.appQuotes}
                    shotAlt="Danh sách báo giá từ các garage"
                    cta="Đăng yêu cầu"
                    ctaHref="#tai-app"
                />
            </div>
        </div>
    </section>
);

const HotProducts = () => (
    <section className="lp-section lp-section--gray">
        <div className="lp-wrap">
            <header className="lp-head lp-head--row" data-reveal>
                <div>
                    <Eyebrow>Sản phẩm hot</Eyebrow>
                    <h2>Được chủ xe chọn lắp nhiều nhất</h2>
                </div>
                <a className="btn btn--outline lp-hide-sm" href="#tai-app">
                    Xem trong app
                    <Icon name="arrow-right" size={18} stroke={2} />
                </a>
            </header>
            <div className="lp-banner" data-reveal style={{ backgroundImage: `url(${SITE_IMG.accessories})` }}>
                <div>
                    <strong>100+ phụ kiện chính hãng</strong>
                    <span>Camera hành trình, HUD, đèn, màn Android, phim cách nhiệt, chìa khoá thông minh…</span>
                </div>
            </div>
            <ul className="lp-products">
                {PRODUCTS.map((p) => (
                    <li key={p.name} data-reveal>
                        <a href="#tai-app">
                            <span className="lp-products__img">
                                <img src={p.img} alt={p.name} loading="lazy" />
                                <span className="lp-products__tag">
                                    <Icon name="cart" size={12} />
                                    MUA & LẮP
                                </span>
                            </span>
                            <span className="lp-products__name">{p.name}</span>
                            <span className="lp-products__price">
                                <small>từ</small>
                                {money(p.price)}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

const STEPS = [
    { icon: "cart", title: "Chọn phụ kiện", text: "Xem giá niêm yết, thông số và đánh giá. Phim cách nhiệt tự chọn theo từng ô kính." },
    { icon: "shop", title: "Chọn garage & giờ lắp", text: "Garage đối tác gần bạn, đã xác thực tay nghề và có đánh giá thật." },
    { icon: "wallet", title: "Cọc 10% giữ lịch", text: "Thanh toán QR an toàn. Voucher được trừ ngay khi đặt." },
    { icon: "tick-circle", title: "Lắp & thanh toán phần còn lại", text: "Garage lắp đúng hẹn, bạn kiểm tra rồi mới thanh toán 90% tại xưởng." },
];

const Steps = () => (
    <section className="lp-section lp-section--dark">
        <div className="lp-wrap">
            <header className="lp-head" data-reveal>
                <Eyebrow yellow>Cách hoạt động</Eyebrow>
                <h2>Từ chọn món tới lắp xong, chỉ 4 bước</h2>
                <p>Không gọi điện hỏi giá, không chờ báo giá cho món đã có giá sẵn.</p>
            </header>
            <ol className="lp-steps">
                {STEPS.map((s, i) => (
                    <li key={s.title} data-reveal>
                        <span className="lp-steps__top">
                            <span className="lp-steps__icon">
                                <Icon name={s.icon} size={24} />
                            </span>
                            <span className="lp-steps__no">0{i + 1}</span>
                        </span>
                        <strong>{s.title}</strong>
                        <span>{s.text}</span>
                    </li>
                ))}
            </ol>
        </div>
    </section>
);

const FILM_POS = [
    ["Kính lái", true],
    ["Sườn trước", true],
    ["Sườn sau", true],
    ["Kính lưng", true],
    ["Kính nóc", false],
];

const Film = () => (
    <section id="phim" className="lp-section">
        <div className="lp-wrap lp-split">
            <div className="lp-split__art lp-split__art--film" data-reveal>
                <img className="lp-split__photo" src={SITE_IMG.film} alt="Kỹ thuật viên dán phim cách nhiệt" loading="lazy" />
                <Phone src={SITE_IMG.appFilm} alt="Màn tự chọn gói phim 3M" className="phone--float-right" />
            </div>
            <div className="lp-split__copy" data-reveal>
                <Eyebrow>Mới · Phim cách nhiệt 3M tự chọn</Eyebrow>
                <h2>Tự chọn gói phim cho từng ô kính, thấy giá ngay</h2>
                <p>Chọn dòng phim cho kính lái, sườn, kính lưng và kính nóc. Giá cập nhật theo lựa chọn, đang giảm 20% cho mọi gói.</p>
                <ul className="lp-chips">
                    {FILM_POS.map(([label, on]) => (
                        <li key={label} className={on ? "is-on" : ""}>
                            {label}
                        </li>
                    ))}
                </ul>
                <div className="lp-price">
                    <span>
                        <small>Gói Cao cấp IR Series · SUV</small>
                        <span>
                            <strong>11.440.000đ</strong>
                            <s>14.300.000đ</s>
                        </span>
                    </span>
                    <em>-20%</em>
                </div>
                <a className="btn btn--primary" href="#tai-app">
                    Chọn gói phim trong app
                    <Icon name="arrow-right" size={18} stroke={2} />
                </a>
            </div>
        </div>
    </section>
);

const Garages = () => (
    <section className="lp-section lp-section--gray">
        <div className="lp-wrap">
            <header className="lp-head" data-reveal>
                <Eyebrow>Garage uy tín</Eyebrow>
                <h2>Garage đối tác đã được xác thực</h2>
                <p>Mỗi garage được kiểm tra hồ sơ, xưởng và tay nghề trước khi nhận đơn. Đánh giá chỉ đến từ khách đã lắp thật.</p>
            </header>
            <ul className="lp-garages">
                {GARAGES.map((g) => (
                    <li key={g.name} data-reveal>
                        <span className="lp-garages__head">
                            <img src={g.img} alt="" width="52" height="52" loading="lazy" />
                            <span>
                                <strong>
                                    {g.name}
                                    <Icon name="verify" size={16} />
                                </strong>
                                <small>
                                    {g.city} · từ {g.since}
                                </small>
                            </span>
                        </span>
                        <span className="lp-garages__meta">
                            <span>
                                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24">
                                    <path d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95z" fill="#FBC512" />
                                </svg>
                                {g.rating}
                            </span>
                            <span>{g.workers} kỹ thuật viên</span>
                            <span>BH {g.warranty} tháng</span>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

const FOR_GARAGE = [
    "Nhận đơn Mua & lắp đã cọc, khách đến đúng hẹn",
    "Gửi báo giá cho yêu cầu quanh xưởng",
    "Nhập hàng giá đại lý: giáp gầm VF PRO, Smartkey…",
    "Phí nền tảng 10%, trừ thẳng tiền cọc khách đã trả",
];

const ForGarage = () => (
    <section id="garage" className="lp-section lp-section--dark">
        <div className="lp-wrap lp-split lp-split--reverse-sm">
            <div className="lp-split__art lp-split__art--garage" data-reveal>
                <img className="lp-split__photo" src={SITE_IMG.garage} alt="Kỹ thuật viên lắp camera hành trình" loading="lazy" />
                <Phone src={SITE_IMG.appGarage} alt="Trang chủ của garage trong ứng dụng" className="phone--float-left" />
            </div>
            <div className="lp-split__copy" data-reveal>
                <Eyebrow yellow>Dành cho garage</Eyebrow>
                <h2>Thêm khách mỗi tuần, không tốn chi phí quảng cáo</h2>
                <p>Đăng ký miễn phí, ký hợp đồng điện tử và bắt đầu nhận đơn sau khi được duyệt hồ sơ.</p>
                <ul className="checks checks--yellow">
                    {FOR_GARAGE.map((p) => (
                        <Check key={p}>{p}</Check>
                    ))}
                </ul>
                <div className="lp-actions">
                    <a className="btn btn--yellow" href="#tai-app">
                        Đăng ký garage đối tác
                        <Icon name="arrow-right" size={18} stroke={2} />
                    </a>
                    <a className="btn btn--ghost" href={COMPANY.zaloHref} target="_blank" rel="noopener noreferrer">
                        Zalo {COMPANY.zalo}
                        <Icon name="message" size={18} />
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const Faq = () => {
    const [open, setOpen] = useState(0);
    return (
        <section id="faq" className="lp-section">
            <div className="lp-wrap lp-faq">
                <header className="lp-head lp-faq__head" data-reveal>
                    <Eyebrow>Câu hỏi thường gặp</Eyebrow>
                    <h2>Giải đáp nhanh</h2>
                    <p>
                        Cần thêm hỗ trợ? Gọi <a href={COMPANY.phoneHref}>{COMPANY.phone}</a> hoặc email{" "}
                        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
                    </p>
                </header>
                <div className="lp-faq__list">
                    {FAQ.map((f, i) => {
                        const on = open === i;
                        return (
                            <div key={f.q} className={`lp-faq__item${on ? " is-open" : ""}`}>
                                <button type="button" aria-expanded={on} aria-controls={`faq-${i}`} onClick={() => setOpen(on ? -1 : i)}>
                                    {f.q}
                                    <span className="lp-faq__icon">
                                        <Icon name="add" size={18} stroke={2} />
                                    </span>
                                </button>
                                <div id={`faq-${i}`} className="lp-faq__answer" hidden={!on}>
                                    {f.a}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const Download = () => (
    <section className="lp-download-wrap">
        <div className="lp-wrap">
            <div id="tai-app" className="lp-download" style={{ backgroundImage: `url(${SITE_IMG.cta})` }} data-reveal>
                <div className="lp-download__copy">
                    <h2>Tải Garage Việt, lắp phụ kiện đầu tiên ngay tuần này</h2>
                    <p>Có trên iPhone và Android. Đăng ký bằng số điện thoại trong 30 giây.</p>
                    <StoreButtons />
                </div>
                <div className="lp-download__qr">
                    <svg role="img" aria-label="Mã QR tới garageviet.vn" viewBox={`0 0 ${qrPath.size} ${qrPath.size}`} shapeRendering="crispEdges">
                        <path d={qrPath.d} fill="#171717" />
                    </svg>
                    <span>Quét để tải app</span>
                </div>
            </div>
        </div>
    </section>
);

const LandingPage = () => {
    const ref = useReveal();
    return (
        <div className="landing" ref={ref}>
            <SiteHeader dark />
            <main>
                <Hero />
                <Brands />
                <TwoWays />
                <HotProducts />
                <Steps />
                <Film />
                <Garages />
                <ForGarage />
                <Faq />
                <Download />
            </main>
            <SiteFooter lockVietnamese />
        </div>
    );
};

export default LandingPage;
