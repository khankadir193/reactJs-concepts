import React, { useEffect, useState } from "react";
import "./autoComplete.css";

const AutoComplete = () => {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://dummyjson.com/recipes/search?q=Margherita"
      );
      const res = await result.json();
      setData(res.recipes || []);
      console.log("response...", res);
    };

    fetchData();

    return () => {
      console.log("cleanup function");
    };
  }, [0]);

  // Filter data based on search term
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="auto-complete-container">
      {/* <h2>{JSON.stringify(data)}</h2> */}
      <input
        type="search"
        placeholder="search for item"
        onChange={(e) => setSearchItem(e.target.value)}
      />

      {
        filteredData.length > 0 ? (
            filteredData.map((item)=> <span>{item.name}</span>)
        ) : (
            <span>Search Not Found</span>
        )
      }
    </div>
  );
};

export default AutoComplete;
