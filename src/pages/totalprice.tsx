import router from 'umi/router';
import styles from './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Link from "umi/link";
import { DatePicker, InputNumber } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';

interface Props {
}

interface State {
    startDate: string;
    endDate: string;
    duration: number;
}

class TotalPrice extends React.Component<Props, State> {
  state:State = {
    startDate: '',
    endDate: '',
    duration: 1
  };

  calendarChange = (e:any, days: number): void => {
    console.log("calendarChange called");
    if (e == null) {
      return;
    } else {
      let startDate = moment(e).format(dateFormat);  // string YYYY-MM-DD
      this.setState({ startDate: startDate });
      this.dateCalculate(e, this.state.duration);
    }
  }

  daysChange = (len: any):void => {
    console.log("daysChange called");
    this.setState({duration: len});
    this.dateCalculate(this.state.startDate, len);
  }

  dateCalculate = (start:any, len:any):void => {
    console.log("startDate input: " , start);
    console.log("duration input", len);

    let current = moment(start);  // string to moment 
    let newDate = current.add(len - 1, 'days').calendar(); // type: string
    newDate = moment(moment(newDate).toDate()).format('YYYY-MM-DD');  // change format
    this.setState(() => ({ endDate: newDate }));
  }

  render() {
    return (
      <>
        <div className={styles.normal}>
          <span style={{"margin": "5px"}}>기준일</span>
          <DatePicker onChange={(e) => this.calendarChange(e, this.state.duration)} />
          <InputNumber min={1} defaultValue={1} onChange={this.daysChange} />
          <div>
            {this.state.startDate} ~ {this.state.endDate}
          </div>
        </div>
      </>
    );
  }


}

export default TotalPrice;
//https://velog.io/@yesdoing/TypeScript-with-React-Redux-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-k5jsis62ah