import Button from "./ui/Button";

const FILTERS = ["All", "Pending", "Done"];

const FilterBar = ({ activeFilter, onChange }) => {
  return (
    <div className="flex gap-2 mb-4">
      {FILTERS.map(filter => (
        <Button
          key={filter}
          variant={activeFilter === filter ? "primary" : "secondary"}
          onClick={() => onChange(filter)}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};

export default FilterBar;
