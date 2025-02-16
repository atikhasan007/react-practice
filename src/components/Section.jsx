import React from "react";
import Content from "./Content";


export default  class  Section extends React.Component {

    shouldComponentUpdate(nextProps, nextState){

        return false;

    }
render(){
    return (
        <div>
            <h1>This is a section</h1>
            <Content  theme/>
        </div>
    )
}
}