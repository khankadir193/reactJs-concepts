import React, { useEffect, useState } from "react";
import "./autoComplete.css";

const AutoComplete = () => {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://dummyjson.com/recipes/search?q=${searchItem}`);
      const res = await result.json();
      setData(res.recipes || []);
      console.log("response...", res);
    };

    fetchData();

    return () => {
      console.log("cleanup function");
    };
  }, [0,searchItem]);

  // Filter data based on search term
  // const filteredData = data.filter((item) =>item.name.toLowerCase().includes(searchItem.toLowerCase()));
  console.log('datea...',data);
  console.log('searchItem...',searchItem)

  return (
    <div className="auto-complete-container">
      {/* <h2>{JSON.stringify(data)}</h2> */}
      <input
        type="search"
        placeholder="search for item"
        onChange={(e) => setSearchItem(e.target.value)}
      />
      {/* displaying data  */}
      <ul>
        {data.length > 0 && searchItem.length > 0 ? (
          data.map((item) => <li>{item.name}</li>)
        ) : (
          <li>Search Not Found</li>
        )}
      </ul>
    </div>
  );
};

export default AutoComplete;
