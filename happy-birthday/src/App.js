import React, { Component } from "react";
import "./App.css";
import Bday from "./containers/bday"


export default class App extends Component {
  state = {
    change: false
  }

  renderCom = () => {
    return (
      <div>
        <Bday />
      </div>
    )
  }

  renderButton = () => {
    return (
    <button onClick={event => this.clickStart(event)}> Button</button>
    )
  }


  clickStart = (event) => {
    console.log(event.target)
    this.setState({
      change: true
    })
  }

  render() {
    console.log(this.state)
    return (
        <div className="wrapper">
          {this.state.change? this.renderCom():null}
          {this.state.change ? null : this.renderButton() }

         
        </div>
    )
  }
}










// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// add fireworks or something
// might change the background
// time render the transition
