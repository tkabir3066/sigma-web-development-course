import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <>
      <Navbar />
      <div className="container bg-violet-100 mx-auto my-5 p-5 rounded-xl min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input type="text" className="w-1/2" />
          <button className="bg-violet-800 hover:bg-violet-900 p-5 py-1 text-white rounded-md font-bold text-sm mx-5">
            Add
          </button>
        </div>
        <h2 className="text-lg font-bold">Your Todos</h2>

        <div className="todos">
          <div className="todo flex">
            <div className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </div>
            <div className="buttons">
              <button
                onClick={handleEdit}
                className="bg-violet-800 hover:bg-violet-900 p-5 py-1 text-white rounded-md font-bold text-sm mx-2"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-violet-800 hover:bg-violet-900 p-5 py-1 text-white rounded-md font-bold text-sm mx-2"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
