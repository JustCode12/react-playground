import React from 'react';
import './App.css';

import  KeyPad  from './components/KeyPad';
import  Footer  from './components/Footer';
import  Result  from './components/Result';
import CalculationProvider from './components/CalculationProvider';

function App() {

  return (
    <div className="App">
      <CalculationProvider>
        <Result />
        <KeyPad />       
      </CalculationProvider>
      <Footer />
    </div>
  );
}

export default App;
