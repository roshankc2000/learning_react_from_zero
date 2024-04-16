import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

function App() {
  return (
    <>
      <h1 className="heading_style">Top Five Netflix shows:</h1>
      {Sdata.map((value) => {
        return (
          <Card
            sname={value.sname}
            imgsrc={value.imgsrc}
            title={value.title}
            link={value.link}
          />
        );
      })}

      {/* <Card
        sname={Sdata[0].sname}
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        link={Sdata[0].link}
      /> */}

      {/* <Card
        sname="Hello1"
        imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
        title="description"
        link="https://www.netflix.com/in/title/80990668?source=35"
      /> */}
    </>
  );
}

export default App;
