import React, { useCallback,useState } from "react";


const CounterComp = ()=>{
    const [counter,setCounter] = useState(0);

    const increment = useCallback(()=>{
        setCounter((prev)=> prev+1);
    },[]);


    const decrement = useCallback(()=>{
        setCounter((prev)=> prev-1)
    },[]);

    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>increment</button>
        </div>
    )
};

export default CounterComp;