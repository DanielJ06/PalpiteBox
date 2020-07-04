import React from 'react';

import Header from '../components/Header';
import '../css/styles.css';

function App({ Component, props }) {
  return (
    <>
      <Header />
      <Component { ...props } />
    </>
  );
}

export default App;