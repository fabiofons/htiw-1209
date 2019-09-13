import React from 'react';
import Widget from './components/Widget'
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>Widget for Ideaware</h1>
      <Widget feedUrl='http://api.massrelevance.com/MassRelDemo/kindle.json' maxPost={5} intervalSeg={15} />
    </div>
  );
}

export default App;
