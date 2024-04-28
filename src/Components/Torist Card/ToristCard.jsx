import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import ToristCards from '../Torist Cards/ToristCards';
import CounterCard from '../Countru Card/CounterCard';
import LatestSingle from '../Latest torist card/LatestSingle';

const ToristCard = () => {
    const[user,setUser]=useState([])
    useEffect(()=>{
       fetch('https://toreist-server-side.vercel.app/torists_sides')
       .then(res=>res.json())
       .then(data=>{
        setUser(data)
       
     
       })
       .catch(error=>console.log(error))
    },[])

    return (
        <div className='grid lg:grid-cols-3 gap-5'>
            {
                user.map((ur)=><ToristCards users={ur} key={ur._id}></ToristCards>)
            }
        </div>
    );
};

export default ToristCard;