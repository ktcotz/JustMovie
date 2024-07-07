import { useFormContext } from "./context/useFormContext";

export const FormTogglePassword = () => {
  const { isPasswordShow, togglePassword } = useFormContext();

  return (
    <button
      aria-label={`${isPasswordShow ? "Hide" : "Show"} password`}
      type="button"
      onClick={() => togglePassword()}
    >
      <img
        src={`./images/${isPasswordShow ? "icon-close-eye.svg" : "icon-eye.svg"}`}
        alt=""
        width={24}
        height={24}
        className="invert"
      />
    </button>
  );
};
