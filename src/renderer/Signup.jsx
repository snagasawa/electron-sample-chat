import React, { Component } from "react"
import { Link } from "react-router"

export default class Signup extends Compornent {
  render() {
    return (
      <div>
        <h2>Signup</h2>
        <Link to="/rooms">Create new account</Link>
        <Link to="/login">cancel</Link>
      </div>
    )
  }
}