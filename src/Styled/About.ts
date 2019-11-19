import styled, { keyframes } from 'styled-components';

interface Props {
  show: boolean
}


const Page = styled.div`
  min-height: 100vh;
  width: 100vw;

`

const Container = styled.div`
  font-size: 14px;
  padding: 90px 20px 20px 20px;
  display: flex;
  justify-content: center;
  max-width: 1080px;
  margin: 0 auto;
  .pic {
    width: 45%;
  }
  > div {
    background: linear-gradient(#388766, #28A585);
    color: #fff;
    padding: 20px;
    line-height: 30px;

    a {
      color: #fff;
      opacity: .6;
    }
  }
`

export { Page, Container }