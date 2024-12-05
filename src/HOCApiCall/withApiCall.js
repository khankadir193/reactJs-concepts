import React,{ useEffect, useState } from "react"

const withApiCall = (WrappedComponent,apiEndPoint)=>{
    return function NewComponent(props){
        const [data,setData] = useState();
        const [loading,setLoading] = useState();
        const [error,setError] = useState();

        useEffect(()=>{
            const fetchData = async()=>{
                try{
                    const response = await fetch(apiEndPoint);
                    if(!response.ok) throw new Error(`Error:${response.statusText}`);

                    const result = await response.json();
                    setData(result);
                }catch(error){
                    setError(error.message);
                }finally{
                    setLoading(false);
                }
            }

            fetchData();
        },[apiEndPoint])

        return (
            <div>
                {loading && <h2>loading....</h2>}
                {error && <h2>Error:{error}</h2>}
                {!loading && !error && <WrappedComponent data={data} {...props} />}
            </div>
        )

    }
};


export default withApiCall;