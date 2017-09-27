import React from "react"
import { render } from "react-dom"
import { Router, Route, hashHistory } from "react-router"
import Login from "./Login"
import Signup from "./Signup"
import Rooms from "./Rooms"
import Room from "./Room"

const appRouting = (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
      <Route path="rooms" component={Rooms}>
        <Route path=":roomId" component={Room} />
      </Route>
    </Route>
  </Router>
)

if (!location.hash.length) {
  location.hash = "#/login"
}

render(appRouting, document.getElementById('app'))