import { useEffect, useState } from "react";
import { getTasks, saveTasks } from "./services/taskService";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  
  };

  const deleteTask = id => {
  setTasks(prev => prev.filter(task => task.id !== id));
};


  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Task Tracker</h1>

      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />

    </div>
  );
};

export default App;
