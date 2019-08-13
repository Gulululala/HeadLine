import React, { PureComponent } from 'react';
import styles from './index.less';

class Weather extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.weather}>
        <div className={styles.today}>
          <span>&nbsp;北京</span>
          <span>东北风4级</span>
          <span className={styles.air}>优&nbsp;20</span>
        </div>
        <ul className={styles.future}>
          <li>
            <span>今天</span>
            <div className={styles.wLogo}></div>
            <span>27°/35°</span>
          </li>
          <li>
            <span>明天</span>
            <div className={styles.wLogo}></div>
            <span>27°/35°</span>
          </li>
          <li>
            <span>后天</span>
            <div className={styles.wLogo}></div>
            <span>27°/35°</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Weather;
