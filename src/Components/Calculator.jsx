import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";

const Calculator = ({ calculatorKeys }) => {
  const [getKeyClick, setKeyClick] = useState("");
  const onClick = (e) => {
    e.preventDefault();
    if (e.target.value === "C") return setKeyClick("");
    if (e.target.value === "=") {
      try {
        setKeyClick(eval(getKeyClick));
      } catch (error) {
        setKeyClick("error");
      }
      return;
    }

    setKeyClick((getKeyClick) => getKeyClick + e.target.value);
  };
  return (
    <div style={{}}>
      <Display getKeyClick={getKeyClick} />
      {calculatorKeys.map((items, index) => {
        return (
          <Button
            key={index}
            index={index}
            keyPad={items.keyCal}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

export default Calculator;
