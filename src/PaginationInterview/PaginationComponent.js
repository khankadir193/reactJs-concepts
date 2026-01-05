import React, { useEffect, useState } from 'react';

const PaginationComponent = () => {
  const [data, setData] = useState([]);
  const [pageSize,setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // const [page, setPage] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
      const result = await res.json();
      console.log('---------', result);
      setData(result);
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
          return <p key={item.id}>{item?.title}</p>
        })
      }
      <div>
        <button onClick={() => setCurrentPage((prev) => prev - 1)} disabled={currentPage === 1}>Prev</button>
        {
          [...new Array(totalPage)].map((_, index) => {
            const pageNumber = index + 1;
            return <button key={index + 1} onClick={() => setCurrentPage(pageNumber)}>{index + 1}</button>
          })
        }
        <button onClick={() => setCurrentPage((prev) => prev + 1)} disabled={currentPage === totalPage}>Next</button>
      </div>
      <select value={pageSize} onChange={(e)=>setPageSize(e.target.value)}>
        <option value=''>Select</option>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='30'>30</option>
      </select>

    </div>
  );
};

export default PaginationComponent;