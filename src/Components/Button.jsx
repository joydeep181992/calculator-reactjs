import React from "react";

const Button = ({ keyPad, onClick, index }) => {
  debugger;
  return (
    <>
      &nbsp;
      <button
        value={keyPad}
        onClick={onClick}
        style={{ width: "114px", height: "30px" }}
      >
        {keyPad}
      </button>
      {index > 0 && index % 3 === 2 && (
        <>
          {" "}
          <br></br> <br></br>
        </>
      )}
    </>
  );
};

export default Button;
