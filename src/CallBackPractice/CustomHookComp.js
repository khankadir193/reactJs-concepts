import React from "react";
import useFetch from "./useFetch";
import useMultipleApis from "./useMultipleApis";


const CustomHookComp = ()=> {
    // const {data , error , loading} = useFetch();
    const {loading,data,error} = useMultipleApis(['https://jsonplaceholder.typicode.com/todos/1','https://jsonplaceholder.typicode.com/todos/10']);
    if(loading)
        return <h1>loading......</h1>

    console.log('data..',data);
    
    return (
        <div>{JSON.stringify(data,null)}</div>
    );
};

export default CustomHookComp;