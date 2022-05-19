import React from "react";
import { useSelector } from "react-redux";

export const Task = () => {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);
  return (
    <>
      {tasks.map((task, i) => (
        <div key={i}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.priority ? "Prioridad" : "No prioridad"}</p>
        </div>
      ))}
    </>
  );
};
