

import React from "react";
import MyComponent from "./componentsOne/MyComponent";


export default class App extends React.Component {
    render(){
        return (
            <div>
                <div>We shall learn useEffect() today </div>
             <MyComponent/>
            </div>
        )
    }
}