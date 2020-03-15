import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getVlogList } from '../api'

import {
  Page,
  Container,
  Card,
  SkeletonBox,
} from '../Styled/Vlog'

const Vlog: React.SFC<{}> = () => {

  const [vlogData, setVlogData] = useState([])
  const [loaded, setLoaded] = useState(false)

  const fetchData = () => {
    getVlogList().then(({ data }) => {
      setLoaded(true)
      setVlogData(data.data)
    }).catch((err) => {
      setLoaded(true)
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
        (vlogData && vlogData.length && loaded) ? vlogData.map((card: Card) =>
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
      ) : 
        <SkeletonTheme color="#fff" highlightColor="#eee">
          <p>
            <Skeleton wrapper={SkeletonBox} duration={4} height={334} width={340} count={6} />
          </p>
        </SkeletonTheme>
      }
      </Container>
    </Page>
  )
};

export default Vlog
