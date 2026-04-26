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
