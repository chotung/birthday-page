//Black background transition HAPPY BIRTHDAY!!!
// timed transition + onclick transition
import React, { Component } from 'react'
// import './bday.css'
import  Message from './Message.jsx'

export default class Bday extends Component {
  state = {
    happy: false,
    nextSlide:false
  }

  componentDidMount(event) {
    this.timerID = setTimeout(() => this.tick(), 0);
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



  render() {
    return (
    <div className="happy-container">
      {this.state.happy ? <Message handleClick={this.handleClick}/> : null}
    </div>
    )
  }
}

