import React from "react";

export default function ClickCounter ({counter, incrementCount}){
  

        return (
            <div>
                <h1 onMouseOver={incrementCount}>
                    Hover  {counter} times
                </h1>
            </div>
        );
    
}
