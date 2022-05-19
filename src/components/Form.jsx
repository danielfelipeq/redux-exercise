import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TASK",
      payload: {
        title,
        description,
        priority,
      },
    });
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleCheck = (e) => {
    setPriority(!priority);
  };

  return (
    <form action="">
      <br />
      <div>
        <input type="text" placeholder="Titulo" onChange={handleTitle} />
      </div>
      <div>
        <textarea
          placeholder="Descripcion"
          onChange={handleDescription}
        ></textarea>
      </div>
      <div>
        <input type="checkbox" id="radio" name="radio" onChange={handleCheck} />
        <label htmlFor="radio">Es prioridad</label>
        {/* <input type="radio" id="noradio" name="radio" />
        <label htmlFor="noradio">No es prioridad</label> */}
      </div>
      <div>
        <input type="submit" value="Enviar" onClick={handleClick} />
      </div>
    </form>
  );
};
