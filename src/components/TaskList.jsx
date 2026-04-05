import { useState } from "react";

const TaskList = ({ tasks, deleteTask, updateTask }) => {
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    return (
    <ul>
      {tasks.map(({ id, text }) => (
        <li key={id}>
          {editId === id ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => {
                updateTask(id, editText);
                setEditId(null);
              }}>
                Save
              </button>
            </>
          ) : (
            <>
              {text}
              <div style={{ display: "flex", gap: "8px" }}>
                <button onClick={() => {
                    setEditId(id);
                    setEditText(text);
                }}>
                Edit
              
              </button>
                <button onClick={() => deleteTask(id)}>
                    Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;