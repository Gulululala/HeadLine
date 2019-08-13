import React, { PureComponent } from 'react';
import styles from './index.less';

class SearchBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.searchBox}>
        <input type={'text'} placeholder={'请输入要搜索的内容'}/>
        <button>搜索</button>
      </div>
    );
  }
}

export default SearchBox;
