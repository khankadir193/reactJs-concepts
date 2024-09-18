import React from 'react';
import withCounter from './withCounter';

const HoverCounter = (props) => {
    const { count, incrementCount } = props;
    return (
        <div style={{textAlign:'center'}}>
            <h2>{count}</h2>
            <button onMouseOver={incrementCount}>HoverCount</button>
        </div>
    )
}

export default withCounter(HoverCounter); // withCounter is a higher order component that adds a counter to the component it wraps.