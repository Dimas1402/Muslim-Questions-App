import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Drawer from "../Drawer/Drawer"

// import DehazeIcon from '@material-ui/icons/Dehaze';
// import styled from "styled-components"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    display:"none",
  },
  title: {
    flexGrow: 1,
  },
  bgHeader:{
    background:"none",
    boxShadow:'none',
    color:"black",
    position:"fixed",
    transition:"0.5s"
  },
  bgHeader2:{
    color:"black",
    position:"fixed",
    transition:"0.5s",
    background:"white",
  },
  btnLoginRegis:{
    color:"#6C63FF"
  },
 [theme.breakpoints.down("xs")]:{
   menuButton:{
    marginRight: theme.spacing(2),
     display:"block"
   },
   btnLoginRegis:{
     display:"none"
   }
 }

}));  


// const styleIcon = styled()`
//   display:none;
// `;

export default function Navbar({login, register, clickLogin, clickImage, clickRegister}) {
  const classes = useStyles();
  const[nvbar, setNvbar] = useState(false)

useEffect(() => {
  window.addEventListener("scroll", listenScrollEvent);
})


const listenScrollEvent = () => {
  if (window.scrollY > 50) {
    setNvbar(true)
  } else {
    setNvbar(false)
  }
};
  // console.log(createMuiTheme())
  return (
    <div className={classes.root}>
      <AppBar className={nvbar === true ? classes.bgHeader2 : classes.bgHeader}  position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
          <img style={{cursor:"pointer"}} onClick={clickImage} style={{width:'90px', height:"90px"}} src={require("../../Assets/logo.png")} alt=""/>
          </Typography>
            <Button className={classes.btnLoginRegis} onClick={clickLogin} color="inherit">{login}</Button>
            <Button className={classes.btnLoginRegis} onClick={clickRegister} color="inherit">{register}</Button>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <DehazeIcon  className={classes.icon} /> */}
            <Drawer/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}