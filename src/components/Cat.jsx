
import React from "react";




 export default class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse || {x : 0, y: 0}
      return (
        <img src="/https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/A-Cat.jpg/2560px-A-Cat.jpg.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
    }
  }


 