import React, { useState } from "react";

const App = () => {
  const [data, nextData] = useState(0);

  const Incrementor = () => {
    let inc = data + 1;
    nextData(inc);
  };

  const Decrementor = () => {
    if (data == 0) {
      alert("Data connot be less than zero");
    } else {
      let dec = data - 1;
      nextData(dec);
    }
  };

  const Reset = () => {
    nextData(0);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h2 className="app_title">Counter_App</h2>
          <h1>{data}</h1>

          <div className="button_div">
            <button onClick={Incrementor}> + </button>
            <button onClick={Reset}> Reset </button>
            <button onClick={Decrementor}> - </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
