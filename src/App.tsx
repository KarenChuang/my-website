import * as React from 'react'
import {
  Nav,
  Logo,
  Container,
  Banner,
  NavLink,
  Title,
  PanelContainer,
  VlogPanel,
  VlogCardTitle,
  VlogCard,
  VlogCardMask,
  TechoPanel,
  Mask,
  PhotoPanel,
  PhotoCol,
  PhotoColVertical,
  Footer
} from './Styled/Homepage'

import 'normalize.css'
import * as playIcon from './assets/play.png';

const { useState, useEffect } = React

const App: React.SFC = () => {
  const navLinkList:string[] = ['首頁', 'VLOG', '手賬', '攝影', '關於我'];

  function LinkList(props: { links: string[]; }) {
    const links = props.links;
    const listItems = links.map((link: string) =>
      <NavLink key={link.toString()} href={link}>
        {link}
      </NavLink>
    );
    return (
      <div>{listItems}</div>
    );
  }

  interface Card {
    title: string;
    date: string;
    cover: string;
    link: string;
  }

  // mock
  const vlogCardList: Array<Card> = [{
    title: '苏梅岛 Vlog / 海岛旅拍 / Vlog-3 / 慢悠悠的岛上时光',
    date: '2019-5-2',
    cover: 'https://karen-z.s3-us-west-1.amazonaws.com/vlog-1.jpg',
    link: 'https://www.bilibili.com/video/av51163552'
  }, {
    title: '东京旅行 Vlog / iPhoneX + freevision vilta m拍摄 / 初投稿',
    date: '2018-10-12',
    cover: 'https://s3.us-west-1.amazonaws.com/karen-z/vlog-2.jpg',
    link: 'https://www.bilibili.com/video/av33643965'
  }, {
    title: '澳门旅行 Vlog / DJI Osmo Pocket / Vlog-2',
    date: '2019-1-1',
    cover: 'https://karen-z.s3-us-west-1.amazonaws.com/vlog-3.jpg',
    link: 'https://www.bilibili.com/video/av43903300'
  }]

  function VlogCardList(props: { cards: Array<Card>  }) {
    const cards = props.cards;
    const cardItems = cards.map((card) =>
      <VlogCard key={card.title}>
        <img src={card.cover} alt={card.title} />
        <VlogCardMask href={card.link} target="_blank">
          <img src={playIcon} alt="play" />
        </VlogCardMask>
        
        <p>
          <VlogCardTitle>{card.title}</VlogCardTitle>
          <span>{card.date}</span>          
        </p>
      </VlogCard>
    );
    return (
      <VlogPanel>{cardItems}</VlogPanel>
    )
  }

  return (
    <Container>
      <Nav>
        <Logo>Karen's</Logo>
        <LinkList links={navLinkList} />
      </Nav>
      <Banner>
        <div>
          <p>將生活記錄在手帳本和鏡頭裏</p>
          <img src="https://s3.us-west-1.amazonaws.com/karen-z/avatar-min.jpg" alt=""/>
        </div>
      </Banner>
      <PanelContainer>
        {/* vlog */}
        <Title>VLOG</Title>
        <VlogCardList cards={vlogCardList} /> 
        {/* techo */}
        <Title>TECHO</Title>
        <TechoPanel>
          <p>給你看看我的手帳</p>
          <Mask></Mask>
          <img src="https://karen-z.s3-us-west-1.amazonaws.com/WechatIMG568.jpeg" alt=""/>
        </TechoPanel>
        <Title>PHOTO</Title>
        <PhotoPanel>
          <PhotoCol>
            <img src="https://karen-z.s3-us-west-1.amazonaws.com/photo-2.jpg" alt=""/>
            <img src="https://karen-z.s3-us-west-1.amazonaws.com/photo-3.jpg" alt=""/>            
          </PhotoCol>
          <PhotoColVertical>
            <img src="https://s3.us-west-1.amazonaws.com/karen-z/photo-1.png" alt=""/>            
          </PhotoColVertical>
        </PhotoPanel>
      </PanelContainer>
      <Footer>© Karen Zhong  2019</Footer>
    </Container>
    )
}

export default App;