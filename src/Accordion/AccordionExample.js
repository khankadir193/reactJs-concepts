import React, { useState } from 'react';
import './accordion.css'

const AccordionExample = ({ data }) => {
    // const [isExpand,setIsExpand] = useState(false);
    // const [isContent,setIsContent] = useState([]);
    const [openItem,setOpenItem] = useState(null);

    const handleClick = (event)=>{
        console.log('event.',event);
        // setIsExpand(!isExpand);
        // setIsContent((prev)=>[
        //     ...prev,
        //     {
        //         title:event.title,
        //         isFlag:!isExpand
        //     }
        // ])
        setOpenItem((prev)=> prev === event.title ? null : event.title);
    };

    return (
        <div>
            <h1>Accordion</h1>

            {data?.map((item) => {
                return <div className='acc-container'>
                    <p onClick={()=>handleClick(item)}>{item.title}</p>
                    {openItem === item.title && <p>{item.content}</p>} 
                </div>
            })}
        </div>

    );
}

export default AccordionExample;