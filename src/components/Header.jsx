

import React from "react";
export default class Header extends React.Component {

constructor (props){
    super(props);

    this.state = {
        favoritecolor : 'red'
    }
}


componentDidMount (){
    setTimeout(()=>{
        this.setState({
            favoritecolor : 'yellow'
        })
    }, 1000)
}


 getSnapshotBeforeUpdate(prevProps, prevState){
    document.getElementById("div1").innerHTML = "Before the update , the favorite was " + prevState.favoritecolor;
 }


 componentDidUpdate(){
    document.getElementById("div2").innerHTML  = "the update favorite is "+ this.state.favoritecolor;
 }



    render(){
        const {favoritecolor} = this.state;
        return (
            <div>
                <h1>My Favorite Color is {favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>CangeColor</button>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        )
    }
}