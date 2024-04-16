import React from "react";
import Match from "./Match";
import Unmatch from "./Unmatch";

// const SlotMachine = (props) => {
//   let x = props.x;
//   let y = props.y;
//   let z = props.z;
//
// // let {x,y,z} = props;
//
//   if (x === y && y === z) {
//     return (
//       <>
//         <div className="slot_inner">
//           <h1>
//             {x} {y} {z}
//           </h1>
//           <h1>This is Matching.</h1>
//           <hr />
//         </div>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <div className="slot_inner">
//           <h1>
//             {x} {y} {z}
//           </h1>
//           <h1>This is Not Matching.</h1>
//           <hr />
//         </div>
//       </>
//     );
//   }
// };

const SlotMachine = (props) => {
  let x = props.x;
  let y = props.y;
  let z = props.z;

  let isTrue = x === y && y === z;

  return isTrue ? <Match x={x} y={y} z={z} /> : <Unmatch x={x} y={y} z={z} />;
};
export default SlotMachine;
