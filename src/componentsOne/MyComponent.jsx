
import React, { useEffect, useState } from 'react';



const  MyComponent = () => {

    const [count , setCount ] = useState(0);
    
    const [date, setDate] = useState(new Date());

const addClick = () =>{
    setCount((prevCount)=>prevCount+1);
}


const tick = () =>{
  console.log('tice function running ')
    setDate(new Date());
}
useEffect(()=>{
  console.log('starting timer')
   const interval = setInterval(tick, 1000);

   //do the cleanup - stop the timer 
   return ()=>{
    console.log('component unmounted');
    clearInterval(interval);
   }
},[])



useEffect(()=>{
  console.log('useEffect is render ');
    document.title = `Clicked ${count} times`;
}, [count]);//dependency array 




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