import React from "react";

export default class Child extends React.Component{

    componentWillUnmount(){
        alert("this componet named Header is about to be unmonted")
    }
    render() {
      return (
        <div>
          <h1>Hello world</h1>
        </div>
      )
    }
}