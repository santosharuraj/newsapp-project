import React from 'react'
import Header from './components/Header';
import {Box} from '@material-ui/core';
import InfoHeader from './components/InfoHeader';
import { makeStyles } from '@material-ui/styles';
import Articles from './components/Articles';
import { Routes,Route } from 'react-router-dom';
import Inshort from './components/Inshort';
import Hindi from './components/Hindi';

const App = () => {

  return (
    <Box >
  
      <Routes>
      <Route exact path='/' element={<Inshort/>}></Route>
      <Route exact path='/english' element={<Articles/>}></Route>
      <Route exact path='/hindi' element={ <Hindi/>}></Route>
      </Routes>
    </Box>
  )
}

export default App
