import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!title.trim()) return;

    onAdd({
      id: Date.now(),
      title,
      status: "Pending"
    });

    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-4"
    >
      <Input
        placeholder="Enter task"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <Button type="submit" variant="primary">
        Add
      </Button>
    </form>
  );
};

export default TaskForm;
