import * as food from '../assets/food.jpeg'
import * as locationIcon from '../assets/location.svg'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import {
  Page,
  Container,
  SkeletonBox,
} from '../Styled/Food'

const Food: React.SFC<{}> = () => {

  const [foodData, setFoodData] = useState([])
  const [loaded, setLoaded] = useState(false)

  const fetchData = () => {
    axios(
      'http://ec2-52-52-147-166.us-west-1.compute.amazonaws.com/api/foods',
    ).then(({ data }) => {
      setFoodData(data.data.list)
      setLoaded(true)
    }).catch((err) => {
      console.log(err)
      setLoaded(true)
    })
  }

  useEffect(() => {
    fetchData()
  }, []);
  interface Food {
    id: number;
    title: string;
    date: string;
    pic: string;
    location: string;
    restaurant: string;
    tags: string[];
  }

  return (
    <Page>
      <Container>
        {
          (foodData && foodData.length && loaded) ? foodData.map(( food: Food, index ) => 
            <div key={food.id + index} className="plate">
              <img className="pic" src={food.pic} alt=""/>
              <div className="info">
                <p className="food-name">{food.title}</p>
                <div className="food-tag">
                  { food.tags.map(tag => <span key={tag}>{tag}</span>) }
                </div>
                <p className="restaurant-name">
                  <img src={locationIcon} alt=""/>
                  {food.restaurant}</p>
                <p className="date">
                  <span>{food.date}</span>
                  <span>{food.location}</span>
                </p>
              </div>
            </div>
          ) : 
          <SkeletonTheme color="#fff" highlightColor="#eee">
            <p>
              <Skeleton wrapper={SkeletonBox} duration={4} height={184} width={480} count={6} />
            </p>
          </SkeletonTheme>
        }
      </Container>
    </Page>
  )
};

export default Food