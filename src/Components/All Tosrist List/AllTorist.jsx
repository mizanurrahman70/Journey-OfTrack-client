import React from 'react';
import ToristCard from '../Torist Card/ToristCard';
import { NavLink, useLoaderData } from 'react-router-dom';
import ToristCards from '../Torist Cards/ToristCards';

const AllTorist = () => {
    const loaderData=useLoaderData()
    // const shortHandle=()={

    // }
    return (
        <div>
            <div className=' flex col justify-center'>
            <details className="dropdown ">
    <summary className="m-1 btn bg-green-400">Sort BY</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <NavLink to='/average'><li><a>Averege Rate</a></li></NavLink>
    
  </ul>
   </details>
            </div>
           <div className='grid lg:grid-cols-3'>
            {
                loaderData.map((data)=><ToristCards key={data._id} users={data}></ToristCards>)
            }
           </div>
        </div>
    );
};

export default AllTorist;