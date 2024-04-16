import React from "react";
import SlotMachine from "./Slotmachine";

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to{" "}
        <span style={{ fontWeight: "bold", backgroundColor: "#e0e0e0" }}>
          Slot machine game
        </span>{" "}
        🎰
      </h1>

      <div className="slot_inner">
        <SlotMachine x="😂" y="🥲" z="😂" />
        <SlotMachine x="🤣" y="🥹" z="🤣" />
        <SlotMachine x="🤣" y="🥹" z="😇" />
        <SlotMachine x="😂" y="😂" z="😂" />
      </div>
    </>
  );
};

export default App;
