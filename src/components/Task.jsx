import React from "react";
import { useSelector } from "react-redux";

export const Task = () => {
  const tasks = useSelector((state) => state);
  return (
    <div>
      <h1>{tasks.title}</h1>
      <p>{tasks.description}</p>
      {tasks.priority && <p>Es prioridad</p>}
    </div>
  );
};
