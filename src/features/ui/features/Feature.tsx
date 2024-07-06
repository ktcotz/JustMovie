type FeatureProps = {
  icon: string;
  title: string;
  description: string;
};

export const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div>
      <img
        src={icon}
        alt={title}
        className="mb-8 invert"
        width={64}
        height={64}
      />
      <h2 className="mb-4 text-xl font-semibold text-slate-100">{title}</h2>
      <p className="text-slate-50">{description}</p>
    </div>
  );
};
