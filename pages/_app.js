import React from 'react';

import Layout from '../components/Layout';
import '../css/styles.css';

function App({ Component, props }) {
  return (
    <Layout>
      <Component { ...props } />
    </Layout>
  );
}

export default App;