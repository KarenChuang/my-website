import styled from 'styled-components';

const Container = styled.div`
  font-size: 14px;
  color: #212121;
  min-height: 100vh;
`

const RouteContainer = styled.div`
  min-height: calc(100vh - 110px - 80px);
`

const Nav = styled.div`
  width: 999px;
  margin: 0 auto;
  height: 110px;
  line-height: 110px;
  font-weight: bold;
  display: flex;
  a {
    font-size: 20px;
    transition: .3s;
    margin-right: 15px;
    text-decoration: none;
    color: rgba(51, 51, 51, 0.49);
    &:hover {
      color: #F46142;
    }
  }
  .selected {
    color: #F46142;
  }
`;

const Logo = styled.div`
  color: #F46142;
  font-size: 23px;
  margin-right: 100px;
`


const Banner = styled.div`
  height: 130px;
  line-height: 130px;
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
    width: 200px;
    height: 200px;
    background: #eee;
  }
`;

const PanelContainer = styled.div`
  height: 100%;
  width: 999px;
  overflow: hidden;
  margin: 50px auto;
`;

const Title = styled.div`
  font-family: 'Impact';
  color: #444444;
  font-size: 25px;
  margin-top: 10px;
`;

const VlogPanel = styled.div`
  display: flex;
  /* justify-content: space-between; */
  position: relative;
  height: 200px;
  margin: 5px 0 30px 0;
`

const VlogCardMask = styled.a`
  transition: .7s;
  cursor: pointer;
  width: 100%;
  height: 100%;
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
  margin-right: 20px;
  width: 260px;
  height: 173px;
  flex-shrink: 0;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
  p {
    font-size: 12px;
    margin: 5px 0;
    color: #999;
    display: flex;
    justify-content: space-between;
  }
  &:hover ${VlogCardMask} {
    opacity: 1;
  }
`

const VlogCardTitle = styled.span`
  width: 170px;
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
  margin: 5px 0 30px 0;
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
    height: 485.7px;
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
  RouteContainer,
  Logo,
  Nav,
  Banner,
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