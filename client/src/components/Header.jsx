import React from 'react'
import { AppBar, Toolbar, makeStyles, Typography } from '@material-ui/core'
import { NavLink, useNavigate } from 'react-router-dom'

const useStyle = makeStyles({
  header: {
    background: "#fff",
    height: 70
  },
  logo: {
    width: 120,
    
    paddingLeft: 20,
    cursor: "pointer",

  },
  text: {
    textDecoration: "none",
    color: "#000",
    marginLeft: "auto",
    fontWeight:600,
    marginRight:70,
    fontSize:16,
    margin:"10px 0 0 10px",
    borderBottom:"1px solid #000"
  }


})
const Header = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const clickhandle = () => {
    navigate("/");

  }





  return (
    <AppBar className={classes.header}>
      <Toolbar >
        <img onClick={() => clickhandle()} src={process.env.PUBLIC_URL+"iconlogo.png"} alt="logo" className={classes.logo} />
        <NavLink to="/english" className={classes.text}>Read News </NavLink>
      </Toolbar>
    </AppBar>
  )
}

export default Header; 
