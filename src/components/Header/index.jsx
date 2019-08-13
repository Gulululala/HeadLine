import React, { PureComponent } from 'react';
import styles from './index.less';
// import '../../assets/iconfont/iconfont.css';
import Dropdown from './Dropdown';
import Weather from './Weather';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.left}>
          <a href="//app.toutiao.com/news_article/" target="_blank" rel="noopener noreferrer">下载APP</a>
          <div className={styles.weatherShow}>
            <span>&nbsp;北京</span>
            <span>阴</span>
            <span>23° &nbsp;/&nbsp;30°</span>
            <i className={`iconfont icon-arrow_down`}></i>
            <Weather/>
          </div>
        </div>
        <div className={styles.right}>
          <a href="//www.toutiao.com/complain/" target="_blank" rel="noopener noreferrer">侵权投诉</a>
          <div className={styles.product}>
            <span>头条产品</span>
            <Dropdown/>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
