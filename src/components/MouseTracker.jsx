import React from "react";
import Mouse from "./Mouse";
export default class MouseTracker extends React.Component{
 


    render() {
      return (
        <div>
            <h1>Move the mouse around!</h1>
            <Mouse />

          
          
        </div>
      )
    }
}