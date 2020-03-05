import styles from './index.css';
import React from 'react';

class EditPrice extends React.Component{
  render() {
    return (
      <>
        <div className={styles.normal}>
          <h1>요금 및 일괄 수정</h1>
        </div>
      </>
    );
  }
}

export default EditPrice;