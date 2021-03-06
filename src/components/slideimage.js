import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import background from "./images/example-image.jpg";
import background2 from "./images/example-image-2.jpg";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

export default function Slideimage() {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide slideshow-each-div">
          <div
            className="slideshow-img"
            style={{
              backgroundImage: `url(${background2})`,
            }}
          >
            <span
              style={{
                color: "black",
                width: "40%",
                margin: "auto",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              luctus quis urna eu dapibus. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </span>
          </div>
        </div>
        <div className="each-slide slideshow-each-div">
          <div
            className="slideshow-img"
            style={{
              backgroundImage: `url(${background})`,
            }}
          >
            <span
              style={{
                color: "white",
                width: "40%",
                margin: "auto",
              }}
            >
              Put your message to your client in here
            </span>
          </div>
        </div>

        <div className="each-slide slideshow-each-div">
          <div
            className="slideshow-img"
            style={{
              backgroundImage: `url(${background2})`,
            }}
          >
            <div
              style={{
                color: "black",
                width: "40%",
                margin: "auto",
              }}
            >
              <span>More Demo Text</span>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}
