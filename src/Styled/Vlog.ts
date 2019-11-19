import styled, { keyframes } from 'styled-components';

const vloBgSrc = require('../assets/bg.jpg')

interface Props {
  show: boolean
}


const keyFrameExampleOne = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`

const Page = styled.div`
  min-height: 100vh;
  width: 100vw;
  /* background-image: url(${vloBgSrc});
  background-position: center center;
  background-repeat: no-repeat;
  background-size:cover;
  background-attachment: fixed */
`

const Container = styled.div`
  font-size: 14px;
  color: #212121;
  padding: 100px 20px 20px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1080px;
  margin: 0 auto;
`

const Card = styled.a`
text-decoration: none;
  /* width: 300px; */
  /* height: 175px; */
  background: rgba(255, 255, 255, .9);
  box-shadow: 0 2px 20px 0 rgba(0,0,0,0.05);
  
  border-radius: 2px;
  margin: 10px 6px 30px 6px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 10px;
  cursor: pointer;
  .image-panel {
    width: 300px;
    height: 170px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    /* transition: .8s; */
    &:hover {
      .playIcon {
        transform: scale(1.5) rotate(-10deg);
      }
      .mask {
        opacity: .6;
      }
    }
    .mask {
      width: 100%;
      height: 100%;
      background: #000;
      opacity: .3;
      position: absolute;
      z-index: 1;
      transition: .4s;
    }
    .playIcon {
      width: 40px;
      height: 40px;
      z-index: 1;
      opacity: .8;
      transition: .4s;
    }

    .cover {
      width: 300px;
      height: 170px;
      border-radius: 2px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .info {
    font-family: 'monospace';
    text-align: center;
    > p {
      line-height: 30px;
      margin: 0;
      margin-top: 8px;
      font-size: 18px;
      color: #333;
    }
    > span {
      font-size: 12px;
      color: #999;
    }
  }
`

export { Page, Container, Card }