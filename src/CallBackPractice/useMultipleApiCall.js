import React, { useEffect } from "react"
const useMultipleCallBack = ()=>{
    useEffect(()=>{
        const oldApiCall = fetch('https://jsonplaceholder.typicode.com/todos/1');
        console.log('oldApiCall....',oldApiCall);
    })
};