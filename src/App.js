import React, { useEffect } from 'react';
import AppContext, { useApi } from './ContextApi/AppContext';

const App = () => {
  const { apiData, loading, fetchData } = useApi();

  useEffect(() => {
    fetchData();
  }, [0]);

  if (loading) return <div>Loading...</div>;
  if (!apiData) return <div>No data available</div>;

  return (
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(apiData, null, 2)}</pre>
    </div>
  );
};

export default () => (
  <AppContext>
    <App />
  </AppContext>
);
