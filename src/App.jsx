

import React, { useCallback, useState } from "react";
import Todos from "./MyPractice/UseCallbackAndUseMemo/Todos";
export default function App() {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

  const increment = () =>{
    setCount((c)=>c+1);
  }
     
    const addTodo = useCallback(() =>{
        setTodos((t)=> [...t, "New Todo"]);
    },[todos])

    return (
        <div> 
     <Todos  todos={todos} addTodo={addTodo}/>

     <hr/>

        <div>
            Count : {count}
            <br/>
            <button onClick={increment}>+</button>
        </div>
     
     </div>
    )

}
