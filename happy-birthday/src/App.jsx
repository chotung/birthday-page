import React, { Component } from "react";
import "./App.css";
// import Bday from "./components/Bday.jsx"
import Login from "./components/Login.jsx"
import VideoContainer from "./components/Video-container";

export default class App extends Component {
  state = {
    change: false,
    name: "Prof. Oak",
    error: false
  }

  onChange = (e) => {
    this.setState({
      name: e.target.value
    })
    this.setState(prevState => ({
      ...prevState,
      error: false
    }))
  }

  clickStart = (event) => {
    event.preventDefault()
    //check
    if(this.state.name.toLowerCase() === "dara"){
      this.setState(prevState => ({
        ...prevState,
        change:true,
        error:false
      }))
    } else {
      this.setState(prevState => ({
        ...prevState,
        error: true
      }))
    }
  }
 
  render() {
    return (
        <div className="wrapper" >
          {this.state.name.toLowerCase() === "dara" && this.state.change === true ?<VideoContainer />:null}
          {/* render birthday if state is dara */}
          {this.state.change ? null : <Login error={this.state.error}  clickStart={this.clickStart} onChange={this.onChange} name={this.state.name} /> }
         
        </div>
    )
  }
}


//testing three.js
// import React, { Component } from 'react';
// import * as THREE from 'three'

// class App extends Component {
//   render() {
//     const scene = new THREE.Scene()
//     return (
//       <div>
        
//       </div>
//     );
//   }
// }

// export default App;






// // add fireworks or something
// // might change the background
// // time render the transition
