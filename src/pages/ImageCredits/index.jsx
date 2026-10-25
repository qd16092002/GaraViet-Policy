import React from "react";
import { useTranslation } from "react-i18next";
import PolicyHero from "../../components/policy/PolicyHero";
import credits from "../../data/car-image-credits.json";
import "./index.scss";

// Ghi công ảnh mẫu xe trong app (Wikimedia Commons, CC BY / CC BY-SA): bắt buộc theo giấy phép.
const ImageCredits = () => {
    const { t } = useTranslation();
    const byMake = credits.reduce((acc, c) => {
        (acc[c.make] = acc[c.make] || []).push(c);
        return acc;
    }, {});
    return (
        <div className="policy-page">
            <PolicyHero title={t("imageCredits.title")} subtitle={t("imageCredits.subtitle")} />
            <main className="credits">
                <p className="credits__note">{t("imageCredits.note")}</p>
                {Object.entries(byMake).map(([make, rows]) => (
                    <section key={make} className="credits__group">
                        <h2>{make}</h2>
                        <ul>
                            {rows.map((c) => (
                                <li key={c.file}>
                                    <span className="credits__model">{c.model}</span>
                                    <span className="credits__by">
                                        {t("imageCredits.photo")}{" "}
                                        <a href={c.source_url} target="_blank" rel="noopener noreferrer">{c.author}</a>
                                        {" · "}
                                        {c.license_url ? (
                                            <a href={c.license_url} target="_blank" rel="noopener noreferrer license">{c.license}</a>
                                        ) : (
                                            c.license
                                        )}
                                        {" · Wikimedia Commons"}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </main>
        </div>
    );
};

export default ImageCredits;
