import styled from 'styled-components';

const bgSrc = require('../assets/bg.jpg')

const Container = styled.div`
  color: #333;
  position: fixed;
  top: 60px;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  p {
    font-size: 50px;
    color: #444;
    margin: 0;
    padding: 0;
    line-height: 90vh;
    text-align: center;
    font-weight: 600;
  }
`

const ImgCardList = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  margin: 0 10%;
`

const ImgCard = styled.div`
  background: #333;
  width: 220px;
  height: 400px;
  margin: 10px;
  position: relative;
  > img {
    width: 220px;
    height: 400px;
    object-fit: cover;
    transition: .6s;
  }
  > span {
    position: absolute;
    color: #fff;
    right: 10px;
    top: 30%;
    margin: 0;
    flex-shrink: 0;
    font-size: 35px;
    font-weight: 600;
    opacity: .9;
    transition: .3s;
    text-shadow: 1px 1px 2px #999;
  }
  &:hover img {
    object-position: 15%;
  }
`

const RouteContainer = styled.div`
  min-height: calc(100vh - 110px - 80px);
`
const Nav = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #388766;
  padding: 0 20px;
  z-index: 20;

  @media (max-width: 600px) {
    .nav-panel {
      display: flex;
      height: 50px;
      flex-wrap: nowrap;
      flex-shrink: 0;
      justify-content: flex-end;
      a {
        margin-right: 8px;
      }
    }
  }

  .logo {
    width: 35px;
    height: 35px;
  }

  a {
    padding: 2px 4px;
    font-size: 14px;
    transition: opacity .3s;
    margin-right: 15px;
    text-decoration: none;
    color: rgba(255, 255, 255, .7);
  }
  .selected {
    border-bottom: 3px solid #cdb88f;
    border-radius: 1px;
  }
`;

export {
  Container,
  RouteContainer,
  Nav,
  ImgCardList,
  ImgCard,
};