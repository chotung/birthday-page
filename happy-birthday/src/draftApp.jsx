import React, { Component } from "react";
import "./App.css";
import Bday from "./containers/Bday.jsx"
import Login from "./containers/Login.jsx"


export default class App extends Component {
  state = {
    term: '',
    filterBy: 'name'
  }


  handleClick = (e, Bday) => {
    e.preventDefault()
    if (this.state.term.toLowerCase() === "dara") {
      console.log("hitting condition onclick")
      // return <Bday />
    }
 
  }
 
  handleChange = (e) => {
    // setState of term
    this.setState({
      term: e.target.value
    })
    // console.log("state", this.state.term)
    // console.log("eventTargetValue", e.target.value.toLowerCase());

  }

//if the state = dara render

  render() {
    // console.log(this.state)
    return (
        <div className="wrapper">
          <Login handleClick={this.handleClick} handleChange={this.handleChange} searchTerm={this.state.term} />
        </div>
    )
  }
}

//change the state to match the target value onChange set state
// on the click checks the state


//click button then






// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// add fireworks or something
// might change the background
// time render the transition
