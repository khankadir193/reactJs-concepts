import React, { useEffect, useState } from 'react';

const PaginationComponent = () => {
  const [data, setData] = useState([]);
  const [pageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // const [page, setPage] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
      const result = await res.json();
      console.log('---------', result);
      setData([...result]);
    };

    fetchData();
  }, []);

  const totalPage = Math.ceil(data.length / pageSize);

  function getItemsData() {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    // const startIndex = data?.slice(0, pageSize);
    // const lastIndex = data?.slice(startIndex, pageSize);
    return data?.slice(startIndex, endIndex);
  };

  return (
    <div>
      {
        getItemsData()?.map((item) => {
          return <p key={item.userId}>{item?.title}</p>
        })
      }
      <button onClick={() => setCurrentPage((prev) => prev - 1)}>Prev</button>
      {
        [...Array(totalPage)].map((_,index)=>{
          return <button key={index + 1}>{index + 1}</button>
        })
      }
      <button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default PaginationComponent;