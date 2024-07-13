import React,{createContext, useContext, useState} from 'react'
const ApiContext = createContext();

export const useApi = ()=> useContext(ApiContext);

const AppContext = ({children}) => {
    const [apiData,setApiData] = useState();
    const [loading,setLoading] = useState();


    const fetchData = async()=>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const result = response.json();
            console.log('response..???',result);
            setApiData(result);
        }catch(err){
            console.log('getting error..',err);
        }finally{
            setLoading(false);
        }
    }

    //data to pass provider
    const value = {
        apiData,
        loading,
        fetchData
    }
    

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider> 
}

export default AppContext;