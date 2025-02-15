import React from "react";
import themeContext from "../contexts/themeContext";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default function Content() {
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(counter, incrementCount) => (
                    <themeContext.Consumer>
                        {({ theme }) => (
                            <HoverCounter 
                                count={counter} 
                                incrementCount={incrementCount} 
                                theme={theme} 
                            />
                        )}
                    </themeContext.Consumer>
                )}
            </Counter>
        </div>
    );
}
