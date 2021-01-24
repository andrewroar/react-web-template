import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Content() {
  return (
    <div>
      <div className="main-items-div">
        <div
          className="main-items-div-div main-items-div-div-image"
          style={{
            "background-image":
              "url('https://images.unsplash.com/photo-1610538625499-635bf13427b4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1656&q=80')",
          }}
          alt="placeholding image"
          data-aos="fade-up"
          data-aos-once="true"
        ></div>
        <div className="main-items-div-div">
          <h2>Talk about your company</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
