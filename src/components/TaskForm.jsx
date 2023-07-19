import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      title,
      description,
    };
    createTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>

        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Escribe tu tarea"
          value={title}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          autoFocus
        />

        <textarea
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Escribe la descripción"
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          value={description}
        />

        <button
        className="bg-indigo-500 px-3 py-1 text-white rounded-md 
        transition-all hover:bg-indigo-300"
        >
        Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
