import * as React from 'react';

import { VlogPanel, VlogCardMask, VlogCard, VlogCardTitle } from '../Styled/Homepage'

import useModal from '../Hooks/useModal'
import Modal from '../Common/Modal'

import * as playIcon from '../assets/play.png'
import * as leftIcon from '../assets/left-icon.png'
import * as rightIcon from '../assets/right-icon.png'

const { useState } = React

interface Card {
  title: string;
  date: string;
  cover: string;
  link: string;
}

interface CardListProps {
  cards: Array<Card>;
}

const VlogCardList: React.SFC<CardListProps> = (props) => {

  const [offset, setOffset] = useState<number>(0)
  const [leftIconVisible, setLeftIconVisible] = useState<boolean>(false)
  const [rightIconVisible, setRightIconVisible] = useState<boolean>(true)

  const [currentLink, setCurrentLink] = useState<string>('')
  
  const { isVisible, toogle } = useModal()

  function openModal (link: string) {
    setCurrentLink(link)
    toogle()
  }

  function moveVlogList (direction: string) {
    // const maxLength: number = props.cards.length * 280
    console.log(offset)
    setLeftIconVisible(offset < 0)
    setOffset(direction === 'left' ? offset + 280 : offset - 280)
    // setRightIconVisible()
    // setLeftIconVisible(offset <= 0 )

  }

  const cardItems = props.cards.map((card: Card) =>
    <VlogCard key={card.title}>
      <img src={card.cover} alt={card.title} />
      <VlogCardMask onClick={() => openModal(card.link)}>
        <img src={playIcon} alt="play" />
      </VlogCardMask>
      <p>
        <VlogCardTitle title={card.title}>{card.title}</VlogCardTitle>
        <span>{card.date}</span>          
      </p>
    </VlogCard>
  );

  return (
    <VlogPanel>
      <Modal visible={ isVisible } hide={ toogle } link={ currentLink } />
      {
        leftIconVisible && 
        <div className="vlog-bar bar-left" onClick={() => moveVlogList('left')}>
          <img src={leftIcon} />
        </div>
      }
      <div className="vlog-list" style={{ transform: 'translateX(' + offset + 'px)' }}>
        {cardItems}
      </div>
      {
        rightIconVisible && 
        <div className="vlog-bar bar-right" onClick={() => moveVlogList('right')}>
          <img src={rightIcon} />
        </div>
      }
    </VlogPanel>
  )
};

export default VlogCardList
