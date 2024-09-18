import React, { useEffect, useState } from 'react'

const useCallingApi = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async (url) => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('faile to fetch the data.!');
                }
                const result = await response.json();
                console.log('response...??', result);
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }

        };

        fetchData(url);
    }, [url]);



    return { data, loading, error };
}

export default useCallingApi;