import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./styles/main.scss"
import Routes from './Routes'
import UserContextProvider from './context/UserContext'

ReactDOM.render(
  <UserContextProvider>
    <Router>
      <Routes />
    </Router>
  </UserContextProvider>,
  document.getElementById("root")
)
