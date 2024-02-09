import React from "react";

const Card = ({ card }) => {
  return (
    <>
      <div className="card">
        <h3>UserId:{card.userId}</h3>
        <h1>Title:{card.title}</h1>
        <p>Desc:{card.body}</p>
      </div>
    </>
  );
};

export default Card;
