import React from 'react';
import { useApi } from './AppContext';

const FirstContext = () => {
    const { data, loading, lbData } = useApi();

    console.log('data...', data);

    return (
        <div>
            <h2>first context component...</h2>
            <pre>{JSON.stringify(lbData, null, 2)}</pre>
        </div>
    )
}

export default FirstContext;