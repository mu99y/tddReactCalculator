import React from 'react'
import PropTypes from 'prop-types';
import Key from '../Key/Key';
import './Keypad.css';

const Keypad = ({ 
    callOperator, 
    numbers, 
    operators, 
    setOperator, 
    updateDisplay 
}) => {
    const numberKeys = numbers.map(number => <p key={number}>{number}</p>);
    const operatorKeys = operators.map(operator => <p key={operator}>{operator}</p>);
    return(
        <div className='keyboard-container'>
            <div className='numbers-container'>
                {numberKeys}
            </div>
            <div className='operators-container'>
                {operatorKeys}
            </div>
            <Key
                keyAction={callOperator}
                keyType=""
                keyValue=""
            />
        </div>
    );
};

Keypad.propTypes = {
    callOperator: PropTypes.func.isRequired,
    numbers: PropTypes.array.isRequired,
    operators: PropTypes.array.isRequired,
    setOperator: PropTypes.func.isRequired,
    updateDisplay: PropTypes.func.isRequired
}

export default Keypad;