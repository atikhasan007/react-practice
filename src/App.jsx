import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";

function App() {
    return ( 
        <div className="app">
            <Counter>
            {(counter, incrementCount) => (
                    <ClickCounter counter={counter} incrementCount={incrementCount} />
                )}
          

            </Counter>
              


            <Counter>
            {(counter, incrementCount) => (
                    <HoverCounter counter={counter} incrementCount={incrementCount} />
                )}
            </Counter>
              


        </div>
    );
}

export default App;
