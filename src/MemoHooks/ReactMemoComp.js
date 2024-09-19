import React, { useState } from 'react';
import ReactMemoChild from './ReactMemoChild';

const ReactMemoComp = ({ name }) => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("Abdul Kadir Khan");

    return (
        <>
            <h2>{count}</h2>
            <button onClick={() => { setCount(count + 1) }}>counter</button>
            <ReactMemoChild name={value}/>
        </>
    )
}

export default ReactMemoComp;