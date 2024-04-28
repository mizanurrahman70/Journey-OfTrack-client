import React from 'react';
import { Link } from 'react-router-dom';

const LatestSingle = ({tourist}) => {
   

 const {tourists_spot_name,
    country_Name,
    location,
    short_description,
    average_cost,
    seasonality,
    imgURL}=tourist
    return (
        <div data-aos="flip-up" className="max-[350px] md:w-[350px] bg-slate-100/70 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md">
          
        <img className="w-[350px] h-[190px] bg-gray-400 rounded-2xl" src={imgURL} alt="card navigate ui" />
     
        <div className="space-y-2">
        <h2 className="text-slate-800 font-medium ">Torist Country: <span className='text-orange-300 text-xl'>{country_Name}</span></h2>
            <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg ">Sport Name : <span>{tourists_spot_name}</span></h2>
            <h2 className="text-slate-800 ">Seasonality : <span>{seasonality}</span></h2>
            <p>Descripion :<span className=''>{short_description}</span></p>
           
            <div className="flex gap-1">
             
            </div>
        </div>
      
        <div className='flex justify-around'>
            <h2 className="md:text-xl text-gray-800">Location : <span>{location}</span></h2>
            <h2 className="md:text-xl text-gray-800">Average Cost : <span>{average_cost}</span></h2>
            </div>
        <div className="mt-5 flex justify-between items-center font-medium">
            <div>
            <h2 className="md:text-xl text-gray-800">{''}</h2>
            </div>
            <button className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900"><Link to={`/latestTourist/${country_Name}`}>view Details</Link></button>
        </div>
    </div>
    );
};

export default LatestSingle;