import React from 'react';
import ToristCards from '../Torist Cards/ToristCards';
import { NavLink, useLoaderData } from 'react-router-dom';

const AverageData = () => {
    const loaderData=useLoaderData()
  
    const shortData=loaderData.sort((a,b)=>b.average_cost-a.average_cost)
    return (
        <div>
             <div className=' flex col justify-center'>
            <details className="dropdown ">
    <summary className="m-1 btn bg-green-400">Short BY</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <NavLink to='/average'><li><a>Averege Rate</a></li></NavLink>
    <NavLink to='/allsports'><li><a>All Sports</a></li></NavLink>
       <li><a>Ascending</a></li>
  </ul>
   </details>
            </div>
          <div className='grid grid-cols-3'>
            
                  {
                    shortData.map((data)=><ToristCards key={data._id} users={data}></ToristCards>)
                }
            
          </div>
        </div>
    );
};

export default AverageData;