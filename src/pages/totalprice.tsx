import styles from './index.css';
import React from 'react';
import 'antd/dist/antd.css';
import { DatePicker, InputNumber, Button, Radio } from 'antd';
import {LeftOutlined, RightOutlined } from '@ant-design/icons';
import moment, { isMoment } from 'moment';

const dateFormat = 'YYYY-MM-DD';

interface State {
    startDate: string;
    endDate: string;
    duration: number;
    
}

class TotalPrice extends React.Component<{}, State> {
  state:State = {
    startDate: moment().format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
    duration: 1
  };

  // 달력 버튼
  calendarChange = (e:any, days: number): void => {
    if (e == null) {
      return;
    } else {
      let startDate = moment(e).format(dateFormat);
      this.setState({ startDate: startDate });
      this.dateCalculate(startDate, this.state.duration);
    }
  }

  // 숙박일수 버튼
  daysChange = (len: any):void => {
    this.setState({duration: len});
    this.dateCalculate(this.state.startDate, len);
  }

  // 날짜 backward forward 버튼
  buttonChange = (type: string): void => {
    const current = moment(this.state.startDate);
    let newStart;
    if (type === 'backward'){
      newStart = current.subtract(1, 'days').format('YYYY-MM-DD');
    } else if (type === 'forward') {
      newStart = current.add(1, 'days').format('YYYY-MM-DD');
    }
    this.setState({ startDate: String(newStart)});
    this.dateCalculate(newStart, this.state.duration);
  }

  // 시작~끝 날짜 계산 업데이트
  dateCalculate = (start:any, len:any):void => {
    let current = moment(start); 
    let endDate = current.add(len - 1, 'days').format('YYYY-MM-DD');
    this.setState(() => ({ endDate: endDate }));
  }

  render() {
    return (
      <div className={styles.normal}>
        <span style={{"margin": "5px"}}>체크인 기준</span>
        <DatePicker value = {moment(this.state.startDate)} onChange={(e) => this.calendarChange(e, this.state.duration)} />
        <Button type="primary" size="large" onClick={() => this.buttonChange('backward')}> <LeftOutlined /> Backward </Button> 
        <Button type="primary" size="large" onClick={() => this.buttonChange('forward')}> <RightOutlined /> Forward </Button> 
        <span style={{"margin": "5px"}}>숙박일수</span>
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