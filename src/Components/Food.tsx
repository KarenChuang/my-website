import * as React from 'react';
import * as food from '../assets/food.jpeg'

import {
  Page,
  Container,
} from '../Styled/Food'

const Food: React.SFC<{}> = () => {
  return (
    <Page>
      <Container>
        <div className="plate">
          <img className="pic" src={food} alt=""/>
          <div className="info">
            info info info infoinfo infoinfo info
          </div>
        </div>
        <div className="plate">
          <img className="pic" src={food} alt=""/>
        </div>
        <div className="plate">
          <img className="pic" src={food} alt=""/>
        </div>
        <div className="plate">
          <img className="pic" src={food} alt=""/>
        </div>
      </Container>
    </Page>
  )
};

export default Food