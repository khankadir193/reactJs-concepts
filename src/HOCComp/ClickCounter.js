import React from 'react';
import withCounter from './withCounter';

const ClickCounter = (props) => {
    const {count, incrementCount} = props;
  return (
    <div style={{textAlign:'center'}}>
        <h2>{count}</h2>
        <button onClick={incrementCount}>ClickCount</button>
    </div>
  )
}

export default withCounter(ClickCounter); // Wrapping the ClickCounter component with withCounter HOC to get the count state and increment function as props.