import Input from "./Input";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="relative w-full">
 
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="text-gray-400" />
      </div>

      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="pl-10 w-full" 
      />
    </div>
  );
};

export default SearchInput;