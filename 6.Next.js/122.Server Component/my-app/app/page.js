// "use client";
// import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import fs from "fs/promises";
export default function Home() {
  // const [count, setCount] = useState(0);

  console.log("Hey I am Tutul");
  const a = fs.readFile(".gitignore");
  a.then((e) => console.log(e.toString()));
  return (
    <div>
      <Navbar />
      <h2>I am a Component</h2>
      {/* <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button> */}
    </div>
  );
}
