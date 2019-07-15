import React, { Component } from 'react';
import { Row, Col, Table } from 'antd';
import 'antd/dist/antd.css';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
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
        <Row type="flex" style={{ alignItems: 'center' }}>
          <Table dataSource={dataSource} columns={columns} />
        </Row>
        <Row type="flex" style={{ alignItems: 'center' }}>
          <h1>test</h1>
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