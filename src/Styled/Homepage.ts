import styled from 'styled-components';

const Container = styled.div`
  font-size: 14px;
  color: #212121;
  min-height: 100vh;
`

const Nav = styled.div`
  width: 999px;
  margin: 0 auto;
  height: 140px;
  line-height: 140px;
  font-weight: bold;
  display: flex;
`;

const Logo = styled.div`
  color: #F46142;
  font-size: 23px;
  margin-right: 100px;
`

const NavLink = styled.a`
  font-size: 23px;
  margin-right: 15px;
  text-decoration: none;
  color: rgba(51, 51, 51, 0.49);
`

const Banner = styled.div`
  height: 160px;
  line-height: 160px;
  width: 100%;
  background: #333;
  margin-bottom: 20px;
  font-size: 28px;
  color: #fff;
  div {
    width: 999px;
    margin: 0 auto;
    position: relative;
  }
  img {
    position: absolute;
    top: -72px;
    right: 0;
    width: 250px;
    background: #eee;
  }
`;

const PanelContainer = styled.div`
  height: 100%;
  width: 999px;
  margin: 0 auto;
`;

const Title = styled.div`
  font-family: 'Impact';
  color: #444444;
  font-size: 25px;
`;

const VlogPanel = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 100%;
  margin: 5px 0 20px 0;
`

const VlogCard = styled.div`
  img {
    width: 278px;
    height: 174px;
    border-radius: 3px;
  }
  div {
    font-size: 12px;
    color: #999;
    display: flex;
    justify-content: space-between;
  }
`

const TechoPanel = styled.div`
  margin: 5px 0 20px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    position: absolute;
    font-size: 40px;
    margin: 0 auto;
    color: #fff;
    z-index: 10;
  }
  img {
    /* position: absolute; */
    width: 999px;
  }
`

const Mask = styled.div`
  position: absolute;
  width: 999px;
  height: 485.7px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`

const Footer = styled.div`
  background: #333;
  color: #D8D8D8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;
`

export {
  Container,
  Logo,
  Nav,
  Banner,
  NavLink,
  Title,
  PanelContainer,
  VlogPanel,
  VlogCard,
  TechoPanel,
  Mask,
  Footer
};