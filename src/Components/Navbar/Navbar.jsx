import React from 'react';
import {createMuiTheme, makeStyles } from '@material-ui/core/styles';
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

export default function Navbar() {
  const classes = useStyles();
  // console.log(createMuiTheme())
  return (
    <div className={classes.root}>
      <AppBar className={classes.bgHeader}  position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
          <img style={{width:'90px', height:"90px"}} src={require("../../Assets/logo.png")} alt=""/>
          </Typography>
          <Button className={classes.btnLoginRegis} color="inherit">Login</Button>
          <Button className={classes.btnLoginRegis} color="inherit">Register</Button>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <DehazeIcon  className={classes.icon} /> */}
            <Drawer/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}