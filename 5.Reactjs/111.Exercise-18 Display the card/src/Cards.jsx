import React from "react";
import Card from "./Card";

const Cards = ({ cards }) => {
  return (
    <div className="cards">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default Cards;
