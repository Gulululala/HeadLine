import React, { PureComponent } from 'react';
import styles from './index.less';
import MoreChannel from './moreChannel'

class Channel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const content = [
      {
        url: '/',
        name: '推荐',
        target: '_self',
      },
      {
        url: 'https://www.ixigua.com/',
        name: '西瓜视频',
        target: '_blank',
      },
      {
        url: '/',
        name: '热点',
        target: '_self',
      },
      {
        url: 'https://live.ixigua.com',
        name: '直播',
        target: '_blank',
      },
      {
        url: '/',
        name: '图片',
        target: '_blank',
      },
      {
        url: '/',
        name: '科技',
        target: '_self',
      },
      {
        url: '/',
        name: '娱乐',
        target: '_self',
      },
      {
        url: '/',
        name: '游戏',
        target: '_self',
      },
      {
        url: '/',
        name: '体育',
        target: '_self',
      },
      {
        url: '/',
        name: '汽车',
        target: '_self',
      },
      {
        url: '/',
        name: '财经',
        target: '_self',
      },
      {
        url: 'https://www.ixigua.com/',
        name: '搞笑',
        target: '_self',
      },
      {
        url: '/',
        name: '更多',
        target: '_self',
      },
    ];

    let conItem = content.map((item, index) =>
      index < 12 ?
        <li key={index}>
          <a href={item.url} target={item.target} rel={'noopener noreferrer'}>{item.name}</a>
        </li> :
        <li key={index} className={styles.moreList} style={{position: 'relative'}}>
          <a href={item.url} target={item.target} rel={'noopener noreferrer'}>{item.name}</a>
          <MoreChannel/>
        </li>,
    );

    return (
      <div className={styles.channel}>
        <a href={'/'} className={styles.logo}>
          <img src={'//s3.pstatp.com/toutiao/static/img/logo.271e845.png'} alt={'headline'}/>
        </a>
        <ul className={styles.list}>{conItem}</ul>
      </div>
    );
  }
}

export default Channel;
