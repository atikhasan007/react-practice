

import React from "react";
export default class Header extends React.Component {

constructor (props){
    super(props);

    this.state = {
        favoritecolor : 'red'
    }
}


shouldComponentUpdate (){
    return true;// true or false ;;true means state is change and false means state is not change 
}

changeColor = () =>{
    this.setState({
        favoritecolor : "blue",
    })
}



    render(){
        const {favoritecolor} = this.state;
        return (
            <div>
                <h1>My Favorite Color is {favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>CangeColor</button>
            </div>
        )
    }
}