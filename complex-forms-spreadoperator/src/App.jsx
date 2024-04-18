import React, { useState } from "react";

const App = () => {
  const myObj = {
    fName: "",
    lName: "",
    email: "",
    phone: "",
  };
  const [data, nextData] = useState(myObj);

  const inputEvent = (received_data) => {
    const { value, name } = received_data.target;

    nextData((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("Form has been submitted");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>{`Hello ${data.fName} ${data.lName}`}</h1>
        <h1>{`Your email is : ${data.email}`}</h1>
        <h1>{`Your phone no : ${data.phone}`}</h1>
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
//   const myObj = {
//     fName: "",
//     lName: "",
//     email: "",
//     phone: "",
//   };
//   const [data, nextData] = useState(myObj);

//   const inputEvent = (received_data) => {
//     const { value, name } = received_data.target;

//     nextData((preValue) => {
//       if (name === "fName") {
//         return {
//           fName: value,
//           lName: preValue.lName,
//           email: preValue.email,
//           phone: preValue.phone,
//         };
//       } else if (name === "lName") {
//         return {
//           fName: preValue.fName,
//           lName: value,
//           email: preValue.email,
//           phone: preValue.phone,
//         };
//       } else if (name === "email") {
//         return {
//           fName: preValue.fName,
//           lName: preValue.lName,
//           email: value,
//           phone: preValue.phone,
//         };
//       } else if (name === "phone") {
//         return {
//           fName: preValue.fName,
//           lName: preValue.lName,
//           email: preValue.email,
//           phone: value,
//         };
//       }
//     });
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();
//     alert("Form has been submitted");
//   };

//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <h1>{`Hello ${data.fName} ${data.lName}`}</h1>
//         <h1>{`Your email is: ${data.email}`}</h1>
//         <h1>{`Your phone no: ${data.phone}`}</h1>
//         <input
//           type="text"
//           placeholder="Enter your first name"
//           name="fName"
//           onChange={inputEvent}
//           value={data.fName}
//         />
//         <input
//           type="text"
//           placeholder="Enter your last name"
//           name="lName"
//           onChange={inputEvent}
//           value={data.lName}
//         />
//         <input
//           type="email"
//           placeholder="Enter your e-mail"
//           name="email"
//           onChange={inputEvent}
//           value={data.email}
//         />
//         <input
//           type="tel"
//           placeholder="Enter your phone number"
//           name="phone"
//           pattern="[0-9]{10}"
//           onChange={inputEvent}
//           value={data.phone}
//         />
//         <button type="submit">submit 👍</button>
//       </form>
//     </>
//   );
// };

// export default App;
