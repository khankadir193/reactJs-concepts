import React, { useEffect } from 'react';
import AppContext, { useApi } from './ContextApi/AppContext';
import FirstContext from './ContextApi/FirstContext';
import RefPractice from './RefComp.js/RefPractice';
import ClickCounter from './HOCComp/ClickCounter';

const App = () => {
  const { apiData, loading, fetchData,getTalentWeeklyPrev,lbData} = useApi();

  useEffect(() => {
    fetchData();
    getTalentWeeklyPrev(2);
  }, [0]);

  if (loading) return <div>Loading...</div>;
  if (!apiData) return <div>No data available</div>;

  return (
    <div>
      {/* <h1>Data from API</h1> */}
      {/* <pre>{JSON.stringify(apiData, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(lbData, null, 2)}</pre> */}
      {/* <FirstContext /> */}
      {/* <RefPractice /> */}
      <ClickCounter />
    </div>
  );
};

export default () => (
  <AppContext>
    <App />
  </AppContext>
);
