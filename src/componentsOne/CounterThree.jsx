import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <>
    
    <div>
      <div>Count - {count}</div>
      <button type='button' onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button type='button' onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>


<div>
<div>Count2 - {count2}</div>
<button type='button' onClick={() => dispatch2({ type: 'increment' })}>Increment</button>
<button type='button' onClick={() => dispatch2({ type: 'decrement' })}>Decrement</button>
</div>
</>
  );
};

export default CounterThree;
