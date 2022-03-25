import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { getNews } from '../service/api';
import Article from './Article';
import InfiniteScroll from 'react-infinite-scroll-component';
import InfoHeader from './InfoHeader';
import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import HindiArticle from './HindiArticle';
const useStyle=makeStyles(theme=>( {
  container:{
    marginTop:110,
    
  }
}))
const Hindi = () => {
  const classes=useStyle();
  const [newsdata, setNews] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    dailynews();
  }, [page]);

  const dailynews = async () => {
    let response = await getNews(page);
    setNews([...newsdata, ...response.data]);
  }

  

    

  return (
    <InfiniteScroll
      dataLength={newsdata.length}
      next={() => setPage(page => page + 1)}
      hasMore={true}
    >
      <Box className={classes.container}>
        <InfoHeader />
      </Box>
      {
        newsdata.length > 0 &&
        newsdata.map(article => (
          <HindiArticle article={article} />
        ))
      }
    </InfiniteScroll>

  )
}

export default Hindi
