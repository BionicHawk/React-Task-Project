import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, settasks] = useState([]);

  function createTask(task) {
    if (tasks.length === 0) settasks([{id: 0, ...task}])
    else settasks([...tasks, { id: tasks[tasks.length - 1].id + 1, ...task }]);
  }

  function deleteTask(taskId) {
    settasks(
      tasks.filter((t) => {
        return t.id !== taskId;
      })
    );
  }

  useEffect(() => {
    settasks(data);
  }, []);
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
