import styled, { keyframes } from 'styled-components';

interface Props {
  show: boolean
}


const Page = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgb(247,247,247);
`
const Container = styled.div`
  color: #121314;
  font-size: 20px;
  padding: 90px 20px 20px 20px;
  max-width: 1080px;
  margin: 0 auto;
  > div {
    width: 600px;
    padding: 20px;
    line-height: 30px;

    a {
      opacity: .6;
      color: #121314;
      position: relative;
      text-decoration: none;
      &::after{
        content: "";
        position: absolute;
        z-index: -1;
        top: 60%;
        left: -0.1em;
        right: -0.1em;
        bottom: 0;
        transition: top 200ms cubic-bezier(0, .8, .13, 1);
        background-color: rgb(57, 135, 102, 0.5);
      }
      &:hover::after {
        top: 0%;
      }
    }
  }

  @media (max-width: 600px) {
    height: 100vh;
    .pic {
      display: none;
    }
  }
`

export { Page, Container }