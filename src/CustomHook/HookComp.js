import React, { useEffect } from 'react'
import useCallingApi from './useCallingApi';

const HookComp = () => {
        const {data,error,loading} = useCallingApi('https://jsonplaceholder.typicode.com/posts');
       
        if(loading){
            return <h1>Loading...</h1>
        }

        if(error){
            return <h1>{error}</h1>;
        }

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default HookComp