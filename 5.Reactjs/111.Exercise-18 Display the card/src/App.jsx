import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./Cards";

const App = () => {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setCards(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        <Cards cards={cards} />
      </div>
    </>
  );
};

export default App;
