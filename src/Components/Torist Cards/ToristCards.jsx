import React from 'react';
import { Link } from 'react-router-dom';

const ToristCards = ({users}) => {
    
    const {_id,toristSportName,countryName,average_cost,seasonality,travel_time,totaVisitorsPerYear,email,name,shortDescripion,imgURL}=users

    return (
        <div data-aos="flip-up" className="max-[350px] md:w-[350px] bg-slate-100/70 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md">
        {/* Card Image */}
            <img className="w-[350px] h-[190px] bg-gray-400 rounded-2xl" src={imgURL} alt="card navigate ui" />
            {/* Card Heading */}
            <div className="space-y-2">
            <h2 className="text-slate-800 font-medium ">Torist Country: <span className='text-orange-300 text-xl'>{countryName}</span></h2>
                <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg ">Sport Name : <span>{toristSportName}</span></h2>
                <h2 className="text-slate-800 ">Seasonality : <span>{seasonality}</span></h2>
                <p>Descripion :<span className=''>{shortDescripion}</span></p>
                {/* rating  */}
                <div className="flex gap-1">
                 
                </div>
            </div>
            {/* Price and action button */}
            <div className='flex justify-around'>
                <h2 className="md:text-xl text-gray-800">Travel Time : <span>{travel_time}</span></h2>
                <h2 className="md:text-xl text-gray-800">Average Cost : <span>{average_cost}</span><span>$$</span></h2>
                </div>
            <div className="mt-5 flex justify-between items-center font-medium">
                <div>
                <h2 className="md:text-xl text-gray-800">{}</h2>
                </div>
                <button className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900"><Link to={`/details/${_id}`}>view Details</Link></button>
            </div>
        </div>
    );
};
  
export default ToristCards;