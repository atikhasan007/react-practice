import React from "react";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Section from "./components/Section";
import StatePractice from "./components/StatePractice";
import themeContext from "./contexts/themeContext";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "light",
        };
    }

    switchTheme = () => {
        this.setState((prevState) => ({
            theme: prevState.theme === "dark" ? "light" : "dark",
        }));
    };

    render() {
        return (
            <>
            
            <themeContext.Provider value={{ ...this.state, switchTheme: this.switchTheme }}>
                <div className="app">
                    <Counter>
                        {(counter, incrementCount) => (
                            <ClickCounter counter={counter} incrementCount={incrementCount} />
                        )}
                    </Counter>
                    <Section />
                </div>
            </themeContext.Provider>
            <StatePractice />
            <Header />



            
            </>
        );
    }
}
