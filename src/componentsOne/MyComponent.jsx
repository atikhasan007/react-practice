
import React, { useEffect, useState } from 'react';



const  MyComponent = () => {

    const [count , setCount ] = useState(0);
    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date());

const addClick = () =>{
    setCount((prevCount)=>prevCount+1);
}


const tick = () =>{
    setDate(new Date());
}


useEffect(()=>{
  console.log('useEffect is render ');
    document.title = `Clicked ${count} times`;
}, [count]);

  return (


    <div>
        <p>Time : {date.toLocaleTimeString()}</p>
        <p>
            <button type='button' onClick={addClick}>Click {count}</button>
        </p>
      
      <p>
         <input type='text' value={text} onChange={(e)=>
            setText(e.target.value)
         }/>
      </p>
      
    </div>
  )
}

export default MyComponent;