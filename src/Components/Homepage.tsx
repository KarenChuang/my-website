import {
  Container,
  ImgCard,
  ImgCardList,
} from '../Styled/Homepage'

import * as iceImage from '../assets/ice.png'

import * as React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect } from 'react-router-dom'

const Homepage: React.SFC<{}> = () => {

  return (
    <Container>
      <ImgCardList>
        <Link to="/vlog">
          <ImgCard>
            <img src="http://q78og4x7l.bkt.clouddn.com/6ca4599fgy1gcpa0ohfnhj20h00an16k.jpg?imageslim" alt=""/>
            <span>VLOGS</span>
          </ImgCard>
        </Link>
        <Link to="/food">
          <ImgCard>
            <img src="http://q78og4x7l.bkt.clouddn.com/IMG_0128.JPG?imageslim" alt=""/>
            <span>FOODS</span>
          </ImgCard>
        </Link>
        <Link to="/movies">
          <ImgCard>
            <img src="http://q78og4x7l.bkt.clouddn.com/movie-01.jpg?imageslim" alt=""/>
            <span>MOVIES</span>
          </ImgCard>
        </Link>
      </ImgCardList>
      <p>Karen Zhong</p>
    </Container>
  )
}

export default Homepage