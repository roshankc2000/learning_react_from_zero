import React, { useState } from "react";

const App = () => {
  const [data, nextData] = useState({
    email: "",
    fName: "",
    lName: "",
  });

  const inputEvent = (received_data) => {
    // nextData(received_data.target.value);
    console.log(received_data.target.value);
    console.log(received_data.target.name);

    const value = received_data.target.value;
    const name = received_data.target.name;

    nextData((preValue) => {
      if (name === "email") {
        return {
          email: value,
          fName: preValue.fName,
          lName: preValue.lName,
        };
      } else if (name === "fName") {
        return {
          email: preValue.email,
          fName: value,
          lName: preValue.lName,
        };
      } else if (name === "lName") {
        return {
          email: preValue.email,
          fName: preValue.fName,
          lName: value,
        };
      }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("Form has been submitted");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>{`Hello ${data.fName} ${data.lName}`}</h1>
        <h1>{`Your email is: ${data.email}`}</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={inputEvent}
          value={data.email}
        />
        <input
          type="text"
          placeholder="first name"
          name="fName"
          onChange={inputEvent}
          value={data.fName}
        />
        <input
          type="text"
          placeholder="last name"
          name="lName"
          onChange={inputEvent}
          value={data.lName}
        />
        <button type="submit">submit 👍</button>
      </form>
    </>
  );
};

export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [firstName, nextfName] = useState("");
//   const [lastName, nextlName] = useState("");
//   const [email, nextEmail] = useState("");
//   const [message, nextMessage] = useState("");

//   const emailFn = (received_data) => {
//     nextEmail(received_data.target.value);
//   };
//   const fNameFn = (received_data) => {
//     nextfName(received_data.target.value);
//   };
//   const lNameFn = (received_data) => {
//     nextlName(received_data.target.value);
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();
//     // let temp = `${nextEmail} ${nextfName} ${nextlName}`;
//     let temp = `${email} ${firstName} ${lastName}`;
//     nextMessage(temp);
//   };
//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <h1>{`Hello ${message}`}</h1>
//         <input
//           type="email"
//           placeholder="Email"
//           onChange={emailFn}
//           value={email}
//         />
//         <input
//           type="text"
//           placeholder="first name"
//           onChange={fNameFn}
//           value={firstName}
//         />
//         <input
//           type="text"
//           placeholder="last name"
//           onChange={lNameFn}
//           value={lastName}
//         />
//         <button type="submit">submit 👍</button>
//       </form>
//     </>
//   );
// };

// export default App;
