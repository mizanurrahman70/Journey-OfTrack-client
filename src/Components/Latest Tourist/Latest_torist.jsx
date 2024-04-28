import React, { useState } from 'react';
import LatestSingle from '../Latest torist card/LatestSingle';

const Latest_torist = () => {
    const [toristSport,setToristSport]=useState([])
    useState(()=>{
        fetch('http://localhost:5000/toristSport')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setToristSport(data)
        })
    })
    console.log(toristSport)
    return (
       <>
       
       
       
       
       
       <div className='grid lg:grid-cols-3'>
        {
            toristSport.map((tsport)=> <LatestSingle key={tsport.id} tourist={tsport}></LatestSingle>)
        }
       </div>
       
       </>
    );
};

export default Latest_torist;