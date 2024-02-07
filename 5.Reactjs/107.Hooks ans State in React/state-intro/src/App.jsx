import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <button
        onClick={() => setCount((count) => count - 1)}
        disabled={count <= 0}
      >
        Decrement
      </button>
      <button
        onClick={() => setCount((count) => count - count)}
        disabled={count === 0}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
