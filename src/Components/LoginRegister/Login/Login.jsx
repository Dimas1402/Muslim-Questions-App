import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Navbar from '../../Navbar/Navbar'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import "./Login.css"

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
    padding: '20px',
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
    textCopyRight: {
      display: 'none'
    }
  }
}))



export default function Login (changeRegisters) {
  const classes = useStyles()
  const [changeRegister, setChangeRegister] = useState(false)

  

  const handleChangeRegister = () => {
    setChangeRegister(true)
  }

  const handleChangeLogin = () => {
    setChangeRegister(false)
  }

  return (
    <>
      <Navbar clickRegister={handleChangeRegister} clickImage={() => window.location.reload()} />
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <img
              className={classes.img}
              src={require('../../../Assets/imagelog.png')}
              alt=''
            ></img>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={changeRegister === true || changeRegisters === true? classes.paper2 :classes.paper} elevation={3}>
              <Typography className={classes.textComing} variant='h6'>
                <span style={{ fontWeight: 'bold', color: '#6C63FF' }}>
                  Selamat datang,
                </span>
                {changeRegister === true || changeRegisters === true
                  ? ' Silakan registrasi terlebih dahulu untuk mendaftarkan diri anda.'
                  : ' Silakan Login terlebih dahulu untuk memulai ujian.'}
              </Typography>
              <form className={classes.input} noValidate autoComplete='off'>
                <TextField
                  style={{ width: '90%' }}
                  id='outlined-basic'
                  label='Username'
                  variant='outlined'
                  type='Text'
                  require
                />
                {changeRegister === true || changeRegisters === true ? (
                  <TextField
                    style={{ width: '90%' }}
                    id='outlined-basic'
                    label='Email'
                    variant='outlined'
                    type='Email'
                    require
                  />
                ) : null}
                <TextField
                  style={{ width: '90%' }}
                  id='outlined-basic'
                  label='Password'
                  variant='outlined'
                  type='Password'
                  require
                />
                <Button
                  variant='contained'
                  color='primary'
                  href='#contained-buttons'
                >
                 {changeRegister === true || changeRegisters === true ? "Registrasi" : "Masuk"}
                </Button>
              </form>
              <p
                style={{ textAlign: 'right' }}
                className={classes.textRegister}
              >
               {changeRegister === true || changeRegisters === true ? "Sudah punya akun ?" : "Belum punya akun ?"} 
                <span
                  onClick={ changeRegister === false ? handleChangeRegister : handleChangeLogin}
                  style={{ color: '#6C63FF', cursor: 'pointer' }}
                >
                  {changeRegister === true || changeRegisters === true ? "Login" : "Register"}
                </span>
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
