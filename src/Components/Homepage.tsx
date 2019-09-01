import {
  Banner,
  Title,
  PanelContainer,
  TechoPanel,
  Mask,
  PhotoPanel,
  PhotoCol,
  PhotoColVertical,
} from '../Styled/Homepage'

import VlogCardList from './HomeVlogCardList'

import * as React from 'react'

const Homepage: React.SFC<{}> = () => {

  interface Card {
    title: string;
    date: string;
    cover: string;
    link: string;
  }

  // mock
  const vlogCardList: Array<Card> = [{
        title: '工作党的周末学习打卡 / 延时记录 / vlog / 首次进军学习区',
        date: '2019-8-19',
        cover: 'https://karen-z.s3-us-west-1.amazonaws.com/7591566869429_.pic.jpg',
        link: '//player.bilibili.com/player.html?aid=64397696&cid=111807600&page=1"'
      }, {
        title: '苏梅岛 Vlog / 海岛旅拍 / Vlog-3 / 慢悠悠的岛上时光',
        date: '2019-5-2',
        cover: 'https://karen-z.s3-us-west-1.amazonaws.com/vlog-1.jpg',
        link: '//player.bilibili.com/player.html?aid=51163552&cid=89567425&page=1'
      }, {
        title: '东京旅行 Vlog / iPhoneX + freevision vilta m拍摄 / 初投稿',
        date: '2018-10-12',
        cover: 'https://s3.us-west-1.amazonaws.com/karen-z/vlog-2.jpg',
        link: '//player.bilibili.com/player.html?aid=33643965&cid=58900612&page=1'
      }, {
        title: '澳门旅行 Vlog / DJI Osmo Pocket / Vlog-2',
        date: '2019-1-1',
        cover: 'https://karen-z.s3-us-west-1.amazonaws.com/vlog-3.jpg',
        link: 'https://www.bilibili.com/video/av43903300'
      }, {
        title: '工作党的周末学习打卡 / 延时记录 / vlog / 首次进军学习区5',
        date: '2019-8-19',
        cover: 'https://karen-z.s3-us-west-1.amazonaws.com/7591566869429_.pic.jpg',
        link: '//player.bilibili.com/player.html?aid=64397696&cid=111807600&page=1"'
      }, {
        title: '苏梅岛 Vlog / 海岛旅拍 / Vlog-3 / 慢悠悠的岛上时光2',
        date: '2019-5-2',
        cover: 'https://karen-z.s3-us-west-1.amazonaws.com/vlog-1.jpg',
        link: '//player.bilibili.com/player.html?aid=51163552&cid=89567425&page=1'
      }]
 
  return (
    <div>
      <Banner>
        <div>
          <p>將生活記錄在手帳本和鏡頭裏</p>
          <img src="https://s3.us-west-1.amazonaws.com/karen-z/avatar-min.jpg" alt="" />
        </div>
      </Banner>
      <PanelContainer>
        {/* vlog */}
        <Title>
          <span>VLOG</span>
          <a href="https://space.bilibili.com/43937488" target="_blank">More...</a>
        </Title>
        <VlogCardList cards={vlogCardList} />
        {/* techo */}
        <Title>
          <span>TECHO</span>  
        </Title>
        <TechoPanel>
          <p>給你看看我的手帳</p>
          <Mask></Mask>
          <img src="https://karen-z.s3-us-west-1.amazonaws.com/WechatIMG568.jpeg" alt="" />
        </TechoPanel>
        <Title>
          <span>PHOTO</span>
        </Title>
        <PhotoPanel>
          <PhotoCol>
            <img src="https://karen-z.s3-us-west-1.amazonaws.com/photo-2.jpg" alt="" />
            <img src="https://karen-z.s3-us-west-1.amazonaws.com/photo-3.jpg" alt="" />
          </PhotoCol>
          <PhotoColVertical>
            <img src="https://s3.us-west-1.amazonaws.com/karen-z/photo-1.png" alt="" />
          </PhotoColVertical>
        </PhotoPanel>
      </PanelContainer>
    </div>
  )
}

export default Homepage