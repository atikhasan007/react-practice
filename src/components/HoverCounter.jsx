import React from "react";

export default function ClickCounter ({count, incrementCount, theme}){
  
     const style = theme === 'dark' ?  {backgroundColor: '#000000' , color:' #ffffff'}:
     {backgroundColor: 'red', color:"yellow"};
  console.log(typeof(theme) )
     
        return (
            <div>
                <h1 onMouseOver={incrementCount} 
                style={style}
                >
                    Hover  {count} times
                </h1>
            </div>
        );
    
}
