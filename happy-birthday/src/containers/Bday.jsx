//Black background transition HAPPY BIRTHDAY!!!
// timed transition + onclick transition
import React, { Component } from 'react'
import './bday.css'


export default class Bday extends Component {
  // constructor(props) {
  //   super(props);
  // }
  timer = () => {
    setTimeout(() => this.timeInnerFunc(), 500);
    //will wait to render
    // use this to render the slideshow
  }

  timeInnerFunc = () => {
    console.log("Birthday Page")
    // alert("hello")
  }

  
  
  render() {

    return <div className="happy">
      hello
      {this.timer()}
    </div>
  }
}


