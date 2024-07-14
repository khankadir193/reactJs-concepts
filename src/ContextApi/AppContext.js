import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ApiContext = createContext();
const baseUrl = "http://test.streamkar.tv";

// Custom hook to use the context
export const useApi = () => useContext(ApiContext);

// AppContext component
const AppContext = ({ children }) => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lbData, setLbData] = useState();
  

  // Function to fetch data from API
  const fetchData = async () => {
    setLoading(true); // Set loading to true when starting the fetch operation
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const result = await response.json(); // Await the JSON parsing
      console.log('response:', result);
      setApiData(result);
    } catch (err) {
      console.log('getting error:', err);
    } finally {
      setLoading(false); // Set loading to false once the fetch operation is complete
    }
  };

  async function getTalentWeeklyPrev(weekIndex) {
    await fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${
        weekIndex - 1
      }&eventDesc=20240726_court&rankIndex=12&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setLbData((prevState) => ({
          ...prevState,
          talenWeeklyPrev: res?.data?.list,
        }));
      });
  }

  // Value to be passed to provider
  const value = {
    apiData,
    loading,
    fetchData,
    getTalentWeeklyPrev,
    lbData
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export default AppContext;
