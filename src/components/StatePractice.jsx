import React from "react";
export default class StatePractice extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            brand : "Ford",
            model : "Mustang",
            color : "red",
            year : 1964
        }
    }


      changeColor  = () =>{
        this.setState({color: 'blue'});
      }

    render(){

const {brand, model , color, year} = this.state;
        return (
    
            <div>
                <h1>My {brand}</h1>
                <p>it is a {color} from {year} by {model}</p>
                <button type="button" onClick={this.changeColor}>change color</button>
            </div>
        )
    }

}