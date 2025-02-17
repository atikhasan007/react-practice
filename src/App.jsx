

import React from "react";
import MyComponentClass from "./componentsOne/MyComponentClass";


export default class App extends React.Component {
    render(){
        return (
            <div>
                <div>We shall learn useEffect() today </div>
                <MyComponentClass />
            </div>
        )
    }
}