import "./App.css";
import { Form } from "./components/Form";
import { Task } from "./components/Task";
function App() {
  return (
    <div className="App">
      <Form />
      <div>
        <Task />
      </div>
    </div>
  );
}

export default App;
