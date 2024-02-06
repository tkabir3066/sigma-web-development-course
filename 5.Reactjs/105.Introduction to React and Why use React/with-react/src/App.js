import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
const App = () => {
  const [value, setValue] = useState(0);
  // const handleClick = () => {
  //   setValue((value) => value + 1);
  // };
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="counter">Count: {value}</div>
        <button onClick={() => setValue((value) => value + 1)}>Increase</button>
      </div>
    </>
  );
};

export default App;
