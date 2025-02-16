import React from "react";
import MouseWithCat from "./MouseWithCat";
export default class MouseTracker extends React.Component{
 


    render() {
      return (
        <div>
            <h1>Move the mouse around!</h1>
            <MouseWithCat />
          
        </div>
      )
    }
}