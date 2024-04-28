import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToristCards from '../Torist Cards/ToristCards';

const LatestTourist = () => {
    const Data=useLoaderData()
    console.log(Data)
    return (
        <div>
             <div className='grid lg:grid-cols-3 gap-5'>
            {
                Data?.map((ur)=><ToristCards users={ur} key={ur._id}></ToristCards>)
            }
        </div>
        </div>
    );
};

export default LatestTourist;