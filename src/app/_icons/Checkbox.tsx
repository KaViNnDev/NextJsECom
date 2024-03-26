import { type SVGProps } from ".";

export const CheckboxIcon: React.FC<SVGProps> = ({
  fill,
  height,
  onClick,
  width,
}) => {
  return (
    <svg
      className="text-white"
      height={height ?? "24px"}
      width={width ?? "24px"}
      fill={fill ?? "none"}
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
};
