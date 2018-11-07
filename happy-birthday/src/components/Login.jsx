import React from 'react'

const Login = (props) => {
  return (
      <div className="login">
          {props.error === true ? giveError() : null}
          <form onSubmit={event => props.clickStart(event)}>
              <input id="text-box" onChange={props.onChange} type="text" name="name" placeholder="Please Enter Your Name" />
              <input type="submit" name="submit" />
          </form>
      </div>
  )
}

const giveError = (params) => {
    return (
        <span className="error">Error</span>
    )
}


export default Login