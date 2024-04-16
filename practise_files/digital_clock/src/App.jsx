import React from "react";
import { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [curTime, newTime] = useState(time);

  const UpdateTime = () => {
    newTime(new Date().toLocaleTimeString());
  };

  setInterval(UpdateTime, 1000);

  return (
    <>
      <h1>{curTime}</h1>
    </>
  );
};

export default App;
