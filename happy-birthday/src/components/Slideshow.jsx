import React, { Component } from "react";
import Arrow from "./Arrow.jsx";
// import ImageSlide from "./ImageSlide.jsx";
import './Slideshow.css'
import Yvideo from "./Yvideo.jsx";

// const imgUrls = [
//   "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781",
//   "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
//   "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
//   "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
//   "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
// ];


// ek2PDE1cAyY beautiful soul by jesse mccartney
// 2Vv-BfVoq4g   perfect by ed sheeran
// gH476CxJxfg bad day by daniel powter
//0yW7w8F2TVA say you won't let go by james arthur
// _WS9w10ygpU hello by addle
//9WbCfHutDSE dangerous woman by ariana grande
// im going to lose you  meghan trainor ft john legend its broken *revmoed
// 4bzIpYiPUUo litle did you know alex and serria
// dKM516jRXvQ perfect two auburn
//KkGVmN68ByU mercy by shawn mendes
//C_3d6GntKbk pillowtalk by zayn
//0RyInjfgNc4 lve on the brain by rihanna
//MkElfR_NPBI black magic by little mix
//gBAfejjUQoA touch by little mix
// UMPLmL2c5dY bedpeace jhene aiko
// T2sO8gK2IKk only you by little mix
// N6df6IZL-0k slow motion by trey songz *removed didn't work
// 8xg3vE8Ie_E love story taylor swift
// VY1eFxgRR-k back to you selena gomez
//oozQ4yV__Vw gone gone gone by  philiips phillips
//450p7goxZqg all of me by john legend
const vidId = [
  "_WS9w10ygpU",
  "ek2PDE1cAyY",
  "2Vv-BfVoq4g",
  "gH476CxJxfg",
  "0yW7w8F2TVA",
  "9WbCfHutDSE",
  "4bzIpYiPUUo",
  "dKM516jRXvQ",
  "KkGVmN68ByU",
  "lp-EO5I60KA",
  "C_3d6GntKbk",
  "0RyInjfgNc4",
  "MkElfR_NPBI",
  "gBAfejjUQoA",
  "UMPLmL2c5dY",
  "T2sO8gK2IKk",
  "8xg3vE8Ie_E",
  "VY1eFxgRR-k",
  "7gK3QD2QSRo",
  "oozQ4yV__Vw",
  "k6M5C-oKw9k",
  "450p7goxZqg"
];

export default class Slideshow extends Component {
  state = {
    currentImageIndex: 0
  };

  previousSlide = () => {
    const lastIndex = vidId.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  };

  nextSlide = () => {
    const lastIndex = vidId.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  };

  render() {
    const opts = {
      height: "100%",
      width: "100%",
      playerVars: {
        autoplay: 1,
        controls: 0,
      }
    };


    return (
      <div className="slide-container">
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;"
        />

        <Yvideo videoId={vidId[this.state.currentImageIndex]} opts={opts} onEnd={null} />
       
        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;"
        />
      </div>
    );
  }
}
