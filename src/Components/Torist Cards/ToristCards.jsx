import React from 'react';

const ToristCards = () => {
    return (
        <div data-aos="flip-up" className="max-[350px] md:w-[350px] bg-slate-100/70 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md">
        {/* Card Image */}
            <img className="w-[350px] h-[190px] bg-gray-400 rounded-2xl" src={image} alt="card navigate ui" />
            {/* Card Heading */}
            <div className="space-y-2">
            <h2 className="text-slate-800 font-medium ">Chatagory : <span className='text-orange-300'>{type}</span></h2>
                <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg ">{name}</h2>
                <h2 className="text-slate-800 ">{description}</h2>
                <p>Location :<span className='bg-green-300 p-1 rounded-3xl ml-2'>{location}</span></p>
                {/* rating  */}
                <div className="flex gap-1">
                 
                </div>
            </div>
            {/* Price and action button */}
            <div className="mt-5 flex justify-between items-center font-medium">
                <h2 className="md:text-xl text-gray-800">{price}</h2>
                <button className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900"><Link to={`/${id}`}>view Details</Link></button>
            </div>
        </div>
    );
};
  
export default ToristCards;