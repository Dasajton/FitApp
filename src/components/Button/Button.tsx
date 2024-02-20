export const Button = ({
  children,
  variant,
  size,
  additionalClasses,
  type,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  variant?: string;
  size?: string;
  additionalClasses?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  props?: any;
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-sky-500 hover:bg-blue-500";
      case "success":
        return "bg-green-600 hover:bg-green-700";
      case "warning":
        return "bg-yellow-500 hover:bg-yellow-600";
      case "danger":
        return "bg-red-600 hover:bg-red-700";
      default:
        return "bg-blue-600 hover:bg-blue-700";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "px-3 py-2 text-sm font-medium";
      case "md":
        return "px-6 py-3 text-base font-medium";
      case "lg":
        return "px-20 py-3 text-base font-medium";
      default:
        return "px-3 py-2 text-base font-medium";
    }
  };

  const buttonStyles = `rounded transition inline-flex justify-center outline-none text-white ${getVariantStyles()} ${getSizeStyles()}}`;

  return (
    <button
      onClick={onClick}
      type={type}
      className={` ${additionalClasses} ${buttonStyles}`}
      {...props}
    >
      {children}
    </button>
  );
};
