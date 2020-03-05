import styles from './index.css';
import React from 'react';

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