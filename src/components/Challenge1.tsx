import React, { useState } from "react";
import { getFibonacci, isFibonacci } from "../challenge1";

const Challenge1 = () => {
  const [fibonacciIndex, setFibonacciIndex] = useState<number>();
  const [inputNumber, setInputNumber] = useState<number>();

  return (
    <div>
      <div>
        {"The "}
        <input
          onChange={(e) => setFibonacciIndex(Number(e.target.value))}
          style={{ width: "15px" }}
        />
        {" number in the fibonacci sequence: " +
          (fibonacciIndex ? getFibonacci(fibonacciIndex) : "")}
      </div>
      <div>
        <input
          onChange={(e) => setInputNumber(Number(e.target.value))}
          style={{ width: "15px" }}
        />
        {" " +
          (typeof inputNumber === "number" ? isFibonacci(inputNumber) : "")}
      </div>
    </div>
  );
};

export default Challenge1;
