const Input = ({ type = "text", value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default Input;
