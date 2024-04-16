import React, { useState } from "react";

const App = () => {
  const [FnameValue, nextFnameValue] = useState("");
  const [LnameValue, nextLnameValue] = useState("");
  const [FullName, nextFullName] = useState("");

  const Fname = (received_value) => {
    // let temp = received_value.target.value;
    // nextFnameValue(temp);
    // or
    nextFnameValue(received_value.target.value);
  };
  const LName = (received_value) => {
    nextLnameValue(received_value.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let message = `${FnameValue}  ${LnameValue}`;
    nextFullName(message);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>{`Hello ${FullName}`}</h1>
        <input
          type="text"
          placeholder="Enter your First name"
          onChange={Fname}
          value={FnameValue}
        />
        <input
          type="text"
          placeholder="Enter your Second name"
          onChange={LName}
          value={LnameValue}
        />
        <button type="submit">Click me 😄</button>
      </form>
    </>
  );
};

export default App;
