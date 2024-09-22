import React from 'react';

const ButtonCount = ({increment}) => {
    console.log('insideComponent');
    
  return (
    <div>
        <button onClick={increment}>click counter</button>
    </div>
  )
}

export default ButtonCount;// this is a functional component