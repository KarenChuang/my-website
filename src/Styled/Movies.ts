import styled, { keyframes } from 'styled-components';

interface Props {
  show: boolean
}

const Page = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #194432;
`

const Container = styled.div`
  font-size: 14px;
  padding: 90px 20px 20px 20px;
  display: flex;
  flex-wrap: wrap;
  max-width: 1080px;
  margin: 0 auto;
`

const Card = styled.div`
  /* cursor: pointer; */
  background: #fff;
  margin: 10px 20px;
  width: 230px;
  height: 400px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  color: #fff;
  .pic {
    border-radius: 10px 10px 0 0 ;
    width: 100%;
    height: 300px;
  }
  .info {
    width: 100%;
    height: 100px;
    background: #fff;
    color: #000;
    position: absolute;
    border-radius: 0 0 10px 10px;
    bottom: 0px;
    padding: 5px;
    text-align: center;
    border-top: 1px dashed #eee;
    &::after {
      position: absolute;
      content: '';
      width: 50px;
      height: 50px;
      border-radius: 50px;
      background: #194432;
      left: -40px;
      bottom: 30px;
    }
    &::before {
      position: absolute;
      content: '';
      width: 50px;
      height: 50px;
      border-radius: 50px;
      background: #194432;
      right: -40px;
      bottom: 30px;
    }
    .title {
      font-size: 16px;
      font-family: monospace;
      margin: 10px 0 10px 0;
      font-weight: 600;
      color: #113e2b;
    }
    .date {
      font-size: 13px;
      margin: 3px;
      color: #113e2b;
    }
    .rank {
      font-size: 13px;
      margin: 3px;
      color: #113e2b;
    }
  }
`

export { Page, Container, Card }