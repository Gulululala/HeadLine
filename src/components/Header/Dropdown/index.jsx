import React, { PureComponent } from 'react';
import styles from './index.less';

class Dropdown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const content = [
      {
        url: 'https://www.wukong.com/',
        name: '问答',
      },
      {
        url: 'https://mp.toutiao.com/',
        name: '头条号',
      },
      {
        url: 'https://tuchong.com?utm_source=toutiao&amp;utm_medium=pc_header',
        name: '图虫',
      },
      {
        url: 'https://stock.tuchong.com/?source=ttweb',
        name: '正版图库',
      },
      {
        url: 'https://www.oceanengine.com/?source=pchometop',
        name: '广告投放',
      },
      {
        url: 'http://s.pstatp.com/site/motor/',
        name: '懂车帝',
      },
    ];

    let conItems = content.map((item, index) =>
      <li key={index}>
        <a href={item.url} target={'_blank'} rel={'noopener noreferrer'}>{item.name}</a>
      </li>
    );
    return (
      <ul className={styles.dropdown}>{conItems}</ul>
    );
  }
}

export default Dropdown;
