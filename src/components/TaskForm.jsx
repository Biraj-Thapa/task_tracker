import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !dueDate) return;

    onAdd({
      id: Date.now(),
      title,
      status: "Pending",
      dueDate,
      createdAt: Date.now()
    });

    setTitle("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
      <Input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="date"
        placeholder="Due date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <Button type="submit" variant="primary">Add Task</Button>
    </form>
  );
};

export default TaskForm;
