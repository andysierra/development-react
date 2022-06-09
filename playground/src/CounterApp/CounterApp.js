import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CounterApp.css';

const CounterApp = ({value}) => {

  const [counter, setCounter] = useState(value);

  const add       = e => setCounter(counter+1);
  const substract = e => setCounter(counter-1);
  const reset     = e => setCounter(value);

  return (
    <div>
      <h1>CounterApp</h1>
      <hr></hr>
      <button onClick={add}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={substract}>-</button>
      <h2>{counter}</h2>
    </div>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number
}

CounterApp.defaultProps = {
  value: 0
}

export default CounterApp;