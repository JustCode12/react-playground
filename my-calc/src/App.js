import React from 'react';
import './App.css';

import  KeyPad  from './components/KeyPad';
import  Result  from './components/Result';
import CalculationProvider from './components/CalculationProvider';

function App() {

  return (
    <div className="App">
      <CalculationProvider>
        <Result />
        <KeyPad />       
      </CalculationProvider>
    </div>
  );
}

export default App;
