class Context {
    constructor(value ){
        this.value = value;

    }

    //provider component
    Provider = ({children, value}) =>{
        this.value = value;
        return children;

    }


    //consumer
    Consumer = ({children }) => children(this.value);
     
}


console.log(typeof(Consumer));

function createContext (value = null){

    const context = new Context(value);
    return {
        Provider : context.Provider,
        Consumer : context.Consumer,
    }

}

export default createContext;