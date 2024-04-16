import React from "react";

const Match = (props) => {
    let { x, y, z } = props;

  return (
    <>
      <div className="slot_inner">
        <h1>
          {x} {y} {z}
        </h1>
        <h1>This is Matching.</h1>
        <hr />
      </div>
    </>
  );
};

export default Match;
