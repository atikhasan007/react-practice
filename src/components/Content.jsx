import React from "react";
import themeContext from "../contexts/themeContext";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default class Content extends React.Component {

    componentDidMount(){
    
        console.log(this.context);

    }


    static contextType = themeContext;

 render(){

    const {theme, switchTheme} = this.context;
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(counter, incrementCount) => (
                
                    
                            <HoverCounter 
                                count={counter} 
                                incrementCount={incrementCount} 
                                theme={theme} 
                                switchTheme = {switchTheme}
                            />
                        
                    
                )}
            </Counter>
        </div>
    );
 }
}


Content.contextType = themeContext;