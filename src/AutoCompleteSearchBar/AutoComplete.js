import React, { useEffect, useState, useCallback } from "react";
import "./autoComplete.css";

const AutoComplete = () => {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchItem) {
      setData([]); // Clear data when search term is empty
      return;
    }

    const controller = new AbortController(); // For canceling previous API requests
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://dummyjson.com/recipes/search?q=${searchItem}`, {
          signal: controller.signal, // Attach signal to abort previous requests
        });

        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        setData(result.recipes || []);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort(); // Cleanup previous requests
  }, [searchItem]);

  // Debounce function with proper closure handling
  const debounceFunction = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const searchQuery = useCallback(() => {
    console.log("Searched the query");
  }, []);

  const debounceHandle = useCallback(debounceFunction(searchQuery, 1000), [searchQuery]);

  return (
    <div className="auto-complete-container">
      <input
        type="search"
        placeholder="Search for an item"
        onChange={(e) => {
          setSearchItem(e.target.value);
          debounceHandle(); // Call debounced function
        }}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <ul>
        {data.length > 0 && searchItem.length > 0 ? (
          data.map((item, index) => <li key={index}>{item.name}</li>)
        ) : (
          <li>Search Not Found</li>
        )}
      </ul>
    </div>
  );
};

export default AutoComplete;
