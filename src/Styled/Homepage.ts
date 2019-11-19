import styled from 'styled-components';

const bgSrc = require('../assets/bg.jpg')

const Container = styled.div`
  background: #2f4b31;

  font-size: 14px;
  color: #212121;
  min-height: 100vh;
  width: 100vw;
  background-image: url(${bgSrc});
  background-position: center center;
  background-repeat: no-repeat;
  background-size:cover;
  background-attachment: fixed
`

const Mask = styled.div`
  position: absoulute;
  top: 0;
  right: 0;
  min-height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    font-size: 50px;
    color: #fff;
    margin: 0;
    padding: 0;
    /* line-height: 100vh; */
    text-align: center;
    font-weight: 600;
    display: flex;
    flex-shrink: 0;
    align-items: center;
  }
  p {
    font-size: 50px;
    color: #fff;
    margin: 0;
    padding: 0;
    /* line-height: 100vh; */
    text-align: center;
    font-weight: 600;
  }
  .ice-logo {
    width: 50px;
    height: 50px;
  }
`

const Name = styled.div`
  min-height: 100vh;
  width: 100vw;
  color: #fff;
`

const RouteContainer = styled.div`
  min-height: calc(100vh - 110px - 80px);
`

const Nav = styled.div`
  position: fixed;
  top: 0px;
  /* right: 20px; */
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* flex-direction: row-reverse; */
  background: #388766;
  padding: 0 20px;
  /* border-radius: 10px; */
  /* box-shadow: 2px 2px 11px -5px rgba(0,0,0,0.75); */

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
  Mask,
  Name
};