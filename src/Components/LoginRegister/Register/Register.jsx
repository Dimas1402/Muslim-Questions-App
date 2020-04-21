import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Navbar from '../../Navbar/Navbar'
import { Link } from 'react-router-dom'
import { database } from '../../../Config/Firebase'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import firebase from '../../../Config/Firebase'
import CircularProgress from '@material-ui/core/CircularProgress';
import {Redirect} from "react-router-dom"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  input: {
    marginTop: '-20px',
    margin: '40px',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  },
  img: {
    position: 'absolute',
    bottom: '0',
    left: '40px',
    width: '500px',
    height: '500px'
  },
  paper: {
    width: '90%',
    marginTop: '100px',
    padding: '20px'
  },
  paper2: {
    width: '90%',
    marginTop: '60px',
    padding: '20px'
  },
  textComing: {
    marginTop: '40px',
    margin: '40px',
    width: '70%',
    color: '#6a6a6d'
  },
  textRegister: {
    position: 'relative',
    fontWeight: 'bold',
    color: '#6a6a6d',
    fontSize: '10px'
  },
  buttonProgress: {
    color: "white",
  },
  [theme.breakpoints.down('xs')]: {
    img: {
      marginTop: '40px',
      height: '300px',
      width: '300px'
    },
    textRegister: {
      display: 'none'
    },
    paper: {
      boxShadow: 'none'
    },
    paper2: {
      boxShadow: 'none'
    },
    textCopyRight: {
      display: 'none'
    }
  }
}))

export default function Register () {
  const classes = useStyles()

  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState(' ')

  const initState = {
    username: '',
    email: '',
    password: ''
  }

  const [state, setState] = useState(initState)
  const [loading, setLoading] = React.useState(false);
  const [err,setErr] = useState(false)

  const notify = () => {
    toast.info('Selamat, anda telah terdaftar')
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true);
    const datauser = {
      email : state.email,
      password : state.password
    }
    database
      .ref('/muslim-apps-f8400')
      .push({
        state
      })
      .then(res => {
        console.log("succcess", res)
        const {email, password} = datauser
        localStorage.setItem('data', JSON.stringify(state))
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(res => {
            console.log('success2', res)
            notify()
            setState(initState)
            setLoading(false);
          }).catch(err => {
            setErr(true)
            setLoading(false);
          })
      })
      .catch(err => {
        console.log(err)
        setLoading(false);
       
      })
  }
if(localStorage.getItem("uid")){
  return <Redirect to="listsoal" />
}
  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <ToastContainer />
        <Grid container>
          <Grid item xs={12} sm={6}>
            <img
              className={classes.img}
              src={require('../../../Assets/imagelog.png')}
              alt=''
            ></img>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper2} elevation={3}>
              <Typography className={classes.textComing} variant='h6'>
                <span style={{ fontWeight: 'bold', color: '#6C63FF' }}>
                  Selamat datang,
                </span>
                Silakan registrasi terlebih dahulu untuk mendaftarkan diri anda.
              </Typography>
              <form
                onSubmit={handleSubmit}
                className={classes.input}
                autoComplete='off'
              >
                <TextField
                  style={{ width: '90%' }}
                  id='outlined-basic'
                  label='username'
                  variant='outlined'
                  type='text'
                  value={state.username}
                  onChange={e =>
                    setState({ ...state, username: e.target.value })
                  }
                  required
                />
                <TextField
                  style={{ width: '90%' }}
                  id='outlined-basic'
                  label='email'
                  variant='outlined'
                  type='email'
                  value={state.email}
                  onChange={e => setState({ ...state, email: e.target.value })}
                  required
                />
                <TextField
                  style={{ width: '90%' }}
                  id='outlined-basic'
                  label='password'
                  variant='outlined'
                  type='password'
                  value={state.password}
                  onChange={e =>
                    setState({ ...state, password: e.target.value })
                  }
                  required
                />
                {err === true ? <p style={{color:"red", fontSize:"10px"}} >password minimal 6 karakter</p> : null}
                <Button variant='contained' color='primary' type='submit'>
                {loading === true ? <CircularProgress size={24} className={classes.buttonProgress} />: "Registrasi"}
                </Button>
              </form>
              <p
                style={{ textAlign: 'right' }}
                className={classes.textRegister}
              >
                Sudah punya akun ?
                <Link to='/login'>
                  <span style={{ color: '#6C63FF', cursor: 'pointer' }}>
                    Login
                  </span>
                </Link>
              </p>
            </Paper>
            <p
              className={classes.textCopyRight}
              style={{
                textAlign: 'center',
                marginTop: '40px',
                color: '#6a6a6d'
              }}
            >
              Copyright © 2020 Dimas Anugerah P.
            </p>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
