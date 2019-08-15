import React from 'react';
import styles from './index.css';
import Header from '../components/Header';
import Channel from '../components/Channel';
import Publish from '../components/Publish';
import SearchBox from '../components/SearchBox';
import Login from '../components/Login';
import Main from '../components/Main';
// import { connect } from 'dva';
//
// const namespace = 'headLine';

// @connect(({ headLine }) => ({
//   headLine,
// }))

export default function() {
  return (
    <div className={styles.normal}>
      <Header/>
      <div className={styles.container}>
        <div className={styles.left}>
          <Channel/>
        </div>
        <div className={styles.middle}>
          <Publish/>
          <Main/>
        </div>
        <div className={styles.right}>
          <SearchBox/>
          <Login/>
        </div>
      </div>
      <div className={styles.welcome}/>
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
    </div>
  );
}
