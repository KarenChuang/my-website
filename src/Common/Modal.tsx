import * as React from 'react'
import * as closeIcon from '../assets/close.png'

import {
  ModalRoot,
  ModalContainer,
  ModalMask,
} from '../Styled/Modal'

interface ModalProps {
  visible: boolean,
  hide: any,
  link: string
}

const Modal: React.SFC<ModalProps> = (props) => {
  const { visible, hide, link }  = props
  return (
    <ModalRoot show={visible}>
      <ModalMask />
      <ModalContainer>
        <img className="close" src={closeIcon} onClick={ hide }/>
        <iframe src={link} scrolling="no"> </iframe>
      </ModalContainer>
    </ModalRoot>
  )
};

export default Modal
