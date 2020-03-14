import {
  Container,
  Mask,
} from '../Styled/Homepage'

import * as iceImage from '../assets/ice.png'

import * as React from 'react'

const Homepage: React.SFC<{}> = () => {

  return (
    <Container>
      <Mask>
        <div>
          {/* <p>Karen Zhong.</p> */}
          {/* <img className="ice-logo" src={iceImage} alt=""/> */}
          <p>Karen Zhong</p>
          {/* <img className="ice-logo" src={iceImage} alt=""/> */}

        </div>
      </Mask>
    </Container>
  )
}

export default Homepage