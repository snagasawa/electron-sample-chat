import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Login from './Login'
import Signup from './Signup'
import Rooms from './Rooms'
import Room from './Room'

import firebase from 'firebase/firebase-browser'

const appRouting = (
  <Router history={hashHistory}>
    <Route path='/'>
      <Route path='login' component={Login} />
      <Route path='signup' component={Signup} />
      <Route path='rooms' component={Rooms}>
        <Route path=':roomId' component={Room} />
      </Route>
    </Route>
  </Router>
)

if (!location.hash.length) {
  location.hash = '#/login'
}

const config = {
  apiKey: 'AIzaSyAG26sQ3UC2mn1q9kefQRxCRdqBJa8WrP4',
  authDomain: 'electron-chat-5c2da.firebaseapp.com',
  databaseURL: 'https://electron-chat-5c2da.firebaseio.com',
  projectId: 'electron-chat-5c2da',
  storageBucket: '',
  messagingSenderId: '1044208302385'
}
firebase.initializeApp(config)

render(appRouting, document.getElementById('app'))