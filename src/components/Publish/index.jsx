import React, { PureComponent } from 'react';
import styles from './index.less';

class Publish extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      tab: [
        {
          name: '发布图文',
          placeholder: '有什么新鲜事想告诉大家',
          maxNum: 2000,
          extra: {
            name: '发布长文',
            iconClass: 'icon-fuxuankuang',
            iconColor: '#999',
          },

        },
        {
          name: '发布视频',
          placeholder: '视频标题（30字以内）',
          maxNum: 30,
        },
        {
          name: '发布问答',
          placeholder: '请输入问题描述（40字以内）',
          maxNum: 40,
          extra: {
            name: '更多问答',
            iconClass: 'icon-ask',
            iconColor: '#ed4040',
          },
        },
      ],
    };

    this.switchTab = this.switchTab.bind(this);
  }

  switchTab(index) {
    this.setState({
      current: index,
    });
  }

  render() {
    const tabItem = this.state.tab.map((item, index) =>
      <li key={index} className={index === this.state.current ? styles.current : ''}
          onClick={() => this.switchTab(index)}>{item.name}</li>,
    );
    let tabDom =
      this.state.current === 1 ?
        <div className={styles.pubLeft}>
          <div className={styles.addImages}>
            <i className={`iconfont icon-video`} style={{ color: 'rgb(42, 144, 215)' }}></i>
            <span>添加视频</span>
          </div>
        </div> :
        <div className={styles.pubLeft}>
          <div className={styles.addImages}>
            <i className={`iconfont icon-tupiancopy`} style={{ color: '#ed4040' }}></i>
            <span>添加图片</span>
          </div>
          <div className={styles.pubMsg}>
            <i className={`iconfont ${this.state.tab[this.state.current].extra.iconClass}`}
               style={{ color: this.state.tab[this.state.current].extra.iconColor }}></i>
            <span>{this.state.tab[this.state.current].extra.name}</span>
          </div>
        </div>;

    return (
      <div className={styles.publish}>
        <ul>{tabItem}</ul>
        <div className={styles.pubCon}>
          <textarea placeholder={this.state.tab[this.state.current].placeholder}></textarea>
          <p className={styles.wordName}>{'0/' + this.state.tab[this.state.current].maxNum + '字'}</p>
        </div>
        <div className={styles.pubFooter}>
          {tabDom}
          <span className={styles.pubRight}>发布</span>
        </div>
      </div>
    );
  }
}

export default Publish;
