import React from "react";
import { ICONS } from "./icons";

// Markup lấy từ thư viện icon nội bộ (icons.js), không nhận dữ liệu người dùng.
const Icon = ({ name, size = 24, stroke, className }) => {
    const markup = stroke ? ICONS[name].replace(/stroke-width="[^"]+"/g, `stroke-width="${stroke}"`) : ICONS[name];
    return (
        <svg
            className={className}
            aria-hidden="true"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            dangerouslySetInnerHTML={{ __html: markup }}
        />
    );
};

export default Icon;
