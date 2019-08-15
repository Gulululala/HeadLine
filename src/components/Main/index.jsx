import React, { PureComponent } from 'react';
import styles from './index.less';
import axios from 'axios';
// import newJson from '../../assets/json/news'
// const Koa = require('koa');
// const proxy = require('koa2-simple-proxy');
// import qs from 'qs';

// import newsJson from '../../assets/json/news';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};


  }

  componentDidMount () {
    // axios.get('../../assets/json/news.json',{
    //       headers: {
    //         "content-type": 'application/json'
    //       }
    //     })
    axios({
      method:"GET",
      url:"../../assets/json/news.json",
      data: {},            //参数
      headers:{
        "Content-type": 'application/json'    //请求头携带的token
      }
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {


    // axios.get('/weather/stream/widget/local_weather/data/', {
    //   params: {
    //     city: '广州',
    //   },
    //   // baseURL: 'https://www.toutiao.com',
    //   // headers: {
    //   //   'content-type': 'application/x-www-form-urlencoded'
    //   // },
    // })
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    // https://www.toutiao.com/group
    const content = [
      {
        group_id: '6722755072184287752',
        title: '国家标准要来了！妈妈终于让我吃辣条了？',
        chinese_tag: '传媒',
        media_avatar_url: '//p1.pstatp.com/large/8532/7581013616',
        source: '新京报',
        comments_count: 142,
        behot_time: 1565762242,
        image_url: '//p1.pstatp.com/list/190x124/pgc-image/RYYPdx0E2ydtOv',
      },
      {
        "comments_count": 677,
        "title": "这22个故事为何连续7天刷屏？",
        "chinese_tag": "时政",
        "source": "新华社",
        "image_url": "//p1.pstatp.com/list/pgc-image/6d9352b73471437e9f36331ec3713fed",
        "media_avatar_url": "//p2.pstatp.com/large/9519/925052030",
        "behot_time": 1565762241,
        "group_id": "6724823122937119243",
      },
      {
        "single_mode": false,
        "abstract": "党的*屏蔽的关键字*以来，*屏蔽的关键字**屏蔽的关键字*多次给基层干部群众回信。从脱贫攻坚，到志愿服务；从大学校园，到民营企业；从祖国边疆，到创新一线…",
        "middle_mode": true,
        "more_mode": false,
        "tag": "news_politics",
        "comments_count": 473,
        "tag_url": "search/?keyword=%E6%97%B6%E6%94%BF",
        "title": "*屏蔽的关键字*回信后，这个村返乡创业的年轻人越来越多了",
        "chinese_tag": "时政",
        "source": "人民日报",
        "group_source": 2,
        "image_url": "//p1.pstatp.com/list/pgc-image/RZ4UJmj5chplN8",
        "media_url": "/c/user/token/MS4wLjABAAAAa4jZTw8oFVgiBHDJk10547ATPToNthylT4jZwY2ik1w/",
        "media_avatar_url": "//p10.pstatp.com/large/b725000102bd7072f33f",
        "source_url": "/group/6724790685603463691/",
        "article_genre": "article",
        "is_stick": true,
        "item_id": "6724790685603463691",
        "is_feed_ad": false,
        "behot_time": 1565762240,
        "has_gallery": false,
        "group_id": "6724790685603463691",
        "middle_image": "http://p1.pstatp.com/list/pgc-image/RZ4UJmj5chplN8"
      },
      {
        "single_mode": true,
        "abstract": "中国游泳奥运冠军孙杨现在已经被任职浙江体育技术学院训练处副处长，很多网友担心这会让孙杨无法将全部精力都投入到训练中。",
        "middle_mode": true,
        "more_mode": true,
        "tag": "news_sports",
        "comments_count": 4,
        "tag_url": "news_sports",
        "title": "喜讯！孙杨升职担任副处长后，公开宣布重要决定，网友：好样的",
        "chinese_tag": "体育",
        "source": "平哥聊体育",
        "group_source": 2,
        "has_gallery": false,
        "media_url": "/c/user/token/MS4wLjABAAAAvTyamBcv5Pu5vYK5yYv6_uI-UUIxHi6O2B89exdKgRY/",
        "media_avatar_url": "//p2.pstatp.com/large/434a000261ac2ebcae0b",
        "image_list": [
          {
            "url": "//p1.pstatp.com/list/pgc-image/b36ae4e5fdc243ab95f350a88eacdece"
          },
          {
            "url": "//p1.pstatp.com/list/pgc-image/22f245c27c294c1ea88c41878e586171"
          },
          {
            "url": "//p9.pstatp.com/list/pgc-image/254b71be5800429fbf7b8029fe63257c"
          }
        ],
        "source_url": "/group/6724581964835193355/",
        "article_genre": "article",
        "item_id": "6724581964835193355",
        "is_feed_ad": false,
        "behot_time": 1565762239,
        "image_url": "//p1.pstatp.com/list/190x124/pgc-image/b36ae4e5fdc243ab95f350a88eacdece",
        "group_id": "6724581964835193355",
        "middle_image": "http://p1.pstatp.com/list/pgc-image/b36ae4e5fdc243ab95f350a88eacdece"
      },
      {
        "chinese_tag": "国际",
        "media_avatar_url": "//p3.pstatp.com/large/957/7993299147",
        "is_feed_ad": false,
        "tag_url": "news_world",
        "title": "一对朝鲜籍母子陈尸首尔公寓 疑似活活饿死",
        "single_mode": true,
        "middle_mode": true,
        "abstract": "韩国警方13日称，一对朝鲜籍母子近日被发现死在位于韩国首尔的一栋公寓中，死亡原因疑似为饥饿。图为行人撑伞走在韩国首尔一条街道上。",
        "tag": "news_world",
        "behot_time": 1565762238,
        "source_url": "/group/6724881770400973319/",
        "source": "欧洲时报",
        "more_mode": false,
        "article_genre": "article",
        "image_url": "//p3.pstatp.com/list/190x124/pgc-image/RZ5vJ8fBO1yh8A",
        "group_source": 2,
        "item_id": "6724881770400973319",
        "has_gallery": false,
        "group_id": "6724881770400973319",
        "middle_image": "http://p3.pstatp.com/list/pgc-image/RZ5vJ8fBO1yh8A",
        "media_url": "/c/user/token/MS4wLjABAAAAvI94RQEt543m1bflBZbDeNLVZheWwlnmMD_XYqjPVmY/"
      },
      {
        "single_mode": true,
        "abstract": "虽然4月霍启刚才公开秀了一波小女儿▽但在2月下旬，估计才刚出月子，郭晶晶就陪着自家老公出席了一个公开活动，整个*屏蔽的关键字*眼可见地“肿”了不少。",
        "middle_mode": true,
        "more_mode": true,
        "tag": "news_entertainment",
        "comments_count": 917,
        "tag_url": "news_entertainment",
        "title": "霍启刚跟女生挽手，对方不是郭晶晶？他俩的感情也有被质疑的一天",
        "chinese_tag": "娱乐",
        "source": "橘子娱乐",
        "group_source": 2,
        "has_gallery": false,
        "media_url": "/c/user/token/MS4wLjABAAAA3mqEedQ6mO-giewsP9sPYXX-JNxYTHZcVjslJOOtTok/",
        "media_avatar_url": "//p8.pstatp.com/large/6ee800000f5cfd531068",
        "image_list": [
          {
            "url": "//p1.pstatp.com/list/pgc-image/RYXgzyu8ofyAzM"
          },
          {
            "url": "//p1.pstatp.com/list/pgc-image/RYXh0g8ETVWi9"
          },
          {
            "url": "//p3.pstatp.com/list/pgc-image/RYXh0gkIhLMEch"
          }
        ],
        "source_url": "/group/6722709463825908231/",
        "article_genre": "article",
        "item_id": "6722709463825908231",
        "is_feed_ad": false,
        "behot_time": 1565762238,
        "image_url": "//p1.pstatp.com/list/190x124/pgc-image/RYXgzyu8ofyAzM",
        "group_id": "6722709463825908231",
        "middle_image": "http://p1.pstatp.com/list/pgc-image/RYXgzyu8ofyAzM"
      },
      {
        "single_mode": true,
        "abstract": "如今，上海华东政法大学大三学生王某因携带零食进入上海迪士尼乐园时被园方工作人员翻包检查，并加以阻拦，她一纸诉状将上海迪士尼乐园告上了法庭。",
        "middle_mode": true,
        "more_mode": false,
        "tag": "news_society",
        "comments_count": 3262,
        "tag_url": "news_society",
        "title": "禁止外带食物 上海迪士尼被告了，双重标准：亚洲三家禁止 欧美三家却未明文禁止",
        // "title": "禁止外带食物 上海迪士尼被告了，双重标准：亚洲三家禁止 欧美三家却未明文禁止，律师观点：双重标准不合法",
        "chinese_tag": "社会",
        "source": "华商连线",
        "group_source": 2,
        "has_gallery": false,
        "media_url": "/c/user/token/MS4wLjABAAAAdrviMP0KIx9VNn8FlfbtiaCmd3ONQyQAxzrguoVNz7Y/",
        "media_avatar_url": "//p1.pstatp.com/large/ff7f000037234ff16cc0",
        "source_url": "/group/6724634968280007172/",
        "article_genre": "article",
        "item_id": "6724634968280007172",
        "is_feed_ad": false,
        "behot_time": 1565762237,
        "image_url": "//p3.pstatp.com/list/190x124/pgc-image/3c85953568e1443e83202656d6ab71a1",
        "group_id": "6724634968280007172",
        "middle_image": "http://p3.pstatp.com/list/pgc-image/3c85953568e1443e83202656d6ab71a1"
      },
      {
        "single_mode": true,
        "abstract": "只有国内市场才有家庭买回家，做菜，做饭，当下饭菜的。国内市场有了波动是有以下几个原因：一，新产品没有老味道这个是主要的原因。",
        "middle_mode": true,
        "more_mode": true,
        "tag": "news",
        "comments_count": 1000,
        "tag_url": "search/?keyword=%E5%85%B6%E5%AE%83",
        "title": "老干妈销量“暴跌”从销售神话到现状，老干妈为何卖不出去了？",
        "chinese_tag": "其它",
        "source": "李合伟说",
        "group_source": 2,
        "has_gallery": false,
        "media_url": "/c/user/token/MS4wLjABAAAAogJoZiPMkDehwArRJq71f6n2pxJE2Ujkklb5jSjwjiI/",
        "media_avatar_url": "//p1.pstatp.com/large/6edf000275648a333661",
        "image_list": [
          {
            "url": "//p1.pstatp.com/list/dfic-imagehandler/ac3ef3f5-3e83-4cdf-b328-334fb79aa2b8"
          },
          {
            "url": "//p1.pstatp.com/list/dfic-imagehandler/02811cb7-defb-4be2-9bbf-2a6e11edace1"
          },
          {
            "url": "//p1.pstatp.com/list/dfic-imagehandler/3ab3dfc0-e5cd-4263-a0ee-ef84fb9f9722"
          }
        ],
        "source_url": "/group/6724696478096294404/",
        "article_genre": "article",
        "item_id": "6724696478096294404",
        "is_feed_ad": false,
        "behot_time": 1565762236,
        "image_url": "//p1.pstatp.com/list/dfic-imagehandler/ac3ef3f5-3e83-4cdf-b328-334fb79aa2b8",
        "group_id": "6724696478096294404",
        "middle_image": "http://p1.pstatp.com/list/dfic-imagehandler/ac3ef3f5-3e83-4cdf-b328-334fb79aa2b8"
      },
      {
        "single_mode": true,
        "abstract": "孙杨可以说是中国游泳的代表，这些年以来孙杨在各项世界大赛都取得了不俗的成绩，已经是最成功的游泳运动员之一。",
        "middle_mode": true,
        "more_mode": false,
        "tag": "news_sports",
        "comments_count": 7,
        "tag_url": "news_sports",
        "title": "孙杨已经成为副处长，未来孙杨能否像姚明担任篮协主席那样",
        "chinese_tag": "体育",
        "source": "互联网+体育",
        "group_source": 2,
        "has_gallery": false,
        "media_url": "/c/user/token/MS4wLjABAAAAs8rOAAIfGPWJi1DkfQaFx0QmPwLD1KLls_W0eKmytSo/",
        "media_avatar_url": "//p2.pstatp.com/large/8464/2361626673",
        "source_url": "/group/6724586728197194247/",
        "article_genre": "article",
        "item_id": "6724586728197194247",
        "is_feed_ad": false,
        "behot_time": 1565762235,
        "image_url": "//p1.pstatp.com/list/dfic-imagehandler/a218f14c-9d57-4ab5-b940-233134799a8b",
        "group_id": "6724586728197194247",
        "middle_image": "http://p1.pstatp.com/list/dfic-imagehandler/a218f14c-9d57-4ab5-b940-233134799a8b"
      },
      {
        "single_mode": true,
        "abstract": "文/丁敏君女星谢娜自从与张杰结婚之后感情一直非常好，但近日关于她和张杰感情失和的传闻甚嚣尘上。很多网友结合此前网上盛传的“谢娜*屏蔽的关键字*张碧晨”的说法，也是对媒体所谓的“爆料”深信不疑。",
        "middle_mode": true,
        "more_mode": true,
        "tag": "news_entertainment",
        "comments_count": 29,
        "tag_url": "news_entertainment",
        "title": "谢娜张碧晨合体击碎谣言！连发3条动态，力证和张杰感情超好？",
        "chinese_tag": "娱乐",
        "source": "剧毒影响",
        "group_source": 2,
        "has_gallery": false,
        "media_url": "/c/user/token/MS4wLjABAAAAMgyeTjV2EHIUjX0S1I20d9Gp4JA9d2gqhEd9RLHi7Bo/",
        "media_avatar_url": "//p3.pstatp.com/large/471a000114a6c5dfdc70",
        "image_list": [
          {
            "url": "//p3.pstatp.com/list/pgc-image/9c283db2d1964aee8f6ea351d6834c04"
          },
          {
            "url": "//p3.pstatp.com/list/pgc-image/319d6d5c8ab84e8bb7d489ef7ec1b33b"
          },
          {
            "url": "//p1.pstatp.com/list/pgc-image/7d840c98e43642aebf685a251b8498c7"
          }
        ],
        "source_url": "/group/6724540543725994507/",
        "article_genre": "article",
        "item_id": "6724540543725994507",
        "is_feed_ad": false,
        "behot_time": 1565762234,
        "image_url": "//p3.pstatp.com/list/190x124/pgc-image/9c283db2d1964aee8f6ea351d6834c04",
        "group_id": "6724540543725994507",
        "middle_image": "http://p3.pstatp.com/list/pgc-image/9c283db2d1964aee8f6ea351d6834c04"
      }
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
            <span style={{ color: '#777', marginRight: '4px' }}>{item.comments_count + '评论 ⋅'}</span>
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
