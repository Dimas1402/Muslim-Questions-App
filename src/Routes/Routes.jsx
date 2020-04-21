import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from '../Components/HomePage/HomePage'
import Login from '../Components/LoginRegister/Login/Login'
import Register from '../Components/LoginRegister/Register/Register'
import ListSoal from '../Components/ListSoal/ListSoal'
import MateriUmum from '../Components/Soal/MateriUmum/MateriUmum'

const Routes = () => {
  return (
    <Router>
      <Switch>
            <Route path='/listsoal' component={ListSoal} />
            <Route exact path='/' component={HomePage} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/materiumum' component={MateriUmum} />
      </Switch>
    </Router>
  )
}

export default Routes
