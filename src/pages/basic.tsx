import router from 'umi/router';
import styles from './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Link from "umi/link";

export default function() {
  return (
    <>
      <div className={styles.normal}>
        <h1>Page users</h1>
        <button onClick={() => {router.goBack();}}> 
        go back
        </button>
      </div>
    </>
  );
}