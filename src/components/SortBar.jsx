import Button from "./ui/Button";

const SortBar = ({ sortBy, sortOrder, onSortByChange, onSortOrderChange }) => {
  return (
    <div className="flex gap-2 mb-4">
      <Button
        variant={sortBy === "title" ? "primary" : "secondary"}
        onClick={() => onSortByChange("title")}
      >
        Title
      </Button>
      <Button
        variant={sortBy === "date" ? "primary" : "secondary"}
        onClick={() => onSortByChange("date")}
      >
        Date
      </Button>
      <Button
        variant="secondary"
        onClick={() => onSortOrderChange(sortOrder === "asc" ? "desc" : "asc")}
      >
        {sortOrder === "asc" ? "Asc" : "Desc"}
      </Button>
    </div>
  );
};

export default SortBar;
