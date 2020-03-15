import * as star1 from '../assets/star1.png'
import * as star2 from '../assets/star2.png'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getMovieList } from '../api'

import {
  Page,
  Container,
  Card,
  Rank,
  SkeletonBox
} from '../Styled/Movies'

const Movies: React.SFC<{}> = () => {

  const [movieData, setMovieData] = useState([])
  const [loaded, setLoaded] = useState(false)

  const fetchData = () => {
    getMovieList().then(({ data }) => {
      setMovieData(data.data)
      setLoaded(true)
    }).catch((err) => {
      console.log(err)
      setLoaded(true)

    })
  }

  useEffect(() => {
    fetchData()
  }, []);

  function RankProp(props: any) {
    const listItems = [1,2,3,4,5].map((ele) =>
     <Rank key={ele}>
        { ele > props.rank ? <img src={star1} /> : <img src={star2} alt=""/>}
     </Rank>
    );
    return (
      <div className="rank-container">{listItems}</div>
    );
  }

  return (
    <Page>
      <Container>
        {
          (movieData && movieData.length && loaded) ? movieData.map((movie => 
            <Card key={movie.id} >
              <img className="pic" src={movie.pic} alt=""/>
              <div className="info">
                <p className="title">{ movie.title }</p>
                <p className="date">{ movie.date }</p>
                <RankProp rank={movie.rank} />
              </div>
          </Card>
          )) : 
          <SkeletonTheme color="#fff" highlightColor="#388766">
          <p>
            <Skeleton wrapper={SkeletonBox} duration={4} height={400} width={230} count={4} />
          </p>
          </SkeletonTheme>
        }
      </Container>
    </Page>
  )
};



export default Movies