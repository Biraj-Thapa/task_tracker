import { useState, useEffect } from "react";
import Input from "./Input";
import { FaSearch } from "react-icons/fa";
import useDebounce from "../../hooks/useDebounce";

const SearchInput = ({ value, onChange, placeholder = "Search..." }) => {
  const [internalValue, setInternalValue] = useState(value);
  const debouncedValue = useDebounce(internalValue, 300);

  useEffect(() => {
    onChange({ target: { value: debouncedValue } });
  }, [debouncedValue, onChange]);

  return (
    <div className="relative w-full">
   
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="text-gray-400" />
      </div>

      <Input
        value={internalValue}
        onChange={(e) => setInternalValue(e.target.value)}
        placeholder={placeholder}
        className="pl-10 w-full"
      />
    </div>
  );
};

export default SearchInput;
