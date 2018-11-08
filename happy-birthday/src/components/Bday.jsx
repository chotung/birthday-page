//Black background transition HAPPY BIRTHDAY!!!
// timed transition + onclick transition
import React, { Component } from 'react'
// import './bday.css'
import  Message from './Message.jsx'
import Slideshow from './Slideshow.jsx'
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
    // console.log("im clicking")
    this.setState({
      happy:false,
      nextSlide: true
    })
  }



  render() {
    return (
    <div >
      {this.state.nextSlide ? <Slideshow/> : null}
      {this.state.happy ? <Message handleClick={this.handleClick}/> : null}
    </div>
    )
  }
}

// swap out the Happy container have it render as it's own component???