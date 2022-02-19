import React from "react";
import "./cardList.css";

const Scroll = ({ children }) => {
  return <div className="scrollBar">{children}</div>;
};

export default Scroll;
