import { useState } from "react";
import { nanoid } from "nanoid";
import AddTaskForm from "./AddTaskForm";
import Modal from "./Modal";
import TodoItem from "./TodoItem";

const INITIAL_TASK_LIST = [
  { id: "todo-0", name: "Eat", isComplete: true },
  { id: "todo-1", name: "Sleep", isComplete: false },
  { id: "todo-2", name: "Repeat", isComplete: false },
];

function App() {
  const [taskList, setTaskList] = useState(INITIAL_TASK_LIST);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addTask(name) {
    const newTask = { id: nanoid(), name, isComplete: false };
    const taskListClone = [...taskList, newTask];
    setTaskList(taskListClone);
    setIsModalOpen(false);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = taskList.map((task) => {
      if (id === task.id) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });
    setTaskList(updatedTasks);
  }

  function deleteTask(id) {
    const updatedTasks = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTasks);
  }

  return (
    <main className="m-4">
      {" "}
      {/* Reminder: React code uses className instead of class */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 bg-blue-600 px-4 py-2 text-white"
      >
        Add Task
      </button>
      <Modal
        headerLabel="Add Task"
        isOpen={isModalOpen}
        onCloseRequested={() => setIsModalOpen(false)}
      >
        <AddTaskForm onNewTask={addTask} />
      </Modal>
      <section>
        <h1 className="text-xl font-bold">To do</h1>
        <ul>
          {taskList.map((task) => (
            <TodoItem
              key={task.id}
              id={task.id}
              name={task.name}
              isComplete={task.isComplete}
              onToggle={toggleTaskCompleted}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
