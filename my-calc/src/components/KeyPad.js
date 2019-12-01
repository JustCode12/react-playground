import React, {useState, useContext} from 'react';
import { CalculationContext } from './CalculationProvider';

const  KeyPad = () => {

    const [expression, setExpression] = useState("")
    const {calculate} = useContext(CalculationContext);

    const onClick = e => {
        const clicked = e.target.name;
        if(expression.length>0&&clicked==="="){
            calculate(expression)
            setExpression("")
        }
        else{
        setExpression(expression + clicked); 
        }
    }
    return (
    <div><span>Data: </span>{expression}
      <div>
                <button name="(" onClick={onClick}>(</button>
                <button name="CE" onClick={onClick}>CE</button>
                <button name=")" onClick={onClick}>)</button>
                <button name="C" onClick={onClick}>C</button><br/>


                <button name="1" onClick={onClick}>1</button>
                <button name="2" onClick={onClick}>2</button>
                <button name="3" onClick={onClick}>3</button>
                <button name="+" onClick={onClick}>+</button><br/>


                <button name="4" onClick={onClick}>4</button>
                <button name="5" onClick={onClick}>5</button>
                <button name="6" onClick={onClick}>6</button>
                <button name="-" onClick={onClick}>-</button><br/>

                <button name="7" onClick={onClick}>7</button>
                <button name="8" onClick={onClick}>8</button>
                <button name="9" onClick={onClick}>9</button>
                <button name="*" onClick={onClick}>x</button><br/>


                <button name="." onClick={onClick}>.</button>
                <button name="0" onClick={onClick}>0</button>
                <button name="=" onClick={onClick}>=</button>
                <button name="/" onClick={onClick}>÷</button><br/>
            </div>
    </div>
    
    );

}

export default KeyPad;