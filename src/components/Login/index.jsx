import React, { PureComponent } from 'react';
import styles from './index.less';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.login}>
        <div className={styles.content}>
          <p>登录后可以保存您的浏览喜好、评论、收藏，并与APP同步更可以发布微头条</p>
          <div className={styles.lButton}>登录</div>
          <div className={styles.lLogo}>
            <div className={styles.qqLogo}></div>
            <div className={styles.wechatLogo}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
