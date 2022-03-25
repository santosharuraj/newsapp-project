import React, { useState } from 'react'
import { Card, AppBar, Toolbar, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import translate from 'translate';
import { ButtonGroup, Button } from '@material-ui/core'
import { NavLink, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
const useStyle = makeStyles(theme => ({
    main: {
        width: "69%",
        margin: "10px auto",
        marginBottom: 20,
        boxShadow: "0 2px 5px 0 rgb(0 0 0 /16%),0 2px 5px 0 rgb(0 0 0 /12%) "
    },
    root: {
        maxWidth: "69%",
        transition: "transform 0.15s ease-in-out"
      },
      cardHovered: {
        transform: "scale3d(1.05, 1.05, 1)"
      },
    container: {
        padding: 3.5,
        paddingBottom: "3px ! important"
    },
    image: {
        height: 280,
        width: "88%",
        borderRadius: 5,
        objectFit: "cover"
    },
    rightContainer: {
        margin: "5px 0 0 -25px",
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down('sm')]: {
            margin: "5px 0"
        }
    },
    title: {
        color: "#44444d",
        fontWeight: 300,
        fontSize: 22,
        lineHeight: "27px"
    },
    auther: {
        fontSize: 12,
        color: "#878787",
        lineHeight: "22px"
    },
    description: {
        lineHeight: "20px",
        marginTop: 5,
        fontSize: 15,
        color: "#878787",
    },
    publisher: {
        fontSize: 12,
        marginTop: "auto",
        marginBottom: 13,
        '& > *': {
            textDecoration: "none",
            color: "#000"
        }
    },
    header: {
        background: "#fff",
        height: 70
    },
    logo: {
        width: 120,
        paddingLeft: 20,
        cursor: "pointer"
    },
    menu: {
        color: "#000",
        fontSize: 25
    },
    text: {
        fontSize: 16,
        marginLeft: "auto",
        color: "#000",
        borderBottom: "1px solid #f2f2f2",
        marginRight: 120

    },
    grpbutton: {
        marginLeft: "auto",
        marginRight: 30,
        padding: "10px 0 0 10px"
    },
    button: {
        width: 70
    }

}));
const HindiArticle = ({ article }) => {

    const classes = useStyle();
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [description, setDescription] = useState();

    const [state, setState] = useState({
        raised:false,
        shadow:1,
      })
    const navigate = useNavigate();

    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    const [open, setOpen] = useState(false);

    const clickhandle = () => {
        navigate("/");
        setOpen(true);
    }



    async function translateString1(str, translateto) {
        translate.engine = "google";
        translate.key = process.env.GOOGLE_KEY;
        const value = await translate(str, translateto);
        setTitle(value);
    }
    translateString1(`${article.title}`, 'hi');

    async function translateString2(str, translateto) {
        translate.engine = "google";
        translate.key = process.env.GOOGLE_KEY;
        const value = await translate(str, translateto);
        setAuthor(value);
    }
    translateString2(`${article.author}`, 'hi');

    async function translateString3(str, translateto) {
        translate.engine = "google";
        translate.key = process.env.GOOGLE_KEY;
        const value = await translate(str, translateto);
        setDescription(value);
    }
    translateString3(`${article.description}`, 'hi');
    
     const setEnglish=()=>{
         navigate("/english");
     }
     
     const setHindi=()=>{
         navigate("/hindi")
     }
 
    return (
        <>

            <AppBar className={classes.header}>
                <Toolbar>
                    <img onClick={() => clickhandle()} src={process.env.PUBLIC_URL+"iconlogo.png"} alt="logo" className={classes.logo} />
                    <ButtonGroup className={classes.grpbutton}>
                        <Button onClick={() => setEnglish()} className={classes.button}>
                            English
                        </Button>
                        <Button onClick={() => setHindi()} className={classes.button}>
                            <b style={{color:"#187bcd"}}>Hindi</b>
                        </Button >
                    </ButtonGroup>
                    {
                        open && <Typography className={classes.text}><NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>Read News</NavLink></Typography>
                    }
                </Toolbar>
            </AppBar>
            <Card
            className={clsx(classes.main,classes.root)}
            classes={{root: state.raised ? classes.cardHovered : ""}}
            onMouseOver={()=>setState({ raised: true, shadow:3})} 
            onMouseOut={()=>setState({ raised:false, shadow:1 })} 
            raised={state.raised} zdepth={state.shadow}>
                        <CardContent className={classes.container}>
                            <Grid container>
                                <Grid item lg={5} sm={5} md={5} xs={12}>
                                    <img src={article.url} alt="g" className={classes.image} />

                                </Grid>
                                <Grid item lg={7} sm={7} md={7} xs={12} className={classes.rightContainer}>
                                    <Typography className={classes.title}>{title}</Typography>
                                    <Typography className={classes.auther}>
                                        <b style={{ color: "#000" }}>short</b> by {author}/ {new Date(article.timestamp).toDateString()}
                                    </Typography>
                                    <Typography className={classes.description}>{description}</Typography>
                                    <Typography className={classes.publisher}>
                                        read more at <a href={article.link} target="_blank"> <b>{article.publisher}</b> </a>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>:
                    </Card> 
        </>
    )
}

export default HindiArticle
