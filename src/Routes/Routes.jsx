import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from '../Components/HomePage/HomePage'
import Login from '../Components/LoginRegister/Login/Login'
import Register from '../Components/LoginRegister/Register/Register'
import ListSoal from '../Components/ListSoal/ListSoal'
import MateriUmum from '../Components/Soal/MateriUmum/MateriUmum'
import MateriTauhid from '../Components/Soal/MateriTauhid/MateriTauhid'
import MateriAqidah from "../Components/Soal/MateriAqidah/MateriAqidah"
import MateriAkhlaq from '../Components/Soal/MateriAkhlaq/MateriAkhlaq'
import MateriFiqihDanMuamalah from '../Components/Soal/Materi fiqih dan muamalah/MateriFiqihDanMuamalah'
import SirahNabawi from "../Components/Soal/SirahNabawi/SirahNabawi"
import SirahSahabat from '../Components/Soal/SirahSahabat/SirahSahabat'

const Routes = () => {
  return (
    <Router>
      <Switch>
            <Route path='/listsoal' component={ListSoal} />
            <Route exact path='/' component={HomePage} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/materiumum' component={MateriUmum} />
            <Route path='/materitauhid' component={MateriTauhid} />
            <Route path='/materiaqidah' component={MateriAqidah} />
            <Route path='/materiakhlaq' component={MateriAkhlaq} />
            <Route path='/materifiqihdanmuamalah' component={MateriFiqihDanMuamalah} />
            <Route path='/materisirahnabawi' component={SirahNabawi} />
            <Route path='/materisirahsahabat' component={SirahSahabat} />
      </Switch>
    </Router>
  )
}

export default Routes
