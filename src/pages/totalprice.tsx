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

  render() {
    return (
      <>
        <div className={styles.normal}>
          <span style={{"margin": "5px"}}>기준일</span>
          <DatePicker onChange={this.calendarChange} />
          <InputNumber min={1} defaultValue={1} onChange={this.daysChange} />
          <div>
            {this.state.startDate} ~ {this.state.endDate}
          </div>
        </div>
      </>
    );
  }

  calendarChange = (date:any, dateString: string): void => {
    if (date == null) {
      return;
    } else {
      let newDate = date.clone();
      let daycount = this.state.duration;
      console.log(daycount);
      newDate = newDate.add(daycount, 'days').calendar();   
      newDate = moment(newDate, 'MM/DD/YYYY').toDate(); // js Date object
      let endDate = moment(newDate).format('YYYY-MM-DD');
      console.log(`start: ${dateString}`);
      console.log(`end: ${endDate}`);
      console.log(`duration: ${this.state.duration}`);
      this.setState({ startDate: dateString })
      this.setState({ endDate: endDate })
    }
  }

  daysChange = (value:any):void => {
    this.setState({duration: value-1});
  }

}

export default TotalPrice;
//https://velog.io/@yesdoing/TypeScript-with-React-Redux-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-k5jsis62ah