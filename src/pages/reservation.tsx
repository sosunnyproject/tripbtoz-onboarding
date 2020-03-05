import router from 'umi/router';
import styles from './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Link from "umi/link";

class Reservation extends React.Component {
  render() {
    return (
      <>
        <div className={styles.normal}>
          <h1>예약 관리</h1>
        </div>
      </>
    );
  }
}

export default Reservation;