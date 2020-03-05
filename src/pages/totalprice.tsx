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
    selectedDate: any,
    startDate: string;
    endDate: string;
    duration: number;
}

class TotalPrice extends React.Component<Props, State> {
  state:State = {
    startDate: '',
    endDate: '',
    duration: 1,
    selectedDate: null
  };

  calendarChange = (e:any, days: number): void => {
    console.log("calendarChange called");
    // console.log(e);
    if (e == null) {
      return;
    } else {
      let startDate = moment(e).format(dateFormat);  // string YYYY-MM-DD
      this.setState({ startDate: startDate });



      let newDate = e.clone();
      newDate = newDate.add(this.state.duration - 1, 'days').calendar(); // type: string
      newDate = moment(moment(newDate).toDate()).format('YYYY-MM-DD');  // change format
      this.setState(() => ({ endDate: newDate }));

      this.dateCalculate(newDate, this.state.duration);

    }
  }

  daysChange = (value: any):void => {
    console.log("daysChange called");
    // this.setState({duration: value});
    this.setState({duration: value});
    // console.log("startDate", this.state.startDate);

    let current = moment(this.state.startDate);  // string to moment 
    let newDate = current.add(value - 1, 'days').calendar(); // type: string
    newDate = moment(moment(newDate).toDate()).format('YYYY-MM-DD');  // change format
    this.setState(() => ({ endDate: newDate }));
    
    this.dateCalculate(this.state.startDate, value);
  }

  dateCalculate = (start:any, days:any):void => {
    console.log("startDate input: " , start);
    console.log("duration input", days);
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