import React from 'react';

const ReactMemoChild = ({name}) => {
    console.log('name....',name);
  return (
    <div>
        {name}
    </div>
  )
}
// export default ReactMemoChild;
export default React.memo(ReactMemoChild);