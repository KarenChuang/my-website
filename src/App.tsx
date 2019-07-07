import * as React from 'react'
import * as playIcon from './assets/play.png'
import 'normalize.css'
import {
  Nav,
  Logo,
  Container,
  RouteContainer,
  // NavLink,
  Footer
} from './Styled/Homepage'

import { BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect } from "react-router-dom"
import Homepage from './Components/Homepage';
import Vlog from './Components/Vlog';
import Techo from './Components/Techo';
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
    route: '/homepage'
  }, {
    title: 'VLOG',
    route: '/vlog'
  }, {
    title: '手帳',
    route: '/techo'
  }, {
    title: '食物',
    route: '/food'
  }, {
    title: '攝影',
    route: '/photo'
  }, {
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
      <div>{listItems}</div>
    );
  }

  return (
    <Router>
      <Container>
        <Nav>
          <Logo>Karen's</Logo>
          <LinkList links={navLinkList} />
        </Nav>
        <RouteContainer>
          <Redirect from="/" to="/homepage" />
          <Switch>
            <Route path="/homepage" component={Homepage}/>
            <Route path="/vlog" component={Vlog}/>
            <Route path="/techo" component={Techo}/>
            <Route path="/food" component={Food}/>
            <Route path="/about" component={About}/>
          </Switch>
        </RouteContainer>
        <Footer>© Karen Zhong  2019</Footer>
      </Container>
    </Router>
    )
}

export default App;