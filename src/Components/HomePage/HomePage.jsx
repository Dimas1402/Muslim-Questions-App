import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import "./HomePage.css"
import Animations from "./animations"
import Login from "../LoginRegister/Login/Login"
// import Drawer from "../Drawer/Drawer"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: '80px',
    boxShadow: 'none'
  },
  img: {
    width: '500px',
    height: '500px'
  },
  textJudul: {
    fontWeight: 'bold',
    fontSize: '40px',
    marginTop:"-50px"
  },
  textTitle: {
    fontSize: '20px',
    marginTop:"-60px"
  },
  buttonStart:{
    position:"absolute",
    left:"0",
    marginLeft:"0",
    marginTop:"30px",
    borderRadius:"10%"
  },
  boxText:{
    position:"relative",
    left:"60px"
  },
  [theme.breakpoints.down("xl")]:{
    boxText:{
      position:"relative",
      top:"70px",
      left:"80px"
    },
    textJudul: {
      fontSize: '80px'
    },
  },
  [theme.breakpoints.down("xs")]:{
    textJudul: {
      fontSize: '60px',
      marginLeft:"-70px",
    },
    textTitle: {
      fontSize: '15px',
      marginLeft:"-70px",
      marginTop:"-40px"
    },
    img: {
      width: '300px',
      height: '300px',
      marginTop:"60px"
    },
    buttonStart:{
      marginLeft:"-73px",
      cursor:"pointer",
      // backgroundColor:"none",
      "&:hover": {
        backgroundColor: "#6C63FF",
        color:"white"
      }
    },
    boxText:{
      width:"50%",
    },
    boxText2:{
      width:"90%",
    }
  }
}))

const HomePage = () => {
  const classes = useStyles()

const [clickLogin, setClickLogin] = useState(false)
const [clickRegister, setClickRegister] = useState(false)

  return (
    <React.Fragment>
      {clickLogin === true || clickRegister === true ? <Login changeRegister={clickRegister} /> : <> <Navbar clickRegister={() => setClickRegister(true)}  clickLogin={() => setClickLogin(true)} login="Login" register="Register" />
      <Container maxWidth='xl'>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <div className={classes.boxText}>
                <p
                  className={classes.textJudul}
                  style={{ textAlign: 'left', color: '#4db6ac' }}
                >
                  Muslim <span style={{ color: '#6C63FF' }}>Questions</span>
                </p>
                <div  className={classes.boxText2}>
                <p className={classes.textTitle} style={{ textAlign: 'left' }}>
                  Ini adalah aplikasi untuk menguji pengetahuan anda tentang
                  Islam. Kami akan memberikan pertanyaan kepada anda seputar
                  Islam lalu anda menjawabnya. Nilai akan diberikan setelah anda
                  telah mejawab semua pertanyaan yang kami berikan.{' '}
                </p>
                </div>
                <Button style={{cursor:"pointer",zIndex:"99"}} className={classes.buttonStart} variant='outlined' color='primary'>
                  Mulai Sekarang
                </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <img
                  className={classes.img}
                  src={require("../../Assets/img.png")}
                  alt=''
                />
              </Paper>
            </Grid>
          <Animations/>
          </Grid>
        </div>
       
      </Container> </> }
     

    </React.Fragment>
  )
}

export default HomePage
