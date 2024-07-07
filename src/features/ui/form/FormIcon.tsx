type FormIconProps = {
  src: string;
  alt: string;
  label: string;
};

export const FormIcon = ({ src, alt, label }: FormIconProps) => {
  return (
    <button aria-label={label} type="button">
      <img src={src} alt={alt} width={24} height={24} className="invert" />
    </button>
  );
};
