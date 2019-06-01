import * as React from 'react'
import { Nav, Logo, Container, Banner, NavLink, Title, PanelContainer, VlogPanel, VlogCard, TechoPanel, Mask, Footer } from './Styled/Homepage'

import 'normalize.css'

const { useState, useEffect } = React

const App: React.SFC = () => {
  const [count, setCount] = useState('s')
  const [num] = useState(1)
  const handleClick = () => setCount(count + 1)

  // componentdidmount
  useEffect(() => {
    console.log('Count has changed')
  }, [num])

  const navLinkList:string[] = ['HOME', 'VLOG', 'TECHO', 'PHOTO', 'ABOUT'];
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
  }

  const vlogCardList: Array<Card> = [{
    title: 'vlog title',
    date: '2019-1-1',
    cover: 'https://karen-z.s3-us-west-1.amazonaws.com/vlog-1.jpg'
  }, {
    title: 'vlog title 333',
    date: '2019-1-1',
    cover: 'https://s3.us-west-1.amazonaws.com/karen-z/vlog-2.jpg'
  }, {
    title: 'vlog titl 444',
    date: '2019-1-1',
    cover: 'https://karen-z.s3-us-west-1.amazonaws.com/vlog-3.jpg'
  }]

  function VlogCardList(props: { cards: Array<Card>  }) {
    const cards = props.cards;
    const cardItems = cards.map((card) =>
      <VlogCard key={card.title}>
        <img src={card.cover} alt={card.title} />
        <div>
          <span>{card.title}</span>
          <span>{card.date}</span>          
        </div>
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
      </PanelContainer>
      <Footer>© Karen Zhong  2019</Footer>
    </Container>
    )
}

export default App;