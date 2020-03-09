import styles from './index.css';
import React, {useState} from 'react';
import { AutoComplete } from 'antd';

interface State {
    dataSrc: Array<any>,
    selectedData: string
}

class Reservation extends React.Component<{}, State> {
  state:State = {
    dataSrc: [],
    selectedData: ''
  };

  onSearch = (searchText: string):void => {
    const keyword = encodeURI(searchText);
    const searchURL = decodeURI(`/ajax/autocomplete?name=${keyword}`);
    let resultArray:any[] = [];

    fetch(searchURL
        ).then( (response):any => {
          return response.json();
        }).then ( (json):void=> {
          if(json.data) {                
            let len = (json.data).length;
            for (let i = 0; i < len; i++) {
              resultArray.push({data: json.data[i], value: json.data[i]['name']});
            }
          }
          this.setState({ dataSrc: resultArray});
      });
  };

  onSelect = (value, option):void => {
    this.setState({ selectedData: JSON.stringify(option.data, null, '\t')})
  }
  
  render() {
    return (
        <div className={styles.normal}>
          <h1>예약 관리</h1>
          <h2>지역 검색 </h2>
          <AutoComplete 
          options={this.state.dataSrc}
          style={{ width: 200 }}
          onSearch = {this.onSearch}
          onSelect={this.onSelect}
          placeholder="지역 이름을 검색하세요">
          </AutoComplete>
          <div>
            <pre>
              {this.state.selectedData}
            </pre>
          </div>
      </div>
    );
  }
}

export default Reservation;