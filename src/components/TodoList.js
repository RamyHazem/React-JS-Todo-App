import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <h1 className="text-4xl font-semibold">My Tasks</h1>
      <h5 className="mt-2 items-center font-semibold opacity-50">
        2 of 7 Tasks Left
      </h5>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        type="text"
        className="border-b-2 border-black focus:outline-none w-80 mt-10"
        placeholder="Enter Todo..."
        onKeyPress={({ key, target }) => {
          if (key === "Enter") {
            setTodos([...todos, target.value]);
            setInputValue("");
          }
        }}
      />
      {todos.map((todo, i) => (
        <TodoItem
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          key={todo + i}
        />
      ))}
    </>
  );
};

export default TodoList;
