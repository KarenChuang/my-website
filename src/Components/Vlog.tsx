// import * as React from 'react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Page,
  Container,
  Card,
  
} from '../Styled/Vlog'

import * as playIcon from '../assets/play.png'

// import VlogCardList from './VlogCardList'

const Vlog: React.SFC<{}> = () => {

  const [vlogData, setVlogData] = useState([])

  const fetchData = () => {
    axios(
      'http://localhost:8080/api/vlogs',
    ).then(({ data }) => {
      setVlogData(data.data.list)
    }).catch((err) => {
      console.log(err)
    })
    
  }

  useEffect(() => {
    fetchData()
  }, []);


  interface Card {
    title: string;
    date: string;
    cover: string;
    link: string;
    location: string;
  }

  return (
    <Page>
      <Container>
      {
        vlogData && vlogData.map((card: Card) =>
          <Card key={card.title} href={ card.link } target="_blank">
            <div className="image-panel">
              <div className="mask"></div>
              <img className="playIcon" src={playIcon} alt="play" />
              <img className="cover" src={ card.cover } />
            </div>
            <div className="info">
              <p> { card.location }</p>
              <span> { card.date }</span>
            </div>
          </Card>
      )}
      </Container>
    </Page>
  )
};

export default Vlog
