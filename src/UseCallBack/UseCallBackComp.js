import React, { useCallback, useState } from 'react'

const UseCallBackComp = () => {
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState('');

    const increment = useCallback(() => {
        console.log("Incremented");
        setCounter(c => c + 1);
    }, [text]);
    
    return (
        <div style={{ textAlign: 'center' }}>
            <h3>{counter}</h3>
            <button onClick={increment}>Increment</button>
            <input
                type='text'
                onChange={(e) => { setText(e.target.value) }}
                placeholder='enter the text'
            />
        </div>
    )
}

export default UseCallBackComp;