import React from "react";

const TodoItem = () => {
  return (
    <>
      <div className="flex w-80 justify-between items-center font-semibold text-2xl mt-5">
        <h1 className="ml-5">Task</h1>
        <div className="">
          <button>
            <i className="fa fa-check mr-5"></i>
          </button>
          <button>
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
