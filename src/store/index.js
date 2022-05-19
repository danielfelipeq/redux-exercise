import { createStore } from "redux";
const initialTask = {
  /*   title: "",
  description: "",
  priority: null, */
  tasks: [],
};
const reducer = (state = initialTask, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
