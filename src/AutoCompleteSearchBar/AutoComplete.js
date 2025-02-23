import React, { useEffect, useState } from "react";
import './autoComplete.css';

const AutoComplete = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://dummyjson.com/recipes/search?q=Margherita");
      const res = await result.json();
      setData(res);
      console.log("response...", res);
    };

    fetchData();

    return () => {
      console.log("cleanup function");
    };
  }, [0]);

  return (
    <div className="auto-complete-container">
      {/* <h2>{JSON.stringify(data)}</h2> */}
      <input type="search" placeholder="search for item" />
    </div>
  );
};

export default AutoComplete;
