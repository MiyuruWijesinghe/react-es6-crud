import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  // ES6: const + arrow + destructuring
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
    };

    // ES6 spread operator
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="app">
      <div className="card">
        <h1>React ES6 CRUD 🚀</h1>
        <TaskForm addTask={addTask} />
        <TaskList 
          tasks={tasks} 
          deleteTask={deleteTask} 
          updateTask={updateTask} 
        />
      </div>
    </div>
  );
}

export default App;