import { makeStyles,ButtonGroup,Button } from '@material-ui/core'
import {React,useState} from 'react'

const useStyle=makeStyles({
    grpbutton:{
        marginLeft:"auto",
        marginRight:30,
        padding:"10px 0 0 10px"
      },
      button:{
        width:70
      }
})
const Language = () => {
    const classes=useStyle();
    const [english,setEnglish]=useState(true);
    
   

  const englishclick=()=>{
     setEnglish(true);
   }

  const  hindiclick=()=>{
    setEnglish(false);
   }
  return (
    <ButtonGroup className={classes.grpbutton}>
    <Button  onClick={()=>englishclick()}  className={classes.button}>
       English
    </Button>
    <Button onClick={()=>hindiclick()} className={classes.button}>
        Hindi
    </Button >
   </ButtonGroup>
  )
}

export default Language
