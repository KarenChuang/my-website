import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Page,
  Container,
  Card,
} from '../Styled/Vlog'

const Vlog: React.SFC<{}> = () => {

  const [vlogData, setVlogData] = useState([])

  const fetchData = () => {
    axios(
      'http://ec2-52-52-147-166.us-west-1.compute.amazonaws.com/api/vlogs',
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
              <img className="cover" src={ card.cover } />
            </div>
            <div className="info">
              <p className="title">{ card.title }</p>
              <span> { card.date }</span>
            </div>
            <div className="location">
                <span>{ card.location }</span>
              </div>
          </Card>
      )}
      </Container>
    </Page>
  )
};

export default Vlog
