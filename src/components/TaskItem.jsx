import Button from "./ui/Button";

const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="flex justify-between items-center border p-2 rounded mb-2">
      <div>
        <p className="font-medium">{task.title}</p>
        <span className="text-sm text-gray-500">{task.status}</span>
      </div>

      <Button
        variant="danger"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default TaskItem;
