import * as movies from '../assets/movies.png'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import {
  Page,
  Container,
  Card,
} from '../Styled/Movies'

const Movies: React.SFC<{}> = () => {

  const [movieData, setMovieData] = useState([])

  const fetchData = () => {
    axios(
      'http://localhost:8080/api/movies',
    ).then(({ data }) => {
      setMovieData(data.data.list)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchData()
  }, []);

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
                <p className="rank">
                  {movie.rank}
                </p>
              </div>
          </Card>
          ))
        }
      </Container>
    </Page>
  )
};

export default Movies