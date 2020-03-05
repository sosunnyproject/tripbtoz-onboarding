import router from 'umi/router';
import styles from './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Link from "umi/link";

class Promotion extends React.Component {
  render() {
    return (
        <div className={styles.normal}>
          <h1>프로모션 설정</h1>
        </div>
    );
  }
}

export default Promotion;