import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold">My Tasks</h1>
      <h5 className="mt-2 items-center font-semibold opacity-50">
        2 of 7 Tasks Left
      </h5>
      <input
        type="text"
        className="border-b-2 border-black focus:outline-none w-80 mt-10"
        placeholder="Enter Todo..."
      />
      <TodoItem />
    </>
  );
};

export default TodoList;
