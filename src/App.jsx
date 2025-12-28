import { useEffect, useState } from "react";
import { getTasks, saveTasks } from "./services/taskService";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import SearchInput from "./components/ui/SearchInput";
import SortBar from "./components/SortBar";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");

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
    const matchesFilter = filter === "All" || task.status === filter;

    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === "title") {
      if (sortOrder === "asc") return a.title.localeCompare(b.title);
      else return b.title.localeCompare(a.title);
    } else {
      if (sortOrder === "asc") return a.createdAt - b.createdAt;
      else return b.createdAt - a.createdAt;
    }
  });

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Task Tracker</h1>

      <TaskForm onAdd={addTask} />
      <div className="mb-4">
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <FilterBar
        tasks={filteredTasks}
        activeFilter={filter}
        onChange={setFilter}
      />

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
      />
    </div>
  );
};

export default App;
