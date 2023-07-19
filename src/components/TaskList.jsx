import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({task}) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-400 text-sm">{task.description}</p>
      <button onClick={() => deleteTask(task.id)}
      className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400
      transition-all">
        Eliminar Tarea
      </button>
    </div>
  );
}

function TaskList() {
  const context = useContext(TaskContext);

  if (context.tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold
    text-center">No hay tareas aún</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {context.tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
