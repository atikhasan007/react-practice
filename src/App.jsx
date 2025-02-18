

import React, { useState } from "react";
import MyComponent from "./componentsOne/MyComponent";


export default function App() {
      const [show, setShow] = useState(true);

        return (
            <div className="app">
                <div>{show && <MyComponent/>}</div>
                <p>
                    <button type="button" onClick={()=>{
                        setShow((prevShow)=>!prevShow)
                    }}>{show? 'Hide post' : 'show post'}</button>
                </p>
                
             

            </div>
        )
    }
