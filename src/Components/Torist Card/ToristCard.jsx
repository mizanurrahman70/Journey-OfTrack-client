import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import ToristCards from '../Torist Cards/ToristCards';

const ToristCard = () => {
    const[user,setUser]=useState([])
    useEffect(()=>{
       fetch('http://localhost:5000/torists_sides')
       .then(res=>res.json())
       .then(data=>{
        setUser(data)
        console.log(data)
     
       })
       .catch(error=>console.log(error))
    },[])
    console.log(user)
    return (
        <div className='grid lg:grid-cols-3 gap-5'>
            {
                user.map((ur)=><ToristCards users={ur} key={ur._id}></ToristCards>)
            }
        </div>
    );
};

export default ToristCard;