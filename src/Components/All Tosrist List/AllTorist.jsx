import React, { useState } from 'react';
import ToristCard from '../Torist Card/ToristCard';
import { NavLink, useLoaderData } from 'react-router-dom';
import ToristCards from '../Torist Cards/ToristCards';

const AllTorist = () => {
    const loaderData=useLoaderData()
    const [sports,setSports]=useState([...loaderData])
    const [activId,setActiveId]=useState(0)
    
    const assendingHandle=(id)=>{
        const shortData=[...loaderData].sort((a,b)=>b.average_cost-a.average_cost)
        setSports(shortData)
        setActiveId(id)
    }
    const dssendingHandle=(id)=>{
        const shortData=[...loaderData].sort((a,b)=>a.average_cost-b.average_cost)
        setSports(shortData)
     setActiveId(id)
    }
    const allHandle=(id)=>{
        
        setSports(loaderData)
        setActiveId(id)
    }
    if(!loaderData){
        return <span className="loading loading-bars loading-lg mt-20 mb-5 lg:ml-[700px]"></span>
    }
    // const shortHandle=()={

    // }
   
    return (
        <div>
            <div className=' flex col justify-center'>
            <details className="dropdown ">
    <summary className="m-1 btn bg-green-400">Sort BY</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 -ml-16">
    {/* <NavLink to='/average'><li><a>Dscending</a></li></NavLink> */}
    <li className={`${activId==1?'bg-green-500 rounded-2xl font-semibold':'font-medium'}`}  onClick={()=>allHandle(1)}><a>All Sports</a></li>
    <li className={`${activId==2?'bg-green-500 rounded-2xl font-semibold':'font-medium'}`} onClick={()=>dssendingHandle(2)}><a>Ascending</a></li>
    <li className={`${activId==3?'bg-green-500 rounded-2xl font-semibold':'font-medium'}`} onClick={()=>assendingHandle(3)}><a>Dscending</a></li>
    
  </ul>
   </details>
            </div>
           <div className='grid lg:grid-cols-3'>
            {
                sports.map((data)=><ToristCards key={data._id} users={data}></ToristCards>)
            }
           </div>
        </div>
    );
};

export default AllTorist;