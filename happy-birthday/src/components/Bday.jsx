//Black background transition HAPPY BIRTHDAY!!!
// timed transition + onclick transition
import React, { Component } from 'react'
import './bday.css'


export default class Bday extends Component {
  state = {
    hello: false,
  }


  // timer = () => {
  //   setTimeout(this.timeInnerFunc(), 1000);
  //   //will wait to render
  //   // use this to render the slideshow
  // }

  // timeInnerFunc = () => {
  //  //changes state as a trigger
  //   this.setState({
  //     hello: true
  //   })
  // }

  componentDidMount() {
    this.timerID = setTimeout(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timerID);
  }

  tick() {
    this.setState({
      hello: true
    });
  }



  showHappy = () => {
    return (
      <div id="test">Hello</div>
    )
  }
  
  
  render() {
    return (
    <div className="happy-container">
      {this.state.hello ? this.showHappy() : null}
    </div>
    )
  }
}


