import React from 'react';
import Banner from '../Banner/Banner';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const CardDtls = () => {
    const loaderData=useLoaderData()
    const {_id,toristSportName,countryName,average_cost,seasonality,travel_time,totaVisitorsPerYear,email,name,shortDescripion,imgURL}=loaderData
    // const id =useParams()
    // const data =loaderData.find((fn)=>fn_id==id)
    console.log(loaderData)
    return (
        <>
        <div>
        <div>
       <Banner></Banner>
        </div>
        
         {/* Card Image */}
         
           <div>
           <img className="w-[350px] h-[190px] bg-gray-400 rounded-2xl" src={imgURL} alt="card navigate ui" />
           </div>
             {/* Card Heading */}
             <div>
             <div className="space-y-2">
             <h2 className="text-slate-800 font-medium ">Country Name : <span className='text-orange-300'>{countryName} </span></h2>
                 <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg ">Torist Sport Name : <span>{toristSportName}</span></h2>
                 <h2 className="text-slate-800 ">Description : <span>{shortDescripion}</span></h2>
                 <p className='text-neutral-400  font-medium'>Seasonality :<span className='bg-green-300 p-1 rounded-3xl ml-2 text-slate-700'>{seasonality}</span></p>
                 {/* rating  */}
                 <p className='text-neutral-400  font-medium'>Travel Time : <span className='text-slate-700'>{travel_time}</span><span>Day</span></p>
                 <p className='text-neutral-400  font-medium'>Total Visitor : <span className='text-slate-700'>{totaVisitorsPerYear}</span></p>
                 
                
                 <div className="flex gap-1">
                 <h2 className="md:text-xl text-gray-800">Average Cost : <span>{average_cost}</span></h2>
               
                  
                 </div>
                 <h2 className="md:text-xl text-gray-800">Name : <span>{name}</span></h2>
                 <h2 className="md:text-xl text-gray-800">Email: <span>{email}</span></h2>
                 
                 
             </div>
             {/* Price and action button */}
             <div className=" font-medium">
                
                <Link to='/'> <button className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">Back</button></Link>
                 <button className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">Buy Now</button>
             </div>
             </div>
         
         </div></>
    );
};

export default CardDtls;