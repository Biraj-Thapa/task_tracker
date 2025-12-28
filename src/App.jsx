import { useEffect, useState } from "react";
import { getTasks, saveTasks } from "./services/taskService";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import SortBar from "./components/SortBar";
import SearchInput from "./components/ui/SearchInput";

const App = () => {
   const [tasks, setTasks] = useState(() => getTasks());
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");


  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => setTasks((prev) => [...prev, task]);
  const deleteTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id));
  const toggleStatus = (id) =>
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: t.status === "Pending" ? "Done" : "Pending" } : t
      )
    );

  const editTask = (id, newTitle) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, title: newTitle } : t)));

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter = filter === "All" || task.status === filter;
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === "title") {
      return sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    } else {
      return sortOrder === "asc"
        ? new Date(a.dueDate) - new Date(b.dueDate)
        : new Date(b.dueDate) - new Date(a.dueDate);
    }
  });

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Task Tracker</h1>

      <TaskForm onAdd={addTask} />
<div className="pb-5">
  <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
</div>
      

      <FilterBar activeFilter={filter} onChange={setFilter} />

      <SortBar
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSortByChange={setSortBy}
        onSortOrderChange={setSortOrder}
      />

      <TaskList
        tasks={sortedTasks}
        onDelete={deleteTask}
        onToggle={toggleStatus}
        onEdit={editTask}
      />
    </div>
  );
};

export default App;
