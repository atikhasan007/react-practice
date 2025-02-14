import React from "react";

const withCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {
        state = {
            count: 0,
        };

        incrementCount = () => {
            this.setState((prevState) => ({
                count: prevState.count + 1,
            }));
        };

        render() {
            return (
                <OriginalComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    {...this.props} // ✅ Pass down additional props
                />
            );
        }
    }

    return NewComponent;
};

export default withCounter;
