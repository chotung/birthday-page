import React, { Component } from "react";
import "./App.css";
// import Bday from "./components/Bday.jsx"
import Login from "./components/Login.jsx"
import Youtube from "./components/Youtube";

export default class App extends Component {
  state = {
    change: false,
    name: "",
    error: false
  }

  onChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  clickStart = (event) => {
    event.preventDefault()
    //check
    if(this.state.name.toLowerCase() === "charlie"){
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
          {this.state.name.toLowerCase() === "charlie" && this.state.change === true ?<Youtube />:null}
          {/* render birthday if state is dara */}
          {this.state.change ? null : <Login error={this.state.error}  clickStart={this.clickStart} onChange={this.onChange} /> }
         
        </div>
    )
  }
}


//change the state to match the target value onChange set state
// on the click checks the state


// //click button then






// // import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// // add fireworks or something
// // might change the background
// // time render the transition
