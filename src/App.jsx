

import React, { useState } from "react";
import MyComponentClass from "./componentsOne/MyComponentClass";


export default function App() {
      const [show, setShow] = useState(true);

        return (
            <div className="app">
                <div>{show && <MyComponentClass/>}</div>
                <p>
                    <button type="button" onClick={()=>{
                        setShow((prevShow)=>!prevShow)
                    }}>{show? 'Hide post' : 'show post'}</button>
                </p>
                
             

            </div>
        )
    }
