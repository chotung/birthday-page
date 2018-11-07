//Black background transition HAPPY BIRTHDAY!!!
// timed transition + onclick transition
import React, { Component } from 'react'
import './bday.css'
import YouTube from 'react-youtube'


export default class Bday extends Component {
  state = {
    happy: false,
    nextSlide:false
  }

  componentDidMount(event) {
    this.timerID = setTimeout(
      () => this.tick(),
      3000
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timerID);
  }

  tick() {
    this.setState({
      happy: true
    });
  }

  handleClick = () => {
    console.log("im clicking")
  }


  showHappy = () => {
    return (
      <div id="happy-birthday" onClick={() => this.handleClick()}>
        Happy Birthday
      <br></br>
        みうめ!!!
       <h2 onClick={() => this.handleClick()}>Click Here</h2>
      </div>
    )
  }
  _onReady = (event) => {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  }

  render() {
    // console.log(this.state)
    const opts = {
      height: '1000rem',
      width: '100%',
      playerVars: {
        autoplay: 1,
        controls: 0,
        loop: 1,
      }
    };

    return (
    <div className="happy-container">
      {this.state.happy ? this.showHappy() : null}
       <div className="video-container">
          <YouTube
            videoId="iWZmdoY1aTE"
            opts={opts}
            onReady={this._onReady}
          />
        </div>

    </div>
    )
  }
}

//  <iframe width="100%" height="1000px" src="https://www.youtube.com/embed/iWZmdoY1aTE?autoplay=1&controls=0&loop=1" frameBorder="0" 
//         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
//         >
//         </iframe>   