import React from "react";
import Card from "./Card";
import "./cardList.css";

const CardList = ({ robots }) => {
  return (
    <div className="card-components-grid">
      {robots.map((user, i) => (
        <Card key={i} id={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
};

export default CardList;
