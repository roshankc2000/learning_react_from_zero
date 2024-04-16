import React, { useState } from "react";

const App = () => {
  const [message, nextMssg] = useState();
  const [fullName, nextName] = useState("Admin");

  const InputEvent = (received_value) => {
    // let temp = received_value.target.value;
    // nextMssg(temp);
    // or
    nextMssg(received_value.target.value);
  };

  const onSubmit = () => {
    nextName(message);
  };

  return (
    <>
      <h1>{`Hello ${fullName}`}</h1>
      <input
        type="text"
        placeholder="Enter your name ..."
        onChange={InputEvent}
        value={message}
      />
      <button onClick={onSubmit}>Click me 😄</button>
    </>
  );
};

export default App;
