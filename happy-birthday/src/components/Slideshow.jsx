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

const vidId = ["ek2PDE1cAyY", "2Vv-BfVoq4g",];

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
