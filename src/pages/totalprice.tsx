import router from 'umi/router';
import styles from './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Link from "umi/link";
import { DatePicker, InputNumber } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';
let startDate = "";

function onChange(date: any, dateString: any) {
  console.log(date);
  console.log('--------');
  console.log(moment(date).format(dateFormat)); // === dateString
  startDate = dateString;

}

interface Props {

}

interface State {
    startDate: string;
    endDate: string;
}

class totalprice extends React.Component<Props, State> {
  state:State = {
    startDate: '',
    endDate: ''
  };

  render() {
    return (
      <>
        <div className={styles.normal}>
          <span>기준일</span>
          <DatePicker onChange={(e) => this.onChange(e)} />
          {this.state.startDate}
        </div>
      </>
    );
  }

  onChange = (e: any): void => {
  
    this.setState({ startDate: String(e) })
  }
}

export default totalprice;
//https://velog.io/@yesdoing/TypeScript-with-React-Redux-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-k5jsis62ah