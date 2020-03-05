import styles from './index.css';
import React from 'react';
import 'antd/dist/antd.css';
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
      let startDate = moment(e).format(dateFormat);
      this.setState({ startDate: startDate });
      this.dateCalculate(startDate, this.state.duration);
    }
  }

  daysChange = (len: any):void => {
    console.log("daysChange called");
    this.setState({duration: len});
    this.dateCalculate(this.state.startDate, len);
  }

  dateCalculate = (start:any, len:any):void => {
    console.log("dateCalculate called");
    console.log("startDate input: " , start);
    console.log("duration input", len);

    let current = moment(start);  // convert from string to moment
    let endDate = current.add(len - 1, 'days').calendar(); // return type: string
    endDate = moment(moment(endDate).toDate()).format('YYYY-MM-DD');  // convert to moment, change format
    this.setState(() => ({ endDate: endDate }));
  }

  render() {
    return (
      <div className={styles.normal}>
        <span style={{"margin": "5px"}}>기준일</span>
        <DatePicker onChange={(e) => this.calendarChange(e, this.state.duration)} />
        <InputNumber min={1} defaultValue={1} onChange={this.daysChange} />
        <div>
          {this.state.startDate} ~ {this.state.endDate}
        </div>
      </div>
    );
  }
}

export default TotalPrice;
//https://velog.io/@yesdoing/TypeScript-with-React-Redux-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-k5jsis62ah