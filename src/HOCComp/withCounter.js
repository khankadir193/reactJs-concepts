import React, { useState } from 'react'

const withCounter = (WrappedComponent) => {
    return function NewComponent(props) {
        const [count,setCout] = useState(0);
        return (
            <WrappedComponent props={props} count={count} incrementCount={()=>setCout(count+1)} />
        )
    }
}


// const newComp = withCounter(oldComponent);

export default withCounter;