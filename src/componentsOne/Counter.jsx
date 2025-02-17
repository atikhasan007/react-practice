import { useState } from "react";


function Counter(){
  const [count , setCount ] = useState(0);

  let i = 0;
  const addFive = () =>{
    while(i<5){
        setCount(count + 1);
        i=i+1;
    }
  }

    return (
        <div>
            {count }<p>
            <button type="button" onClick={()=>
                setCount((prevState)=>
                    prevState + 1
                    
                )
            }>Add 1</button>

            </p>


            <hr/>

            <p>
                <button type="button"  onClick={addFive}>add 5</button>
            </p>
           

        </div>
    )
}

export default Counter;