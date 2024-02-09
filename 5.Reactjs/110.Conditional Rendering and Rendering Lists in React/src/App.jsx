import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [count, setCount] = useState(0);
  const [showBtn, setShowBtn] = useState(false);
  const [todos, setTodos] = useState([
    { title: "Hey", desc: "I am a good" },
    { title: "Hey another todo", desc: "I am a good too" },
    { title: "Hey grocery todo", desc: "I am a good but i am a grocery todo" },
  ]);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {showBtn ? (
        <button>Show button is True</button>
      ) : (
        <button>Show button is false</button>
      )}

      {/* {showBtn && (
        <button>I will be shown only when another button is clicked</button>
      )} */}

      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setShowBtn(!showBtn)}>Toggle</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
