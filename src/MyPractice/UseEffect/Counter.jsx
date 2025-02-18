import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count , setCount] = useState(0);
    const [calculation , setCalculation ] = useState(0);
     
     const counter = () =>{
        setCount((prevCount)=> prevCount+1);
     }

     useEffect(() => {
        setCalculation(() => count * 2);
      }, [count]); // <- add the count variable here
    

  return (
    <div>
        <p>Count : {count}</p>
        <button type='button' onClick={counter}>ADD + </button>
        <p>Calculator: {calculation}</p>
      
    </div>
  )
}

export default Counter;