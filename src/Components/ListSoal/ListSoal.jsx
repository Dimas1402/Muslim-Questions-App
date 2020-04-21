import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Redirect } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button'
import {Link} from "react-router-dom"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none'
  },
  gridBox: {
    marginTop: '100px'
  },
  img: {
    width: '500px',
    height: '400px',
    marginTop: '70px'
  },
  list: {
    marginTop: '30px'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  listText: {
    transition: '0.5s',
    '&:hover': {
      color: '#6C63FF',
      padding: '5px',
      borderRadius: '5px'
    }
  },

  [theme.breakpoints.down('xs')]: {
    img: {
      width: '300px',
      height: '250px',
      marginTop: '-20px'
    }
  }
}))
const ListSoal = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [name, setName] = useState('')
  const [next, setNext] = useState(false)

  const handleSetName = e => {
    e.preventDefault()
    localStorage.setItem('name', name)
    setNext(true)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  // function ListItemLink (props) {
  //   return <ListItem button component='a' {...props} />
  // }
  if (!localStorage.getItem('uid')) {
    return <Redirect to='/' />
  }
  return (
    <>
      <Navbar logout='Logout' />
      <div className={classes.root}>
        <Grid container>
          <Grid className={classes.gridBox} item sm={6} xs={12}>
            <Paper className={classes.paper}>
              <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Silakan pilih soal yang mau anda kerjakan!{' '}
              </p>
              <List
                className={classes.list}
                component='nav'
                aria-label='main mailbox folders'
              >
                {[
                  'Materi Umum',
                  'Materi Tauhid',
                  'Materi Aqidah',
                  'Materi Akhlaq',
                  'Materi Fiqih dan Muamalah',
                  'Materi Sirah Nabawi',
                  'Materi Sirah Sahabat'
                ].map((text, index) => (
                  <ListItem
                    onClick={index === 0 ? handleOpen : null}
                    key={index}
                    button
                  >
                    <ListItemIcon>
                      <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText
                      className={index === 0 ? classes.listText : null}
                      primary={text}
                    />
                    <i style={{ fontSize: '10px' }}>
                      {index === 0 ? 'Tersedia' : 'Belum Tersedia'}
                    </i>
                  </ListItem>
                ))}
              </List>
              <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500
                }}
              >
                <Fade in={open}>
                  <div className={classes.paperModal}>
                    {next === false ? (
                      <>
                        {' '}
                        <form onSubmit={handleSetName}>
                          <TextField
                            style={{ width: '90%' }}
                            id='outlined-basic'
                            label='Masukan nama anda'
                            variant='outlined'
                            type='text'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                          />
                          <Button
                            style={{ marginTop: '10px' }}
                            variant='contained'
                            color='primary'
                            type='submit'
                          >
                            Lanjutkan
                          </Button>
                        </form>{' '}
                      </>
                    ) : (
                      <>
                        {' '}
                        <h2 id='transition-modal-title'>Hai {name},</h2>
                        <p id='transition-modal-description'>
                         Apakah anda siap untuk memulai ujian ?
                        </p>
                        <Link to="/materiumum">
                        <Button
                            style={{ marginTop: '10px' }}
                            variant='contained'
                            color='primary'
                            type='submit'
                          >
                            Siap
                          </Button>
                          </Link>
                      </>
                    )}
                  </div>
                </Fade>
              </Modal>
            </Paper>
          </Grid>
          <Grid className={classes.gridBox} item sm={6} xs={12}>
            <Paper className={classes.paper}>
              <img
                className={classes.img}
                src={require('../../Assets/listimg.png')}
                alt=''
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
export default ListSoal
