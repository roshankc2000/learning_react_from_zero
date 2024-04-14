import React, { useState } from "react";

const App = () => {
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("Click Me");

  const BgChange = () => {
    let newBg = "#34495e";
    setBg(newBg);
    setName("Changed");
  };

  const bggChange = () => {
    let newBg = "#f0f0f0";
    setBg(newBg);
    setName("Changess");
  };
  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={BgChange} onDoubleClick={bggChange}>
          {name}
        </button>
      </div>
    </>
  );
};

export default App;
