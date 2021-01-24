import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import background from "./images/example-image.jpg";
import background2 from "./images/example-image-2.jpg";
import Carousel from "react-bootstrap/Carousel";

const slideImages = [
  "./images/example-image.jpg",
  "images/example-image.jpg",
  "images/slide_4.jpg",
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

export default function Slideimage2() {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide slideshow-each-div">
          <div
            style={{ backgroundImage: `url(${background})` }}
            className="slideshow-img"
          >
            <span>Hello</span>
          </div>
        </div>
        <div className="each-slide slideshow-each-div">
          <div
            style={{ backgroundImage: `url(${background})` }}
            className="slideshow-img"
          >
            <span>Hello 2</span>
          </div>
        </div>
        <div className="each-slide slideshow-each-div">
          <div
            style={{ backgroundImage: `url(${background})` }}
            className="slideshow-img"
          >
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
}
