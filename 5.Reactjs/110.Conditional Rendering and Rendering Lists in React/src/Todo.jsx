import React, { useState } from "react";

const Todo = ({ todo }) => {
  return (
    <>
      <div className="todo">
        <h2>{todo.title}</h2>
        <p>{todo.desc}</p>
      </div>
    </>
  );
};

export default Todo;
