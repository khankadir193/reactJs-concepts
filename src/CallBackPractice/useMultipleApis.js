import React, { useEffect, useState } from "react";


const useMultipleApis = (urls)=>{
    const [data,setData] = useState();
    const [loading,setLoading] = useState();
    const [error,setError] = useState();

    useEffect(()=>{
        const fetchMultipleApis = async()=>{
            try{
                const responses = await Promise.all(urls.map((url)=> fetch(url).then(res => res.json())));
                setData(responses);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }

        fetchMultipleApis();
    },[]);


    return { data, loading, error};
}

export default useMultipleApis;