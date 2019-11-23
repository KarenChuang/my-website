import * as React from 'react';
import * as pic from '../assets/about.jpg'

import {
  Page,
  Container,
} from '../Styled/About'

const About: React.SFC<{}> = () => {
  return (
    <Page>
      <Container>
        <img className="pic" src={pic} alt=""/>
        <div>
        你好，我是Karen，是一名前端工程師，這是我正在建設中的個人網站，我將會在這裡更新的我的vlog視頻/美食/电影记录等等。
        <p>
          GitHub: <a href="https://github.com/KarenChuang/my-website" target="_blank">my-website</a>
        </p>
        <p>
          bilibili: <a href="https://space.bilibili.com/43937488" target="_blank">冰冰冰冰清</a>
        </p>
        <p>
          Lofter: <a href="http://magicgua.lofter.com/" target="_blank">麻吉科瓜</a>
        </p>
        </div>

      </Container>
    </Page>
  )
};

export default About