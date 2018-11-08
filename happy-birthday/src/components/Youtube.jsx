// import React from "react";
import YouTube from "react-youtube";
import Bday from "./Bday.jsx"
import Overlay from "./Overlay.jsx"


// const Youtube = () => {
//   return (
//     <div className="video-container">
//       <Overlay />
//       <YouTube videoId="iWZmdoY1aTE" opts={opts} 
//       onEnd={() => onEnd()}
//       />
//       {/* {render message conditionally after the video is done} */}
//     </div>
//   );
// };

// const onEnd = () => {
//     alert("hello")
// }

// const opts = {
//   height: "100%",
//   width: "100%",
//   playerVars: {
//     autoplay: 1,
//     controls: 0,
//     loop: 1
//   }
// };




//think about coverting into a class function for state?
// export default Youtube;

import React, { Component } from 'react'

export default class Youtube extends Component {
    state = {
        videoOver: false,
        overlayOn: true
    }

    onVideoEnd = () => {
        this.setState(prevState => ({
            videoOver: !prevState.videoOver,
            overlayOn: false
        }))
        // console.log("video over", this.state.videoOver)
    }

    render() {
        const opts = {
            height: "100%",
            width: "100%",
            playerVars: {
                autoplay: 1,
                controls: 0,
                loop: 1
            }
        };
    return (
        <div className="video-container">
            {this.state.overlayOn ? <Overlay /> : null}
            {this.state.videoOver ? <Bday /> :<YouTube videoId="QohH89Eu5iM" opts={opts}
                onEnd={() => this.onVideoEnd()}
            />}
            {/* {render message conditionally after the video is done} */}
        </div>
    )
  }
}


 

