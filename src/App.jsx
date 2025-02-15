import React from "react";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Section from './components/Section';
import themeContext from "./contexts/themeContext";

export default class App extends React.Component {

    state = {
        theme : 'dark'
    }
   
 render(){
  const {theme} = this.state;

    return ( 


        
        <div className="app">
            <Counter>
            {(counter, incrementCount) => (
                    <ClickCounter counter={counter} incrementCount={incrementCount} />
                )}
            </Counter>

            <themeContext.Provider value ={{theme:theme}}><Section/></themeContext.Provider>
            
        </div>
    );
   }
 }