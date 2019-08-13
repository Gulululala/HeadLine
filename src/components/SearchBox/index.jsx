import React, { PureComponent } from 'react';
import styles from './index.less';

class SearchBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.searchbox}>SearchBox</div>
    );
  }
}

export default SearchBox;
