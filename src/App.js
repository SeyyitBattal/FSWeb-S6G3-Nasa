import React, { useEffect, useState } from "react";
import "./App.css";
import MainArea from "./MainArea";
import ManuelData from "./ManuelData";
import MyRightSide from "./MyRightSide";

function App() {
  return (
    <body>
      <div className="App selector-for-some-widget container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="https://www.nasa.gov/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <img
              src="nasa-logo.png"
              class="bi me-2"
              width={150}
              height={75}
            ></img>
            <span class="fs-1 text-info">NASA</span>
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                Home
              </a>
            </li>
          </ul>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                Space
              </a>
            </li>
          </ul>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                Articles
              </a>
            </li>
          </ul>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                About
              </a>
            </li>
          </ul>
        </header>

        <div className="mainArea">
          <div className="myLeftSide">
            <a href="#">Home</a>
            <a href="#">Space</a>
            <a href="#">Articles</a>
            <a href="#">About</a>
          </div>
          <div className="myRightSide">
            <MyRightSide />
          </div>
        </div>
        <hr />
        <div className="myFooter">
          <div></div>
          <button type="button" class="btn btn-outline-primary footerButton">
            Primary
          </button>
          <button type="button" class="btn btn-outline-secondary footerButton">
            Secondary
          </button>
          <button type="button" class="btn btn-outline-success footerButton">
            Success
          </button>
          <button type="button" class="btn btn-outline-danger footerButton">
            Danger
          </button>
          <button type="button" class="btn btn-outline-warning footerButton">
            Warning
          </button>
          <button type="button" class="btn btn-outline-info footerButton">
            Info
          </button>
          <button type="button" class="btn btn-outline-light footerButton">
            Light
          </button>
          <button type="button" class="btn btn-outline-dark footerButton">
            Dark
          </button>
        </div>
      </div>
    </body>
  );
}

export default App;
