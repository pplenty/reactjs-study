import React, { Component } from 'react';
import { Layout } from 'antd';
import RankTable from './RankTable';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;

class Keyword extends Component {
  render() {
    return <Layout>
      {/* <Sider>Sider</Sider> */}
      <Layout>
        {/* <Header>Header</Header> */}
        <Content>
          <RankTable test={[1,2,3]}></RankTable>
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>;
  }

}

export default Keyword;