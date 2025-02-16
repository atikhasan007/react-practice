import React from "react";

export default function ClickCounter ({count, incrementCount, theme, switchTheme}){
  
     const style = theme === 'dark' ?  {backgroundColor: '#000000' , color:' #ffffff'}:
     {backgroundColor: 'red', color:"yellow"};
  
     
        return (
            <div>
                <h1 onMouseOver={incrementCount} 
                style={style}
                >
                    Hover  {count} times
                </h1>

                <button type="button" onClick={switchTheme}>
                    Change Theme
                </button>

            </div>
        );
    
}
