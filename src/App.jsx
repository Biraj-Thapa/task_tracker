import { useEffect, useState } from "react";
import { getTasks, saveTasks } from "./services/taskService";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  const toggleStatus = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Pending" ? "Done" : "Pending",
            }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    return task.status === filter;
  });

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Task Tracker</h1>

      <TaskForm onAdd={addTask} />
      <FilterBar
        tasks={filteredTasks}
        activeFilter={filter}
        onChange={setFilter}
      />
      <TaskList tasks={filteredTasks} onDelete={deleteTask} onToggle={toggleStatus} />
    </div>
  );
};

export default App;
