import React, { PureComponent } from 'react';
import styles from './index.less';

class MoreChannel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const moreCon = [
      {
        url: '/',
        name: '军事',
        target: '_self',
      },
      {
        url: '/',
        name: '国际',
        target: '_self',
      },
      {
        url: '/',
        name: '时尚',
        target: '_self',
      },
      {
        url: '/',
        name: '旅游',
        target: '_self',
      },
      {
        url: '/',
        name: '探索',
        target: '_self',
      },
      {
        url: '/',
        name: '育儿',
        target: '_self',
      },
      {
        url: '/',
        name: '养生',
        target: '_self',
      },
      {
        url: '/',
        name: '美文',
        target: '_self',
      },
      {
        url: '/',
        name: '历史',
        target: '_self',
      },
      {
        url: '/',
        name: '美食',
        target: '_self',
      },

    ];

    let moreConItem = moreCon.map((item, index) =>
      <li key={index}><a href={item.url} target={item.target} rel={'noopener noreferrer'}>{item.name}</a></li>
    );

    return (
      <div className={styles.moreChannel}>
        <ul>{moreConItem}</ul>
      </div>
    );
  }
}

export default MoreChannel;
