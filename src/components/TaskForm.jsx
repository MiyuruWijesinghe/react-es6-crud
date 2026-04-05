import { useState } from "react";

const TaskForm = ({ addTask }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input) return;

        addTask(input);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter task..."
            />
            <button>Add</button>
        </form>
    )
}

export default TaskForm;