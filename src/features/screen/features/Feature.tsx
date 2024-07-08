import { useTranslation } from "react-i18next";
import { featuresData } from "./data";

type FeatureProps = {
  icon: string;
  title: (typeof featuresData)[number]["title"];
  description: (typeof featuresData)[number]["description"];
};

export const Feature = ({ icon, title, description }: FeatureProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <img
        src={icon}
        alt={title}
        className="mb-8 invert"
        width={64}
        height={64}
      />
      <h2 className="mb-4 text-xl font-semibold text-slate-100">{t(title)}</h2>
      <p className="text-slate-50">{t(description)}</p>
    </div>
  );
};
