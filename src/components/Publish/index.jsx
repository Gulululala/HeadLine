import React, { PureComponent } from 'react';
import styles from './index.less';

class Publish extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.publish}>Publish</div>
    );
  }
}

export default Publish;
