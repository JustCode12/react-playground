import React, { useContext } from 'react';
import { CalculationContext } from './CalculationProvider';

const Result = () => {
    const { result } = useContext(CalculationContext);
    return (
        <div><span>Result: </span>{result}</div>
    )
}
export default Result;

