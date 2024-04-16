import React, { useState } from "react";

const App = () => {
  const state = useState();

  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };

  const Reset = () => {
    setCount(0);
  };

  const DecNum = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <h1 style={{ fontSize: "4rem" }}>{count}</h1>
        <button onClick={IncNum}>+1</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={DecNum}>-1</button>
      </div>
    </>
  );
};

export default App;
