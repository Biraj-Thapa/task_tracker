const Button = ({
  children,
  type = "button",
  onClick,
  variant = "primary",
}) => {
  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-600 hover:bg-gray-700",
    danger: "bg-red-600 hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 text-white rounded ${styles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
