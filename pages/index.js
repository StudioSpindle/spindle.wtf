import React, { Component } from 'react';

import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Main from '../components/Main';
import List from '../components/List';

import connect from '../content/connect';

class Index extends Component {
  render() {
    return (
      <Layout>
        <Intro />
        <Main />
        <List entries={connect} />
      </Layout>
    );
  }
}

export default Index;
