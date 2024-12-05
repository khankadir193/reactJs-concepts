import React from "react";
import useFetch from "./useFetch";


const CustomHookComp = ()=> {
    const {data , error , loading} = useFetch();
    if(loading)
        return <h1>loading......</h1>

    console.log('data..',data);
    
    return (
        <div>{JSON.stringify(data,null)}</div>
    );
};

export default CustomHookComp;