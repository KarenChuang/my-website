import styled from 'styled-components';

const Container = styled.div`
  font-size: 14px;
  color: #212121;
  min-height: 100vh;
`

const Nav = styled.div`
  width: 999px;
  margin: 0 auto;
  height: 110px;
  line-height: 110px;
  font-weight: bold;
  display: flex;
`;

const Logo = styled.div`
  color: #F46142;
  font-size: 23px;
  margin-right: 100px;
`

const NavLink = styled.a`
  font-size: 20px;
  transition: .3s;
  margin-right: 15px;
  text-decoration: none;
  color: rgba(51, 51, 51, 0.49);
  &:hover {
    color: #F46142;
  }
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
  p {
    margin: 0;
  }
  img {
    position: absolute;
    top: -40px;
    right: 0;
    width: 230px;
    background: #eee;
  }
`;

const PanelContainer = styled.div`
  height: 100%;
  width: 999px;
  margin: 50px auto;
`;

const Title = styled.div`
  font-family: 'Impact';
  color: #444444;
  font-size: 25px;
  margin-top: 50px;
`;

const VlogPanel = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 200px;
  height: 100%;
  margin: 5px 0 20px 0;
`

const VlogCardMask = styled.a`
  transition: .3s;
  cursor: pointer;
  width: 278px;
  height: 174px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 30px;
    height: 30px;
  }
`

const VlogCard = styled.div`
  position: relative;
  > img {
    width: 278px;
    height: 174px;
    border-radius: 3px;
  }
  p {
    font-size: 12px;
    color: #999;
    display: flex;
    justify-content: space-between;
  }
  &:hover ${VlogCardMask} {
    opacity: 1;
  }
`

const VlogCardTitle = styled.span`
  width: 200px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`

const Mask = styled.div`
  position: absolute;
  cursor: pointer;
  width: 999px;
  height: 485.7px;
  background: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: .3s;
  z-index: 1;
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
    width: 999px;
  }
  &:hover ${Mask} {
    opacity: 1;
  }
`

const PhotoPanel = styled.div`
  display: flex;
  width: 999px;
  height: 667px;
  margin-top: 5px;
  margin-bottom: 20px;
  background: #333;
`
const PhotoCol = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: auto;
  }
`

const PhotoColVertical = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  img {
    height: 100%;
  }
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
  VlogCardMask,
  VlogCardTitle,
  TechoPanel,
  PhotoPanel,
  PhotoCol,
  PhotoColVertical,
  Mask,
  Footer
};