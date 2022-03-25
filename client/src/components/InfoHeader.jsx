import React from 'react'
import {Box, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
const useStyle=makeStyles(theme=> ({
    container:{
        background:"#187bcd",
        color:"#fff",
        height:45,
        display:"flex",
        alignItems:"center",
        width:"69%",
        margin:"0 auto",
        fontWeight:300,
        marginBottom:20,
        
    },
    text:{
        fontSize:14,
        display:"flex",
        margin:"auto"
    },
    logo:{
        height:34,
        "&:last-child":{
            margin:"0 50px 0 20px"
        }
    }
}));
const InfoHeader = () => {
    const classes=useStyle();
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
  return (
    <Box className={classes.container}>
      <Typography className={classes.text}>For the best experience use <strong style={{margin:"0 4px 0 4px"}}>Breaking News</strong> for latest Updates</Typography>
      {/* <Box  style={{marginLeft:"auto"}}>
          <img src={appleStore} alt="appleStore" className={classes.logo}/>
          <img src={googleStore} alt="googleStore" className={classes.logo} />
      </Box> */}
    </Box>
  )
}

export default InfoHeader
