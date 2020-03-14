import styled, { keyframes } from 'styled-components';
const worldMapSrc = require('../assets/world-map.svg')

interface Props {
  show: boolean
}

const Page = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: rgb(247,247,247)

`

const Container = styled.div`
  font-size: 14px;
  padding: 90px 20px 20px 20px;
  display: flex;
  flex-wrap: wrap;
  max-width: 1080px;
  margin: 0 auto;
  justify-content: space-between;
  .plate {
    min-width: 380px;
    width: 42%;
    height: 150px;
    /* border: 4px solid #388766; */
    box-shadow: 0 2px 15px 0 rgba(0,0,0,0.1);
    border-radius: 10px;
    background: #f1f1f1;
    margin: 10px 20px 50px 20px;
    display: flex;
    align-items: center;
    position: relative;
    &::before {
      background-image: url(${worldMapSrc});
      background-size: cover;
      content: "";
      display: block;
      height: 150px;
      opacity: 0.2;
      position: absolute;
      border-radius: 10px;
      right: 0px;
      top: 0px;
      width: 100%;
      z-index: 0;
    }
  }
  .pic {
    height: 120%;
    position: absolute;
    left: -40px;
    border-radius: 10px;
    filter: contrast(115%);
  }
  .info {
    color: #666;
    position: absolute;
    right: 10px;
    text-align: right;
    > p {
      margin: 0;
      line-height: 20px;
    }

    .food-tag {
      display: flex;
      flex-direction: row-reverse;
      margin-bottom: 10px;
      color: #f1f1f1;
      > span {
        font-size: 12px;
        border-radius: 4px;
        line-height: 16px;
        padding: 2px 8px;
        background: #398766;
        margin-right: 3px;
      }
    }
    .food-name {
      font-size: 20px;
      margin-bottom: 15px;
    }
    .restaurant-name {
      font-size: 14px;
      color: #333;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 5px;
      > img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
    }
    .date {
      font-size: 14px;
      color: #333;
      > span {
        margin-left: 5px;
      }
    }
  }
`


const SkeletonBox = styled.span`
  display: inline-block;
  margin: 0px 40px 20px 0px;
  .react-loading-skeleton  {
    border-radius: 10px;
  }
`;

export { Page, Container, SkeletonBox }