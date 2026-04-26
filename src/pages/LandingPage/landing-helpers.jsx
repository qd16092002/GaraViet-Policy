import React, { useEffect, useRef, useState } from "react";

/**
 * Animated count-up triggered when element scrolls into view.
 * Uses IntersectionObserver + rAF; respects prefers-reduced-motion.
 */
export const CountUp = ({
    to = 0,
    from = 0,
    duration = 1600,
    suffix = "",
    prefix = "",
}) => {
    const ref = useRef(null);
    const [value, setValue] = useState(from);
    const startedRef = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const reduce =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const start = () => {
            if (startedRef.current) return;
            startedRef.current = true;
            if (reduce) {
                setValue(to);
                return;
            }
            const t0 = performance.now();
            const tick = (now) => {
                const p = Math.min(1, (now - t0) / duration);
                // ease-out cubic
                const eased = 1 - Math.pow(1 - p, 3);
                setValue(Math.round(from + (to - from) * eased));
                if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        };

        if (!("IntersectionObserver" in window)) {
            start();
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        start();
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.4 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [from, to, duration]);

    return (
        <span ref={ref}>
            {prefix}
            {value >= 1000 ? `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}K` : value}
            <em>{suffix}</em>
        </span>
    );
};

/* ===========================================================
   SVG Art – decorative, all marked aria-hidden
   =========================================================== */

export const SparkleIcon = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
            d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z"
            fill="currentColor"
        />
    </svg>
);

export const HeroDecor = () => (
    <svg
        className="hero-decor-svg"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
    >
        <defs>
            <linearGradient id="hd-line" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ff7a00" stopOpacity="0" />
                <stop offset="0.5" stopColor="#ff7a00" stopOpacity="0.5" />
                <stop offset="1" stopColor="#1677ff" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="hd-orb" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0" stopColor="#ffb066" stopOpacity="0.6" />
                <stop offset="1" stopColor="#ffb066" stopOpacity="0" />
            </radialGradient>
        </defs>

        {/* dotted curve */}
        <path
            className="hero-decor-dots"
            d="M40 480 C 220 380, 360 540, 560 380 S 760 240, 780 160"
            fill="none"
            stroke="url(#hd-line)"
            strokeWidth="2"
            strokeDasharray="2 8"
            strokeLinecap="round"
        />

        {/* sparkle particles */}
        <g className="hero-decor-sparkles">
            <path d="M120 120 l3 10 10 3 -10 3 -3 10 -3 -10 -10 -3 10 -3z" fill="#ff7a00" opacity="0.8" />
            <path d="M680 200 l2 7 7 2 -7 2 -2 7 -2 -7 -7 -2 7 -2z" fill="#1677ff" opacity="0.7" />
            <path d="M540 480 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2z" fill="#ff7a00" opacity="0.6" />
            <path d="M260 540 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2z" fill="#10b981" opacity="0.6" />
        </g>

        {/* mesh orb */}
        <circle cx="640" cy="120" r="120" fill="url(#hd-orb)" />
    </svg>
);

export const FeaturedCardDecor = () => (
    <svg className="featured-decor-svg" viewBox="0 0 400 240" aria-hidden>
        <defs>
            <radialGradient id="fc-glow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0" stopColor="#ff9a3c" stopOpacity="0.55" />
                <stop offset="1" stopColor="#ff9a3c" stopOpacity="0" />
            </radialGradient>
        </defs>
        <circle cx="350" cy="40" r="120" fill="url(#fc-glow)" />
        <g className="featured-sparkles">
            <path d="M310 60 l3 10 10 3 -10 3 -3 10 -3 -10 -10 -3 10 -3z" fill="#ffb066" />
            <path d="M250 30 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2z" fill="#ffd6a8" opacity="0.8" />
            <path d="M360 130 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2z" fill="#ffd6a8" opacity="0.7" />
        </g>
    </svg>
);

export const CtaWavesDecor = () => (
    <svg
        className="cta-waves-svg"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        aria-hidden
    >
        <defs>
            <linearGradient id="cw-1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#ff7a00" stopOpacity="0" />
                <stop offset="0.5" stopColor="#ff7a00" stopOpacity="0.6" />
                <stop offset="1" stopColor="#1677ff" stopOpacity="0" />
            </linearGradient>
        </defs>
        <path
            d="M0,120 C200,180 400,40 600,100 S1000,180 1200,80"
            fill="none"
            stroke="url(#cw-1)"
            strokeWidth="2"
        />
        <path
            d="M0,140 C220,80 400,200 620,120 S1000,40 1200,140"
            fill="none"
            stroke="url(#cw-1)"
            strokeWidth="1.5"
            opacity="0.6"
        />
    </svg>
);

export const SectionWaveDivider = ({ flip = false }) => (
    <svg
        className={`section-wave-divider${flip ? " section-wave-divider--flip" : ""}`}
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden
    >
        <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="currentColor"
        />
    </svg>
);

/* ===========================================================
   Bespoke icon library – Phosphor/Lucide style
   stroke 1.6, round caps + joins, 24x24, currentColor
   =========================================================== */

const iconBase = {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
};

export const IShield = (p) => (
    <svg {...iconBase} {...p}>
        <path d="M12 3l8 3v6c0 4.5-3.2 8.4-8 9-4.8-.6-8-4.5-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
    </svg>
);

export const IBolt = (p) => (
    <svg {...iconBase} {...p}>
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
);

export const IStar = (p) => (
    <svg {...iconBase} {...p}>
        <path d="M12 3l2.7 5.7 6.3.9-4.6 4.4 1.1 6.3L12 17.3 6.5 20.3l1.1-6.3L3 9.6l6.3-.9L12 3z" />
    </svg>
);

export const IStarFill = (p) => (
    <svg {...iconBase} fill="currentColor" stroke="none" {...p}>
        <path d="M12 3l2.7 5.7 6.3.9-4.6 4.4 1.1 6.3L12 17.3 6.5 20.3l1.1-6.3L3 9.6l6.3-.9L12 3z" />
    </svg>
);

export const IClock = (p) => (
    <svg {...iconBase} {...p}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
    </svg>
);

export const IChart = (p) => (
    <svg {...iconBase} {...p}>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
);

export const IHeart = (p) => (
    <svg {...iconBase} {...p}>
        <path d="M12 20.5s-7.5-4.6-7.5-10A4.5 4.5 0 0112 5.4a4.5 4.5 0 017.5 5.1c0 5.4-7.5 10-7.5 10z" />
    </svg>
);

export const IWallet = (p) => (
    <svg {...iconBase} {...p}>
        <path d="M3 7a2 2 0 012-2h13a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
        <path d="M3 9h18" />
        <circle cx="16" cy="13" r="1.2" fill="currentColor" stroke="none" />
    </svg>
);

export const IEdit = (p) => (
    <svg {...iconBase} {...p}>
        <path d="M4 20h4l10-10-4-4L4 16v4z" />
        <path d="M14 6l4 4" />
    </svg>
);

export const IChat = (p) => (
    <svg {...iconBase} {...p}>
        <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-7l-5 4v-4H6a2 2 0 01-2-2V6z" />
        <path d="M8 9h8M8 12h5" />
    </svg>
);

export const ICheck = (p) => (
    <svg {...iconBase} {...p}>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12.5l3 3 5-6" />
    </svg>
);

export const IRocket = (p) => (
    <svg {...iconBase} {...p}>
        <path d="M14 4c4 0 6 2 6 6 0 4-7 11-7 11s-7-7-7-11c0-4 2-6 6-6h2z" />
        <circle cx="13" cy="10" r="2" />
        <path d="M8 17l-3 3M11 20l-3 1M5 14l-1 3" />
    </svg>
);

export const IBell = (p) => (
    <svg {...iconBase} fill="currentColor" stroke="none" {...p}>
        <path d="M12 3a5 5 0 015 5v3l1.5 3.5a1 1 0 01-.9 1.5H6.4a1 1 0 01-.9-1.5L7 11V8a5 5 0 015-5z" />
        <path d="M10 18a2 2 0 004 0" />
    </svg>
);

export const IDollar = (p) => (
    <svg {...iconBase} {...p}>
        <path d="M12 2v20M16 6c-1.5-1.3-3-2-5-2-2.5 0-4 1.3-4 3 0 4 9 3 9 7 0 1.7-1.5 3-4 3-2 0-3.5-.7-5-2" />
    </svg>
);

export const ITeam = (p) => (
    <svg {...iconBase} {...p}>
        <circle cx="9" cy="9" r="3" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M3 19c0-2.7 2.7-5 6-5s6 2.3 6 5" />
        <path d="M14.5 14c2.6 0 4.5 1.7 4.5 4" />
    </svg>
);

export const ISparkleCorner = (p) => (
    <svg {...iconBase} fill="currentColor" stroke="none" {...p}>
        <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2z" />
    </svg>
);

/* ===========================================================
   Brand marquee – scrolling row of car brands (text wordmarks)
   =========================================================== */

const BRANDS = [
    "TOYOTA", "HONDA", "MAZDA", "FORD", "HYUNDAI",
    "MERCEDES-BENZ", "BMW", "KIA", "MITSUBISHI", "VINFAST",
];

export const BrandMarquee = () => {
    // Duplicate list for seamless infinite scroll
    const items = [...BRANDS, ...BRANDS];
    return (
        <div className="brand-marquee" aria-label="Hỗ trợ tất cả các hãng xe phổ biến">
            <div className="brand-marquee-track">
                {items.map((b, i) => (
                    <span key={i} className="brand-marquee-item">
                        {b}
                    </span>
                ))}
            </div>
            <span className="brand-marquee-fade brand-marquee-fade--left" aria-hidden />
            <span className="brand-marquee-fade brand-marquee-fade--right" aria-hidden />
        </div>
    );
};

/* ===========================================================
   Aurora animated mesh – CSS-only premium gradient backdrop
   =========================================================== */
export const AuroraMesh = () => (
    <div className="aurora-mesh" aria-hidden>
        <span className="aurora-blob aurora-blob--1" />
        <span className="aurora-blob aurora-blob--2" />
        <span className="aurora-blob aurora-blob--3" />
        <span className="aurora-blob aurora-blob--4" />
    </div>
);

