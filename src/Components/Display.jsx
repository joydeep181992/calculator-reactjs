import React from "react";

const Display = ({ getKeyClick }) => {
  return (
    <div
      style={{
        display: "block",
        height: "100px",
        width: "350px",
        border: "1px solid black",
        margin: "20px 0 20px 0",
        padding: "5px",
      }}
    >
      <h1 style={{ display: "inline-block" }}>
        {getKeyClick.length >= 20
          ? "Please enter the numbers less than 10"
          : getKeyClick}
      </h1>
    </div>
  );
};

export default Display;
