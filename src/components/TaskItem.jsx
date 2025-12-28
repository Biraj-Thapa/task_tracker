import Button from "./ui/Button";

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className="flex justify-between items-center border p-2 rounded mb-2">
      <div>
        <p
          className={`font-medium ${
            task.status === "Done" ? "line-through text-gray-500" : ""
          }`}
        >
          {task.title}
        </p>

        <span className="text-sm text-gray-500">
          {task.status}
        </span>
      </div>

      <div className="flex gap-2">
        <Button
          variant="secondary"
          onClick={() => onToggle(task.id)}
        >
          {task.status === "Pending" ? "Done" : "Undo"}
        </Button>

        <Button
          variant="danger"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;
