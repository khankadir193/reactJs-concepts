import React, { useState, useEffect } from "react";
import axios from "axios";
// import npData from '../../public/npdata.json';

const JsonReader = () => {
  const [data, setData] = useState(null); // To store fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the JSON data using axios
        const response = await axios.get('http://localhost:3000/npData.json'); // Assuming file is in public folder
        setData(response.data); // Update state with JSON data
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Update loading state
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array ensures this runs only once

  // Render based on states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Fetched Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default JsonReader;

//this is the url getting locally data from the url
// http://localhost:3000/npData.json
