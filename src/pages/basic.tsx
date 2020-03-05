import styles from './index.css';
import React from 'react';

class Basic extends React.Component {
  render() {
    return (
        <div className={styles.normal}>
          <h1>기본 정보</h1>
        </div>
    );
  }
};

export default Basic;