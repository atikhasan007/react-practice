

import React, { useCallback, useState } from "react";
import Button from "./componentsOne/Button";
import ShowCount from "./componentsOne/ShowCount";
import Title from "./componentsOne/Title";


export default function App() {
const [count1 , setCount1] =useState(0);
const [count2, setCount2] = useState(0);

const incrementByOne = useCallback(()=>{
    setCount1((prevCount)=>prevCount+1) 
},[])


const incrementByFive =  useCallback(()=>{
    setCount2((prevCount)=>
        prevCount + 5

    )
},[]);




const isEvenOrOdd = () =>{
    return count1 % 2 === 0;
}

    return (
       <div className="app">
         <Title />
         <ShowCount count={count1} title='counter 1'/>
         <span>{isEvenOrOdd() ? 'Even' : 'odd'}</span>

         <Button handleClick={incrementByOne}>Increment by one</Button>
         <hr/>
         <ShowCount count = {count2} title="Counter 2"/>
         <Button handleClick={incrementByFive}>Increment by five</Button>
       </div>
    )

}
