import "./App.css";
import { Form } from "./components/Form";
import { Task } from "./components/Task";
function App() {
  return (
    <>
      <div className="App">
        <div className="form-container">
          <Form />
        </div>
        <div className="task-container">
          <Task />
        </div>
      </div>
    </>
  );
}

export default App;
