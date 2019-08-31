import styled, { keyframes } from 'styled-components';

interface Props {
  show: boolean
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
`

const ModalRoot = styled.div`
  visibility: ${( props: Props ) => props.show ? 'visible' : 'hidden' };  
  position: fixed;
  z-index: 999;
  right: 0px;
  bottom: 0px;
  top: 0px;
  left: 0px;
  touch-action: none;
  animation: ${keyFrameExampleOne} 2s ease-in-out;
`

const ModalContainer = styled.div`
  position: relative;
  font-size: 14px;
  color: #212121;
  width: 80%;
  height: calc(100vh - 100px);
  border-radius: 4px;
  background: #fff;
  margin: 30px auto;
  z-index: 9999;
  box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12);
  padding: 20px;
  .close {
    width: 25px;
    top: -17px;
    right: -17px;
    position: absolute;
    cursor: pointer;
    transition: transform .3s;
    &:hover {
      transform: scale(1.3);
    }
  }
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`

const ModalMask = styled.div`
  position: fixed;
  z-index: 10;
  right: 0px;
  bottom: 0px;
  top: 0px;
  left: 0px;
  touch-action: none;
  background-color: rgba(0, 0, 0, 0.5);
`

export { ModalRoot, ModalContainer, ModalMask }