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
  /* display: flex; */
  /* flex-wrap: wrap; */
  max-width: 1080px;
  margin: 0 auto;
  column-count: 3;
  column-gap: 10px;
`

const Card = styled.div`
  cursor: pointer;
  margin: 20px;
  /* padding: 30px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 3px solid #eee; */
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  .pic {
    /* width: 240px; */
    height: 150px;    
  }
`

export { Page, Container, Card }