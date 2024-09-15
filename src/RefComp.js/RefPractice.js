import React, { createRef, useRef } from 'react';

const RefPractice = () => {
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type='text' />
            <button onClick={focusInput}>Focus</button>
        </div>
    )
}

export default RefPractice;