
import React, { useEffect, useState } from 'react';



const  MyComponent = () => {

    const [count , setCount ] = useState(0);
    const [date, setDate] = useState(new Date());

const addClick = () =>{
    setCount((prevCount)=>prevCount+1);
}


const tick = () =>{
    setDate(new Date());
}


useEffect(()=>{
    document.title = `Clicked ${count} times`;
})

  return (


    <div>
        <p>Time : {date.toLocaleTimeString()}</p>
        <p>
            <button type='button' onClick={addClick}>Click {count}</button>
        </p>

      
    </div>
  )
}

export default MyComponent;