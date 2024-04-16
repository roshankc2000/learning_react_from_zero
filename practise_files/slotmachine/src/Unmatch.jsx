import React from "react";
import SlotMachine from "./Slotmachine";

const Unmatch = (props) => {
  let x = props.x;
  let y = props.y;
  let z = props.z;

  return (
    <>
      <div className="slot_inner">
        <h1>
          {x} {y} {z}
        </h1>
        <h1>This is Not Matching.</h1>
        <hr />
      </div>
    </>
  );
};

export default Unmatch;
