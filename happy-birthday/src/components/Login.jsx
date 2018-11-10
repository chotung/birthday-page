import React from 'react'
// import Yvideo from './Yvideo.jsx'
// import { useState } from "react";




const Login = (props) => {
    return (
        <div className="login">
          {props.error === true ? giveError(props) : null}
          <form onSubmit={event => props.clickStart(event)}>
              <input id="text-box" onChange={props.onChange} type="text" name="name" placeholder="Please Enter Your Name" />
              <input type="submit" name="submit" />
          </form>
      </div>
  )
}

const giveError = (props) => {
    console.log(props);
    return <div className="error">
        {props.name} has failed! <br /> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          Click here to proceed
        </a>
        {/* {troll()} */}
      </div>;
}

// possibly have a modal pop up to render

// const troll = () => {
//     //   console.log("clickign")
//     const opts = {
//         height: "400px",
//         width: "400px",
//         playerVars: {
//             autoplay: 1,
//             controls: 0,
//             loop: 1
//         }
//     };
    
//     return (
//         <Yvideo videoId="dQw4w9WgXcQ" opts={opts} onEnd={null} />
//         )
//     }
    

    export default Login