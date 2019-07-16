import React, { Component } from 'react';
import { Row, Col, Table, DatePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '250,000',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10,000',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

class RankTable extends Component {

  constructor(props) {
    super();
    console.log(props);
  }


  render() {
    console.log('render', this);

    return (
      <>
        <Row className={'rowrow'}>
          <Table className={'table-ranking'} dataSource={dataSource} >
            <Col title={'Name'} dataIndex={'name'} key={'name'} />
            <Col title={'Age'} dataIndex={'age'} key={'age'} />
            <Col className={'money'} title={'Address'} dataIndex={'address'} key={'address'} />
          </Table>
        </Row>
        <Row>
          <span>
            <DatePicker
              className="exposure-period"
              showTime={{
                defaultValue: moment('00:00:00', 'HH:mm:ss'),
              }}
              // value={viewOpenAt}
              placeholder="시작 일시"
              // onChange={this.onViewOpenAtChange}
              // onOk={this.onViewOpenAtOk}
            />
            &nbsp; ~ &nbsp;
                    <DatePicker
              className="exposure-period"
              format="MM-DD=YY"
              showTime={{
                defaultValue: moment(),
              }}
              // value={viewClosedAt}
              placeholder="종료 일시"
              onChange={() => console.log(123)}
              // onOk={this.onViewClosedAtOk}
            />
          </span>
        </Row>
      </>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

}

export default RankTable;