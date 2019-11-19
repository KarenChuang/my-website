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
  display: flex;
  flex-wrap: wrap;
  max-width: 1080px;
  margin: 0 auto;
  justify-content: space-between;
  .plate {
    width: 42%;
    height: 240px;
    /* border: 4px solid #388766; */
    box-shadow: 0 2px 15px 0 rgba(0,0,0,0.1);
    border-radius: 4px;
    background: #194432;
    margin: 10px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .pic {
    height: 80%;
    position: absolute;
    left: -100px;
    border-radius: 4px 0 0 4px;
  }
  .info {
    color: #fff;
    position: absolute;
    right: 10px;
  }
`

export { Page, Container }