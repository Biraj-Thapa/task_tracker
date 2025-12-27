import { useEffect, useState } from "react";
import { getTasks, saveTasks } from "./services/taskService";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return (
    <div>
      <h1>Task Tracker</h1>
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </div>
  );
}

export default App