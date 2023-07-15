import React from 'react';
import Layout from './component/layout/Layout';
import Home from './component/Home/Home';

function App() {
  return (
    <>
      <Layout  Content={Home} />
    </>
  );
}

export default App;
