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
  state = {
    startDate: moment().format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
    duration: 1
  };

  // 달력 버튼 handleCalendarChange
  handleCalendarChange = (e:any, days: number): void => {
    if (e == null) {
      return;
    } else {
      let startDate = moment(e).format(dateFormat);
      this.setState({ startDate: startDate });
      // this.dateCalculate(startDate, this.state.duration);
    }
  }

  // 숙박일수 버튼 
  handleDaysChange = (len: any):void => {
    this.setState({duration: len});
  }

  // 날짜 backward forward 버튼
  handleButtonChange = (type: string): void => {
    const current = moment(this.state.startDate);
    let newStart;
    if (type === 'backward'){
      newStart = current.subtract(1, 'days').format('YYYY-MM-DD');
    } else {
      newStart = current.add(1, 'days').format('YYYY-MM-DD');
    }
    this.setState({ startDate: newStart});
  }

  render() {
    const current = moment(this.state.startDate); 
    const endDate = current.add(this.state.duration - 1, 'days').format('YYYY-MM-DD');

    return (
      <div className={styles.normal}>
        <span style={{"margin": "5px"}}>체크인 기준</span>
        <DatePicker value = {moment(this.state.startDate)} onChange={(e) => this.handleCalendarChange(e, this.state.duration)} />
        <Button type="primary" size="large" onClick={() => this.handleButtonChange('backward')}> <LeftOutlined /> Backward </Button> 
        <Button type="primary" size="large" onClick={() => this.handleButtonChange('forward')}> <RightOutlined /> Forward </Button> 
        <span style={{"margin": "5px"}}>숙박일수</span>
        <InputNumber min={1} defaultValue={1} onChange={this.handleDaysChange} />
        <div>
          {this.state.startDate} ~ {endDate}
        </div>
      </div>
    );
  }
}

export default TotalPrice;
//https://velog.io/@yesdoing/TypeScript-with-React-Redux-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-k5jsis62ah