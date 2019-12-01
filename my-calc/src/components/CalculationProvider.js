import React, { useState } from 'react';

export const CalculationContext = React.createContext();

const CalculationProvider = props => {
  const [result, setResult] = useState(0);

  const calculate = expression =>{
      setResult(eval(expression))
  }

  return (
    <CalculationContext.Provider
      value={{
        calculate,
        result
      }}
    >
      {props.children}
    </CalculationContext.Provider>
  );
};

export default CalculationProvider;