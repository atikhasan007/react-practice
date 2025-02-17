
import React from "react";

export default class MyComponentClass extends React.Component{
    state = {
        count : 0, // initialize 0
        date : new Date(), //initialize current date 
    }


//first time load when component is load first time 
//componentDidMount 1 bar call hoy 
//set kore dibe title ke 
    componentDidMount(){
        const {count} = this.state;
        document.title  = `Clicked ${count} times`

    }

    //document title update 
    componentDidUpdate(){
        const {count } = this.state;
        document.title = `Clicked ${count} times`

    }



   addClick = () =>{
    this.setState(({count}) =>({
        count : count + 1
    }))
   }

    render() {
        const {date,count} = this.state;
      return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button"
                 onClick={this.addClick}>Click {count}</button>
            </p>
          
        </div>
      )
    }
}