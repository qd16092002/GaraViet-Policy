import { useTranslation } from "react-i18next";

// Trang chủ chỉ có tiếng Việt: header/footer ở đó khoá tiếng Việt để không lệch với nội dung.
export const useSiteT = (lockVietnamese) => {
    const { t, i18n } = useTranslation();
    return lockVietnamese ? i18n.getFixedT("vi") : t;
};
