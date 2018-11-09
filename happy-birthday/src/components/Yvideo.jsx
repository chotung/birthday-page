import React from 'react'
import YouTube from 'react-youtube'


function Yvideo(props) {
  return (
    <YouTube videoId={props.videoId} opts={props.opts} onEnd={props.onEnd}/>
      
  )
}

export default Yvideo
