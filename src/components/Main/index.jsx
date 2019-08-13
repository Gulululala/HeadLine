import React, { PureComponent } from 'react';
import styles from './index.less';
import axios from 'axios';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    // axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    axios.get('https://www.toutiao.com/api/pc/feed/', {
      params: {
        min_behot_time: 0,
        category: '__all__',
        utm_source: 'toutiao',
        widen: 1,
        tadrequire: true,
        as: 'A155DDF5221C5CF',
        cp: '5D52DCB5BC6FEE1',
        _signature: '8rt1ZBASr.T79w9xGQ3gSfK7dX',
      },
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    // https://www.toutiao.com/group
    const content = [
      {
        group_id: '6722755072184287752',
        title: '国家标准要来了！妈妈终于让我吃辣条了？',
        chinese_tag: '传媒',
        media_avatar_url: '//p1.pstatp.com/large/8532/7581013616',
        source: '新京报',
        comment_count: 142,
        behot_time: 12,
        image_url: '//p1.pstatp.com/list/190x124/pgc-image/RYYPdx0E2ydtOv',
      },
      {
        group_id: '6722755072184287752',
        title: '国家标准要来了！妈妈终于让我吃辣条了？',
        chinese_tag: '传媒',
        media_avatar_url: '//p1.pstatp.com/large/8532/7581013616',
        source: '新京报',
        comment_count: 142,
        behot_time: 12,
        image_url: '//p1.pstatp.com/list/190x124/pgc-image/RYYPdx0E2ydtOv',
      },
      {
        group_id: '6722755072184287752',
        title: '国家标准要来了！妈妈终于让我吃辣条了？',
        chinese_tag: '传媒',
        media_avatar_url: '//p1.pstatp.com/large/8532/7581013616',
        source: '新京报',
        comment_count: 142,
        behot_time: 12,
        image_url: '//p1.pstatp.com/list/190x124/pgc-image/RYYPdx0E2ydtOv',
      },
      {
        group_id: '6722755072184287752',
        title: '国家标准要来了！妈妈终于让我吃辣条了？',
        chinese_tag: '传媒',
        media_avatar_url: '//p1.pstatp.com/large/8532/7581013616',
        source: '新京报',
        comment_count: 142,
        behot_time: 12,
        image_url: '//p1.pstatp.com/list/190x124/pgc-image/RYYPdx0E2ydtOv',
      },
      {
        group_id: '6722755072184287752',
        title: '国家标准要来了！妈妈终于让我吃辣条了？',
        chinese_tag: '传媒',
        media_avatar_url: '//p1.pstatp.com/large/8532/7581013616',
        source: '新京报',
        comment_count: 142,
        behot_time: 12,
        image_url: '//p1.pstatp.com/list/190x124/pgc-image/RYYPdx0E2ydtOv',
      },
    ];
    let conList = content.map((item, index) =>
      <div key={index} className={styles.newsList}>
        <a className={styles.avatar} href={'https://www.toutiao.com/group/' + item.group_id} target={'_blank'}
           rel={'noopener noreferrer'}>
          <img src={item.image_url} alt={'avatar'}/>
        </a>
        <div className={styles.newsCon}>
          <a className={styles.title} href={'https://www.toutiao.com/group/' + item.group_id} target={'_blank'}
             rel={'noopener noreferrer'}>
            <p>{item.title}</p>
          </a>
          <div style={{ display: 'flex' }}>
            <span className={styles.tag}>{item.chinese_tag}</span>
            <img className={styles.media} src={item.media_avatar_url} alt={'tag'}/>
            <span style={{ color: '#777', marginRight: '4px' }}>{item.source + ' ⋅'}</span>
            <span style={{ color: '#777', marginRight: '4px' }}>{item.comment_count + '评论 ⋅'}</span>
            <span style={{ color: '#999' }}>{item.behot_time + '分钟前'}</span>
          </div>
        </div>
      </div>,
    );
    return (
      <div className={styles.main}>{conList}</div>
    );
  }
}

export default Main;
