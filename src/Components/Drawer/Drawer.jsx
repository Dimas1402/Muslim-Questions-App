import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import PeopleIcon from '@material-ui/icons/People'
import DehazeIcon from '@material-ui/icons/Dehaze'
import {Link} from "react-router-dom"

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  icon: {
    display: 'none'
  },
  [theme.breakpoints.down('xs')]: {
    icon: {
      display: 'block',
    }
  }
}))

export default function DrawerNavbar ({drawerClickLogin, drawerClickRegister}) {
  const classes = useStyles()
  const [state, setState] = React.useState({
    right: false
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setState({ ...state, [anchor]: open })
  }

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom'
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <img
          style={{ marginLeft: '25px' }}
          src={require('../../Assets/logo.png')}
          alt=''
        />
        {['Login', 'Register'].map((text, index) => (
          <Link to={index === 0 ? "/login" : "/register"}>
          <ListItem onClick={index === 0 ? drawerClickLogin :  drawerClickRegister}  button key={text}>
            <ListItemIcon>
              {index === 1 ? <PeopleIcon  color="primary" /> : <PeopleOutlineIcon  color="primary" />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </div>
  )

  return (
    <div>
      {['right'].map(anchor => (
        <React.Fragment key={anchor}>
          <DehazeIcon
            color="primary"
            className={classes.icon}
            onClick={toggleDrawer(anchor, true)}
          />
          {/* <Button >{anchor}</Button> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
