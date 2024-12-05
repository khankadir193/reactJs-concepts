import React, { useEffect, useState } from "react"

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const oldApiCall = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                if (!oldApiCall.ok) throw new Error('Failed to fetch data.');
                const result = await oldApiCall.json();
                console.log('oldApiCall....', result);
                setData(result);
            } catch (err) {
                setError(err.message);
                console.log('Api getting error:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);



    return { data, loading, error };


};

export default useFetch;

