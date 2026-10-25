import hero from "../../assets/images/site/hero.webp";
import garage from "../../assets/images/site/garage.webp";
import accessories from "../../assets/images/site/accessories.webp";
import film from "../../assets/images/site/film.webp";
import cta from "../../assets/images/site/cta.webp";
import appHome from "../../assets/images/site/framed/home-guest.webp";
import appProduct from "../../assets/images/site/framed/product.webp";
import appQuotes from "../../assets/images/site/framed/quotes.webp";
import appFilm from "../../assets/images/site/framed/film.webp";
import appGarage from "../../assets/images/site/framed/garage-home.webp";
import opbf from "../../assets/images/products/opbf.webp";
import giapgam from "../../assets/images/products/giapgam.webp";
import cam70 from "../../assets/images/products/cam70.webp";
import film3m from "../../assets/images/products/film3m.webp";
import h50 from "../../assets/images/products/h50.webp";
import ex3 from "../../assets/images/products/ex3.webp";
import bacA from "../../assets/images/garages/bac-a.webp";
import anycare from "../../assets/images/garages/anycare.webp";
import quangFan from "../../assets/images/garages/quang-fan.webp";
import autoNguyen from "../../assets/images/garages/auto-nguyen.webp";
import icar from "../../assets/images/brands/icar.webp";
import techwrap from "../../assets/images/brands/techwrap.webp";
import aozoom from "../../assets/images/brands/aozoom.webp";
import vietmap from "../../assets/images/brands/vietmap.webp";
import m3 from "../../assets/images/brands/3m.webp";
import bFactory from "../../assets/images/brands/b-factory.webp";

// Ảnh nền gen bằng Codex; ảnh màn app chụp từ app thật trên iOS Simulator (9:41), ghép bezel iPhone 16 của Apple (skill iphone-mockup).
export const SITE_IMG = { hero, garage, accessories, film, cta, appHome, appProduct, appQuotes, appFilm, appGarage };

export const STATS = [
    { value: "500+", label: "Garage đối tác" },
    { value: "3.300+", label: "Chủ xe tin dùng" },
    { value: "16.000+", label: "Báo giá đã gửi" },
];

export const BRANDS = [
    { name: "ICAR", logo: icar },
    { name: "TechWrap", logo: techwrap },
    { name: "AOZOOM", logo: aozoom },
    { name: "Vietmap", logo: vietmap },
    { name: "3M", logo: m3 },
    { name: "B-Factory", logo: bFactory },
];

export const PRODUCTS = [
    { name: "Ốp Pin VinFast BF", img: opbf },
    { name: "Giáp gầm VF PRO", img: giapgam },
    { name: "Camera hành trình 70mai T400", img: cam70 },
    { name: "Phim cách nhiệt 3M", img: film3m },
    { name: "HUD Vietmap H50", img: h50 },
    { name: "Đèn AOZOOM EX3", img: ex3 },
];

export const GARAGES = [
    { name: "Bắc Á Auto", img: bacA, city: "Hà Nội", since: 2018, rating: "5,0", workers: 10 },
    { name: "Anycare Workshop", img: anycare, city: "Hà Nội", since: 2025, rating: "5,0", workers: 15 },
    { name: "Quang Fan Vít", img: quangFan, city: "Hà Nội", since: 2023, rating: "5,0", workers: 10 },
    { name: "Auto Nguyễn", img: autoNguyen, city: "TP.HCM", since: 2021, rating: "5,0", workers: 10 },
];

export const FAQ = [
    {
        q: "Giá niêm yết đã gồm công lắp chưa?",
        a: "Đã gồm. Với sản phẩm Mua & lắp, giá bạn thấy là giá trọn gói gồm sản phẩm chính hãng và công lắp tại garage đối tác.",
    },
    {
        q: "Đăng yêu cầu báo giá có mất phí không?",
        a: "Không. Đăng yêu cầu và nhận báo giá hoàn toàn miễn phí, bạn chỉ trả tiền khi chọn garage và đặt lịch.",
    },
    {
        q: "Làm sao biết garage có uy tín?",
        a: "Garage được kiểm tra hồ sơ, xưởng và tay nghề trước khi nhận đơn. Đánh giá chỉ đến từ khách đã hoàn thành đơn.",
    },
    {
        q: "Tôi muốn đổi lịch hoặc huỷ đơn?",
        a: "Bạn đổi lịch trong app trước 24 giờ. Chính sách huỷ đơn ghi rõ trong Quy chế hoạt động.",
    },
];
