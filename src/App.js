import React from "react";
import Calculator from "./Components/Calculator";

const calculatorKeys = [
  {
    keyCal: "0",
    value: 0,
  },
  {
    keyCal: "1",
    value: 1,
  },
  {
    keyCal: "2",
    value: 2,
  },
  {
    keyCal: "3",
    value: 3,
  },
  {
    keyCal: "4",
    value: 4,
  },
  {
    keyCal: "5",
    value: 5,
  },
  {
    keyCal: "6",
    value: 6,
  },
  {
    keyCal: "7",
    value: 7,
  },
  {
    keyCal: "8",
    value: 8,
  },
  {
    keyCal: "9",
    value: 9,
  },
  {
    keyCal: "+",
    value: "+",
  },
  {
    keyCal: "-",
    value: "-",
  },
  {
    keyCal: "=",
    value: "=",
  },
  {
    keyCal: "*",
    value: "*",
  },
  {
    keyCal: "C",
    value: "C",
  },
];

function App() {
  return <Calculator calculatorKeys={calculatorKeys} />;
}

export default App;
