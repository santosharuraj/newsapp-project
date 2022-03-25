import React from 'react'
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import Header from './Header';
const useStyle = makeStyles({
    component: {
        margin: "100px 100px",
        display: "flex"
    },
    image: {
        width: 390,
        height: 390,
        boxShadow: "0 2px 5px 0 rgb(0 0 0 /16%)"
    },
    gd1: {
        marginTop: 100,
        paddingLeft: 30
    }
    ,
    text: {
        fontSize: 32,
        fontWeight: 660,
        color: "#2a9df4",
        textAlign: "center"
    },
    subtext: {
        fontSize: 16,
        color: "#878787",
        lineHeight: "22px",
        marginLeft: 20
    },
    textbox: {
        padding: "20px",

    }
})
const Inshort = () => {
    const classes = useStyle();
    const url = "https://images.fonearena.com/blog/wp-content/uploads/2015/07/BBC-News.jpg";
    return (
        <><Header />
            <Grid className={classes.component}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={12} xs={12} >
                        <img src={url} alt="" className={classes.image} />
                    </Grid>

                    <Grid item lg={7} md={7} sm={12} xs={12} className={classes.gd1}>
                        <Typography className={classes.text}>Stay informed in 60 words.</Typography>
                        <Box className={classes.textbox}>
                            <Typography className={classes.subtext}>We understand you don’t have time to go through long news articles everyday. So we cut the clutter and deliver them, in 60-word shorts. Short news for the mobile generation.</Typography>
                        </Box>

                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Inshort
