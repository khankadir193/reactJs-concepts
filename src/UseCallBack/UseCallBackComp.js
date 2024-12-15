import React, { useCallback, useState } from 'react'
import ButtonCount from './ButtonCount';

const UseCallBackComp = () => {
    const [counter, setCounter] = useState(0);

    const increment = useCallback(() => {
        console.log("Incremented");
        setCounter(prevCount => prevCount+1);
    },[]);
    
    return (
        <div style={{ textAlign: 'center' }}>
            <h3>{counter}</h3>
            <ButtonCount increment={increment}/> 
        </div>
    );
};

export default UseCallBackComp;