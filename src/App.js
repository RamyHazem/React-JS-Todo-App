import { useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="grid place-items-center m-5 ">
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};
export default App;
