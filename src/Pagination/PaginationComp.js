import React, { useState } from 'react'
const data = Array.from({length:100},(_,index) => `Item ${index+1}`);

const btnStyle = {
    border:'none',
    outline:'none',
    backgorund:'none'
}

const PaginationComp = () => {
    const [currentPage,setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    //current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    console.log('indexOfLastItem',indexOfLastItem)
    console.log('indexOfFIrstItem',indexOfFirstItem)
    const currentItems = data.slice(indexOfFirstItem,indexOfLastItem);

    console.log('currentItems...',currentItems);

    //total page
    const totalPages = Math.floor(data.length/itemsPerPage);

    console.log('totalPages....',totalPages);
  return (
    <div>
            <h2>Pagination example</h2>
            {/* rendering the items */}
            <ul style={{display:'grid',gridTemplateRows:'repeat(3,1fr)',gridTemplateColumns:'repeat(4,1fr)',listStyle:'none',gap:'1vw'}}>{
                currentItems.map((item,indx)=>{
                    return(
                        <li key={indx} style={{backgroundColor:'purple'}}>{item}</li>
                    )
                })
            }</ul>

            <div style={{display:'flex'}}>
                <button style={btnStyle}>prev</button>
                {
                    Array.from({length:totalPages},(_,index)=>{
                        return(
                        <button key={index+1}>{index+1}</button>)
                    })
                }
                <button style={btnStyle}>index</button>
            </div>
    </div>
  )
}

export default PaginationComp;