import React, { PureComponent } from 'react';
import styles from './index.less';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.main}>Main</div>
    );
  }
}

export default Main;
