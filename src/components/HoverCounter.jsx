import React from "react";
import withCounter from "./HOC/withCounter";

const HoverCounter = (props) => {
    const { count, incrementCount } = props;
    return <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>;
};

export default withCounter(HoverCounter);
