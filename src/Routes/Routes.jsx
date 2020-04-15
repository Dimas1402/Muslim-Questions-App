import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from '../Components/HomePage/HomePage'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </Router>
  )
}

export default Routes
