import React from 'react';
import { Link } from 'react-router-dom';

const CounterCard = ({tourist}) => {
    
       
    return (
        <Link to={`/latestTourist/${tourist?.country_Name}`}>
        <div data-aos="flip-up" className="max-[350px] md:w-[350px] bg-slate-100/70 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md">
          
        <img className="w-[350px] h-[190px] bg-gray-400 rounded-2xl" src={tourist?.imgURL} alt="card navigate ui" />
     
        <div className="space-y-2">
        <h2 className="text-slate-800 font-medium "> Country Name : <span className='text-orange-300 text-xl'>{tourist?.country_Name}</span></h2>
            
            
            <p>Descripion :<span className=''>{tourist?.short_description}</span></p>
           
            <div className="flex gap-1">
             
            </div>
        </div>
      
     
        
    </div></Link>)

};
{/* <button className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900"><Link to={`/latestTourist/${country_Name}`}>view Details</Link></button> */}
export default CounterCard;