import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="this is card 1" description="Card 1 description" />
        <Card title="this is card 2" description="Card 2 description" />
        <Card title="this is card 3" description="Card 3 description" />
        <Card title="this is card 4" description="Card 4 description" />
      </div>
      <Footer />
    </>
  );
};

export default App;
