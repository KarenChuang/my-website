import * as star1 from '../assets/star1.png'
import * as star2 from '../assets/star2.png'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import {
  Page,
  Container,
  Card,
  Rank
} from '../Styled/Movies'

const Movies: React.SFC<{}> = () => {

  const [movieData, setMovieData] = useState([])

  const fetchData = () => {
    axios(
      'http://karen-b7ed77202e7c274a.elb.us-west-1.amazonaws.com/api/movies',
    ).then(({ data }) => {
      setMovieData(data.data.list)
    }).catch((err) => {
      console.log(err)
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
          movieData.map((movie => 
            <Card key={movie.id} >
              <img className="pic" src={movie.pic} alt=""/>
              <div className="info">
                <p className="title">{ movie.title }</p>
                <p className="date">{ movie.date }</p>
                <RankProp rank={movie.rank} />
              </div>
          </Card>
          ))
        }
      </Container>
    </Page>
  )
};

export default Movies