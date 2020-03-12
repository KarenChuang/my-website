import styled, { keyframes } from "styled-components";

const vloBgSrc = require("../assets/bg.jpg");

interface Props {
  show: boolean;
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
`;

const Page = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: rgb(247, 247, 247);
`;

const Container = styled.div`
  font-size: 14px;
  color: #212121;
  padding: 100px 0px 20px 0px;
  display: flex;
  flex-wrap: wrap;
  max-width: 1080px;
  margin: 0 auto;
`;

const Card = styled.a`
  text-decoration: none;
  width: 340px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
  border-radius: 2px;
  margin: 0px 20px 20px 0px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  /* padding: 10px; */
  cursor: pointer;
  .image-panel {
    width: 340px;
    height: 213px;
    overflow: hidden;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:hover {
      img {
        transform: scale(1.1);

      }
    }
    .cover {
      width: 340px;
      height: 213px;
      border-radius: 2px;
      position: absolute;
      transition: .35s ease-in-out;
      top: 0;
      left: 0;
    }
  }
  .info {
    width: 340px;
    font-family: "monospace";
    color: #333;
    padding: 16px;
    .title {
      font-size: 14px;
      color: #333;
      margin: 0 0 10px 0;
    }
    > span {
      font-size: 12px;
      color: #999;
      display: block;
    }
  }

  .location {
    position: relative;
    display: flex;
    flex-flow: nowrap;
    overflow: hidden;
    line-height: 38px;
    padding: 0 16px;
    border-top: 1px solid #f7f7f7;
    color: #666;
  }
`;

const SkeletonBox = styled.span`
  display: inline-block;
  margin: 0px 20px 20px 0px;
`;

export { Page, Container, Card, SkeletonBox };
