import { useState } from "react";

function Todo(){
   
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');


   const handleInput = (e) =>{
        const inputValue = e.target.value;
        const updateWarning = inputValue.includes('.js')
        ? 'You need javaScript skill to complete the task. Do you have it?'
        : null;
      

        setTodo(inputValue);
        setWarning(updateWarning);

       
    }

    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea name = 'todo'  value={todo} onChange={handleInput}/>
            </p>

            <hr/>
            <h2>{warning || 'Good choice'}</h2>
          
        </div>
      )

}

export default Todo;