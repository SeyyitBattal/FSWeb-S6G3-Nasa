import React, { useEffect, useState } from "react";
import "./App.css";
import MainArea from "./MainArea";
import ManuelData from "./ManuelData";
import MyRightSide from "./MyRightSide";

function App() {
  return (
    <div className="App">
      <div className="myHeader">Header Bölümü</div>
      <hr />
      <div className="mainArea">
        <div className="myLeftSide">Sol taraftaki Side Bar</div>
        <div className="myRightSide">
          <MyRightSide />
        </div>
      </div>
      <hr />
      <div className="myFooter">Footer Bölümü</div>
    </div>
  );
}

export default App;
