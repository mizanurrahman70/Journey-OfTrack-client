import React, { useState } from 'react';
import LatestSingle from '../Latest torist card/LatestSingle';
import CounterCard from '../Countru Card/CounterCard';

const Latest_torist = () => {
    const [toristSport,setToristSport]=useState([])
    useState(()=>{
        fetch('https://toreist-server-side.vercel.app/toristSports')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setToristSport(data)
        })
    })

    return (
       <>
       
       
       
       
       
       <div className='grid lg:grid-cols-3'>
        {
            toristSport.map((tsport)=> <CounterCard key={tsport.id} tourist={tsport}></CounterCard>)
        }
       </div>
       
       </>
    );
};

export default Latest_torist;