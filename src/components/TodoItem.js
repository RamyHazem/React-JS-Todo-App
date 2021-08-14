import React from "react";

const TodoItem = ({ todo, todos, setTodos }) => {
  return (
    <>
      <div className="flex w-80 justify-between items-center font-semibold text-2xl mt-5">
        <h1 className="ml-5 break-all" value={todo}>
          {todo}
        </h1>
        <div>
          <button
            onClick={({ target }) => {
              const button = target.parentElement;
              const parentDiv = button.parentElement;
              const todoItem = parentDiv.previousSibling;
              if (todoItem.classList.contains("line-through")) {
                todoItem.classList.remove("line-through");
                todoItem.classList.remove("opacity-50");
              } else {
                todoItem.classList.add("line-through");
                todoItem.classList.add("opacity-50");
              }
            }}
          >
            <i className="fa fa-check mr-5"></i>
          </button>
          <button
            onClick={({ target }) => {
              const button = target.parentElement;
              const parentDiv = button.parentElement;
              const todoItem = parentDiv.previousSibling;
              setTodos(todos.filter((todo) => todo !== todoItem.innerText));
            }}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
