import React, { useState } from "react";

const App = () => {
  const [firstName, nextfName] = useState("");
  const [lastName, nextlName] = useState("");
  const [email, nextEmail] = useState("");
  const [message, nextMessage] = useState("");

  const emailFn = (received_data) => {
    nextEmail(received_data.target.value);
  };
  const fNameFn = (received_data) => {
    nextfName(received_data.target.value);
  };
  const lNameFn = (received_data) => {
    nextlName(received_data.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // let temp = `${nextEmail} ${nextfName} ${nextlName}`;
    let temp = `${email} ${firstName} ${lastName}`;
    nextMessage(temp);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>{`Hello ${message}`}</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={emailFn}
          value={email}
        />
        <input
          type="text"
          placeholder="first name"
          onChange={fNameFn}
          value={firstName}
        />
        <input
          type="text"
          placeholder="last name"
          onChange={lNameFn}
          value={lastName}
        />
        <button type="submit">submit 👍</button>
      </form>
    </>
  );
};

export default App;
