import React from "react";
import "./App.css";

function App() {
  ////////////////

  return (
    <div className="App">
      <div className="myHeader">Header Bölümü</div>
      <hr />
      <div className="mainArea">
        <div className="myLeftSide">Sol taraftaki Side Bar</div>
        <div className="myRightSide">
          ANA BÖLÜM
          <p>
            NASA uygulamasını yapmak için README.md dosyasıdaki talimatları
            takip edin İyi eğlenceler!{" "}
            <span role="img" aria-label="go!">
              🚀
            </span>
            !
          </p>
        </div>
      </div>
      <hr />
      <div className="myFooter">Footer Bölümü</div>
    </div>
  );
}

export default App;
