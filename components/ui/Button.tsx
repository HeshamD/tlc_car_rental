import Image from "next/image";
interface ButtonProps {
  type: "button" | "submit";
  title: string;
  icon?: string;
  varient: string;
}
const Button = ({ type, title, icon, varient }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${varient}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-now">{title}</label>
    </button>
  );
};

export default Button;
