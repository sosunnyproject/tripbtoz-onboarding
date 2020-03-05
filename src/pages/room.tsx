import styles from './index.css';
import React from 'react';
import 'antd/dist/antd.css';

class Room extends React.Component {
  render() {
    return (
      <div className={styles.normal}>
        <h1>객실 설정</h1>
      </div>
    );
  }
}
export default Room;