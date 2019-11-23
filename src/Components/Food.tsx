import * as React from 'react';
import * as food from '../assets/food.jpeg'
import * as locationIcon from '../assets/location.svg'
import foodData from '../../src/food.json'

import {
  Page,
  Container,
} from '../Styled/Food'

const Food: React.SFC<{}> = () => {

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
          foodData.data.list.map(( food: Food ) => 
            <div key={food.id} className="plate">
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
          )
        }
      </Container>
    </Page>
  )
};

export default Food