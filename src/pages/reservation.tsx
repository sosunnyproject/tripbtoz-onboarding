import _ from 'lodash'
import styles from './index.css';
import React from 'react';
import { AutoComplete } from 'antd';

interface State {
    keyword: string,
    dataSrc: Array<any>,
    selectedData: string
}

class Reservation extends React.Component<{}, State> {
  state = {
    keyword: '',
    dataSrc: [],
    selectedData: ''
  };

  // text = ''

  // handleSearch = (searchText: string) => {
  //   console.log(1)
  //   this.text = searchText;
  //   _.debounce(this.onSearch, 50)
  // }

  onSearch = async (searchText: string):Promise<void> => {
    const keyword = window.encodeURI(searchText);
    const searchURL = decodeURI(`/ajax/autocomplete?name=${keyword}`);
    this.setState({keyword: searchText});

    const json = await fetch(searchURL).then( (response):any => { return response.json();})
    if (!json.data) {
      this.setState({
        dataSrc: []
      })
      return
    }
 
    const resultArray = json.data.map((element:any) => ({
        data: element,
        value: element.name
      }))
    this.setState({ dataSrc: resultArray});
  };

  onSelect = (value: any, option: any):void => {
    this.setState({ selectedData: JSON.stringify(option.data, null, 2)})
  }
  
  render() {
    return (
        <div className={styles.normal}>
          <h1>예약 관리</h1>
          <h2>지역 검색 </h2>
          <AutoComplete 
          options={this.state.dataSrc}
          style={{ width: 500 }}
          onSearch = {this.onSearch}
          onSelect={this.onSelect}
          placeholder="지역명을 입력하세요">
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