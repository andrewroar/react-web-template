import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Navitem from "./components/navitem";
import { ReactComponent as BellIicon } from "./components/icons/bell.svg";
import { ReactComponent as Arrowicon } from "./components/icons/arrow.svg";
import { ReactComponent as Cogicon } from "./components/icons/cog.svg";
import DropdownMenuArrow from "./components/dropdownmenuArrow";
import DropdownMenuBell from "./components/dropdownmenuBell";
import Slideimage from "./components/slideimage";
import Content_1 from "./components/content_1";
import Content_2 from "./components/content_2";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as CompanyIcon } from "./components/icons/facebook-icon.svg";
import Footer from "./components/footer";

//import Button from "./components/button";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <Navbar>
        <CompanyIcon className="company-icon" />

        <h1
          style={{
            color: "white",
            "margin-right": "auto",
            "margin-left": "auto",
            "text-align": "center",
            "justify-content": "center",
          }}
        >
          Welcome to My Website
        </h1>
        <Navitem icon={<Arrowicon />}>
          <DropdownMenuArrow />
        </Navitem>
      </Navbar>
      <div className="content-div">
        <Slideimage />
      </div>
      <div
        style={{
          width: "100%",
          height: "50px",
          "background-color": "#F8EFCE",
        }}
      ></div>
      <div className="content-div">
        <Content_1 />
      </div>
      <div
        style={{
          width: "100%",
          height: "50px",
          "background-color": "#F8EFCE",
        }}
      ></div>
      <div className="content-div">
        <Content_2 />
      </div>
      <div
        style={{
          width: "100%",
          height: "50px",
          "background-color": "#F8EFCE",
        }}
      ></div>
      <div className="footer-div">
        <div className="content-div">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
