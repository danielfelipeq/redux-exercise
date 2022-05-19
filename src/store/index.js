import { createStore } from "redux";
const initialTask = {
  title: "",
  description: "",
  priority: null,
};
const reducer = (state = initialTask, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        title: action.payload.title,
        description: action.payload.description,
        priority: action.payload.priority,
      };
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
