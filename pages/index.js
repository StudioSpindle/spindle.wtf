import React, { Component } from 'react';

import analytics from '../services/analytics';
import tagmanager from '../services/tagmanager';

import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Main from '../components/Main';
import List from '../components/List';

import connect from '../content/connect';

class Index extends Component {
  constructor(props) {
    super(props);

    analytics.initialize();
    tagmanager.initialize();
  }

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
