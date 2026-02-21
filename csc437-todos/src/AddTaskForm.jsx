import { useState } from "react";

function AddTaskForm({ onNewTask }) {
  const [newTaskName, setNewTaskName] = useState("");

  function handleAddTask() {
    onNewTask(newTaskName);
    setNewTaskName("");
  }

  return (
    <div>
      <input
        placeholder="New task name"
        aria-label="New task name"
        value={newTaskName}
        onChange={(event) => setNewTaskName(event.target.value)}
        className="mr-2 rounded border border-gray-300 px-2 py-1"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4 py-2 rounded"
      >
        Add task
      </button>
    </div>
  );
}

export default AddTaskForm;
