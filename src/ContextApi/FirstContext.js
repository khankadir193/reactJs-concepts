import React from 'react';
import { useApi } from './AppContext';

const FirstContext = () => {
    const { data, loading } = useApi();

    console.log('data...',data);

    return (
        <div>
            {{data}}
        </div>
    )
}

export default FirstContext