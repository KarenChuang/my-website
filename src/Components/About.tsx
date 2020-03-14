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
        <div>
          <h1>你好，</h1>
          <h4>我是 Karen.</h4>
          <p>我是一名前端工程師，這是我正在建設中的個人網站，我將會在這裡更新的我的vlog視頻/美食/电影记录等等。</p>
          <p>
            如果你玩 <a href="https://space.bilibili.com/43937488" target="_blank">b站</a> ，欢迎来一键三连，
          </p>
          <p>如果你喜欢写手帐，这是我的 <a href="http://magicgua.lofter.com/" target="_blank">Lofter</a>
          </p>
        </div>
      </Container>
    </Page>
  )
};

export default About