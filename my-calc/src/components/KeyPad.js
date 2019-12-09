import React, { useState, useContext, useEffect } from 'react';
import { CalculationContext } from './CalculationProvider';
import './KeyPad.css';

const KeyPad = () => {

    const [expression, setExpression] = useState("");
    const { calculate } = useContext(CalculationContext);
    const numberButtons = ["0","1","2","3","4","5","6","7","8","9"]

    const onClick = e => {
        const clicked = e.target.name;
        if (expression.length > 0) {
            if (clicked === "=") {
                calculate(expression);
                setExpression("");
            }
            else {
                if (clicked === "C") {
                setExpression("");
                }
                else setExpression(expression + clicked);
            }
        }
        else {
            if (numberButtons.includes(clicked) || clicked === "-") {
                setExpression(clicked)
            }
        }


    }
    return (
        <div><span>Data: </span><strong>{expression}</strong>
            <div>
                <button className="EqualsButton" name="=" onClick={onClick}>=</button><br />
                


                <button name="1" onClick={onClick}>1</button>
                <button name="2" onClick={onClick}>2</button>
                <button name="3" onClick={onClick}>3</button>
                <button name="+" onClick={onClick}>+</button><br />


                <button name="4" onClick={onClick}>4</button>
                <button name="5" onClick={onClick}>5</button>
                <button name="6" onClick={onClick}>6</button>
                <button name="-" onClick={onClick}>-</button><br />

                <button name="7" onClick={onClick}>7</button>
                <button name="8" onClick={onClick}>8</button>
                <button name="9" onClick={onClick}>9</button>
                <button name="*" onClick={onClick}>x</button><br />


                <button name="." onClick={onClick}>.</button>
                <button name="0" onClick={onClick}>0</button>
                <button name="C" onClick={onClick}>C</button>
                <button name="/" onClick={onClick}>÷</button><br />
            </div>
        </div>
    );

}

export default KeyPad;