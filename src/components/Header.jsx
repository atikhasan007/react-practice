//getDerivedStateFromProps

import React from "react";
export default class Header extends React.Component {

constructor (props){
    super(props);

    this.state = {
        favoritecolor : 'red'
    }
}


static getDerivedStateFromProps(props, state){
    return {favoritecolor: props.favcol}
}





    render(){
        const {favoritecolor} = this.state;
        return (
            <div>
                <h1>My Favorite Color is {favoritecolor}</h1>
            </div>
        )
    }
}