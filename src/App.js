import React from 'react';
import MyForm from './contact';
import MyContent from './content';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MyContent/>
      <MyForm/>
      </header>
    </div>
  );
}

export default App;
