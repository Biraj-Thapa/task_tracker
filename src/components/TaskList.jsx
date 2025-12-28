import { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

const TaskList = ({ tasks, onDelete, onToggle, onEdit }) => {
  return (
    <div className="flex flex-col gap-2">
      {tasks.length === 0 && <p className="text-gray-500">No tasks found</p>}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

const TaskItem = ({ task, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);

  const saveEdit = () => {
    onEdit(task.id, editValue.trim() || "Untitled");
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center border p-2 rounded">
      <div className="flex flex-col flex-1">
        {isEditing ? (
          <Input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={saveEdit}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
          />
        ) : (
          <span
            className={`cursor-pointer ${
              task.status === "Done" ? "line-through text-gray-400" : ""
            }`}
          >
            {task.title}
          </span>
        )}
        <span className="text-sm text-gray-500">
          Due: {task.dueDate || "N/A"}
        </span>
      </div>

      <div className="flex gap-2">
        <Button
          variant={task.status === "Pending" ? "secondary" : "primary"}
          onClick={() => onToggle(task.id)}
        >
          {task.status}
        </Button>

        {!isEditing && (
          <Button variant="secondary" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        )}

        <Button variant="danger" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TaskList;
