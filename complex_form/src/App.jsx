import React, { useState } from "react";

const App = () => {
  const [data, nextData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });

  const inputEvent = (received_data) => {
    // const value = received_data.target.value;
    // const name = received_data.target.name;

    const { value, name } = received_data.target;

    nextData((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
          email: preValue.email,
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
          email: preValue.email,
        };
      } else if (name === "email") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: value,
        };
      } else if (name === "phone") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: preValue.email,
          phone: value,
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
        <h1>{`Your phone no: ${data.phone}`}</h1>
        <input
          type="text"
          placeholder="Enter your first name"
          name="fName"
          onChange={inputEvent}
          value={data.fName}
        />
        <input
          type="text"
          placeholder="Enter your last name"
          name="lName"
          onChange={inputEvent}
          value={data.lName}
        />
        <input
          type="email"
          placeholder="Enter your e-mail"
          name="email"
          onChange={inputEvent}
          value={data.email}
        />
        <input
          type="tel"
          placeholder="Enter your phone number"
          name="phone"
          pattern="[0-9]{10}"
          onChange={inputEvent}
          value={data.phone}
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
