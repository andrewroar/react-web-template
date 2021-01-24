import React, { useState } from "react";

export default function Content() {
  return (
    <div>
      <div className="main-items-div">
        <div className="main-items-div-div">
          <h2>Talk about your team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div
          className="main-items-div-div main-items-div-div-image"
          alt="placeholding image"
          style={{
            "background-image":
              "url('https://www.popsci.com/resizer/8OQN_ZZnLJ6B_jiNxtl6ORFqkvM=/1034x689/cloudfront-us-east-1.images.arcpublishing.com/bonnier/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg')",
          }}
          data-aos="fade-up"
          data-aos-once="true"
        ></div>
      </div>
    </div>
  );
}
