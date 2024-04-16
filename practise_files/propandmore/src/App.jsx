import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

function App() {
  return (
    <>
      <h1 className="heading_style">Top 5 Netflix shows: </h1>
      {/* map and without arrow function method*/}
      {/* {Sdata.map(function ncard(val, index, arr) {
        return (
          <Card
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        );
      })} */}

      {/* map + arrow function method*/}
      {Sdata.map((val, index, arr) => {
        return (
          <Card
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        );
      })}

      {/* normal method */}
      {/* <Card
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        link={Sdata[0].link}
      />
      <Card
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        link={Sdata[1].link}
      />
      <Card
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        sname={Sdata[2].sname}
        link={Sdata[2].link}
      />
      <Card
        imgsrc={Sdata[3].imgsrc}
        title={Sdata[3].title}
        sname={Sdata[3].sname}
        link={Sdata[3].link}
      />
      <Card
        imgsrc={Sdata[4].imgsrc}
        title={Sdata[4].title}
        sname={Sdata[4].sname}
        link={Sdata[4].link}
      /> */}
    </>
  );
}
export default App;
