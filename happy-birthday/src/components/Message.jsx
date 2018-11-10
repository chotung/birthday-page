import React from "react";

const Message = props => {
  return (
    <div id="happy-birthday" onClick={() => props.handleClick()}>
      <h1>Happy Birthday</h1>
      <h1>！！！みうめ！！！</h1>
      <h1>Click Here</h1>
      <p>before you click what you're going to see is respresentation of our time together</p>
      <h3>Thanks for the 3 years of happiness</h3>
      <h3>Here's to another 3 years and beyond!</h3>
    </div>
  );
};

export default Message;


// add fireworks or something