import * as React from 'react'

import * as starImage from './assets/star.png'

import 'normalize.css'

import {
  Nav,
  Container,
  RouteContainer,
  Mask,
  Name,
  // NavLink,
} from './Styled/Homepage'

import { BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect } from "react-router-dom"
import Homepage from './Components/Homepage';
import Vlog from './Components/Vlog';
import Movies from './Components/Movies';
import Food from './Components/Food';
import About from './Components/About';

const { useState, useEffect } = React

const App: React.SFC = () => {
  interface Nav {
    title: string;
    route: string;
  }

  const navLinkList:Nav[] = [{
    title: '首頁',
    route: '/home'
  }, {
    title: 'VLOG',
    route: '/vlog'
  },
  {
    title: '食物',
    route: '/food'
  }, 
  {
    title: '電影/劇',
    route: '/movies'
  },
  {
    title: '關於我',
    route: '/about'
  }];

  function LinkList(props: { links: Nav[] }) {
    const links = props.links;
    const listItems = links.map((link: Nav) =>
      <NavLink key={link.route} to={link.route} activeClassName="selected">
        {link.title}
      </NavLink>
    );
    return (
      <div className="nav-panel">{listItems}</div>
    );
  }

  return (
    <Router>
      {/* <Redirect from="/" exact to="/home" /> */}

        <RouteContainer>
          <Nav>
            <img className="logo" src={starImage} alt=""/>
            <LinkList links={navLinkList} />
          </Nav>

          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/home" component={Homepage}/>
            <Route path="/vlog" component={Vlog}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/food" component={Food}/>
            <Route path="/about" component={About}/>
          </Switch>
        </RouteContainer>

    </Router>
    )
}

export default App;