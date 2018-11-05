import React, { Component } from "react";
import "./App.css";
import Bday from "./containers/Bday.jsx"


export default class App extends Component {
  state = {
    change: false,
    name: "",
    error: false
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
    // <button onClick={event => this.clickStart(event)}> Button</button>
      <form onSubmit={event => this.clickStart(event)}>
        <label>
          Name:
              <input onChange={this.onChange} type="text" name="name" />
        </label>
        <input type="submit" name="submit" />
      </form>
    )
  }

  onChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  clickStart = (event) => {
    event.preventDefault()
    //check
    if(this.state.name === "dara"){
      this.setState(prevState => ({
        ...prevState,
        change:true
      }))
    } else {
      this.setState(prevState => ({
        ...prevState,
        error: true
      }))
    }
  }

  giveError = () => {
    return  (
      <span className="error">Error</span>
    )
  }

  render() {
    console.log(this.state)
    return (
        <div className="wrapper">
          {this.state.error === true ? this.giveError(): null }
          {this.state.name === "dara" && this.state.change === true ? this.renderCom():null}
          {/* render birthday if state is dara */}
          {this.state.change ? null : this.renderButton() }
         
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
