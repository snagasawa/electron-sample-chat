import React, { Component } from "React"
import { Link } from "react-router"

export default class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <Link to="/rooms">Login</Link>
        <Link to="/signup">Create new account</Link>
      </div>
    )
  }
}