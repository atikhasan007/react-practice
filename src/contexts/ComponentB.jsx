import React, { useContext } from 'react';

import { CounterContext } from '../App';

export default function ComponentB() {

    const countContext = useContext(CounterContext);


  return (
    <div>
        <p>Component A</p>
        <button type='button' onClick={()=>countContext.countDispatch({
            type: 'increment'
        })}>
            Increment
        </button>

        <button type='button' onClick={()=>countContext.countDispatch({
            type:'decrement'
        })}>
            Decrement
        </button>
      
    </div>
  )
}
