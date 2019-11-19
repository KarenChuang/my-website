import * as React from 'react';
import * as movies from '../assets/movies.png'

import {
  Page,
  Container,
  Card,
} from '../Styled/Movies'
// import { Card } from '../Styled/Movies';

const Movies: React.SFC<{}> = () => {
  return (
    <Page>
      <Container>
        <Card>
          <img className="pic" src={movies} alt=""/>
          <div>”It hurts to remember，but it'd be worse to forget.“</div>
        </Card>
        <Card>
          <img className="pic" src={movies} alt=""/>
          <div>”It hurts to remember，but it'd be worse to forget.It hurts to remember，but it'd be worse to forget.“</div>
        </Card>
        <Card>
          <img className="pic" src={movies} alt=""/>
          <div></div>
        </Card>
        <Card>
          <img className="pic" src={movies} alt=""/>
          <div></div>
        </Card>
        <Card>
          <img className="pic" src={movies} alt=""/>
          <div></div>
        </Card>
        <Card>
          <img className="pic" src={movies} alt=""/>
          <div></div>
        </Card>
        <Card>
          <img className="pic" src={movies} alt=""/>
          <div></div>
        </Card>
        <Card>
          <img className="pic" src={movies} alt=""/>
          <div></div>
        </Card>
        <Card>
          <img className="pic" src={movies} alt=""/>
          <div></div>
        </Card>
        <Card>
          <img className="pic" src={movies} alt=""/>
          <div></div>
        </Card>
       
      </Container>
    </Page>
  )
};

export default Movies