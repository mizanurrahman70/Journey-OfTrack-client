import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateLIst = () => {
    const loaderData=useLoaderData()
    const {_id,toristSportName,countryName,average_cost,seasonality,travel_time,totaVisitorsPerYear,email,name,shortDescripion,imgURL }=loaderData
    const handleAddCoffee = event => {
    event.preventDefault();

    const form = event.target;

    const toristSportName = form.toristSportName.value;
    const countryName = form.countryName.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
    const email = form.email.value;
    const name = form.name.value;
    const shortDescripion = form.shortDescripion.value;
    
    
    const imgURL = form.imgURL.value;
   
    const newTorist = {toristSportName,countryName,average_cost,seasonality,travel_time,totaVisitorsPerYear,email,name,shortDescripion,imgURL }
    fetch(`http://localhost:5000/details/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newTorist)
    })
    .then(res=>res.json)
    .then(data=>console.log(data))
}
    console.log(loaderData)
    return (
        <div>
        <div className="bg-[#F4F3F0] p-24">
       <h2 className="text-3xl font-extrabold">Update</h2>
       <form onSubmit={handleAddCoffee}>
           {/* form name and quantity row */}
           <div className="md:flex mb-8">
               <div className="form-control md:w-1/2">
                   <label className="label">
                       <span className="label-text">Tourists Spot Name</span>
                   </label>
                   <label className="input-group">
                       <input type="text" defaultValue={toristSportName} name="toristSportName" placeholder="Tourists Spot Name" className="input input-bordered w-full" />
                   </label>
               </div>
               <div className="form-control md:w-1/2 ml-4">
                   <label className="label">
                       <span className="label-text">Country Name</span>
                   </label>
                   <label className="input-group">
                       <input type="text" defaultValue={countryName} name="countryName" placeholder="Country Name" className="input input-bordered w-full" />
                   </label>
               </div>
           </div>
           {/* form supplier row */}
           <div className="md:flex mb-8">
               <div className="form-control md:w-1/2">
                   <label className="label">
                       <span className="label-text">Average_cost</span>
                   </label>
                   <label className="input-group">
                       <input type="text" defaultValue={average_cost} name="average_cost" placeholder="Supplier Name" className="input input-bordered w-full" />
                   </label>
               </div>
               <div className="form-control md:w-1/2 ml-4">
                   <label className="label">
                       <span className="label-text">Seasonality</span>
                   </label>
                   <label className="input-group">
                       <input type="text" defaultValue={seasonality} name="seasonality" placeholder="like summer, winter" className="input input-bordered w-full" />
                   </label>
               </div>
           </div>
           {/* form category and details row */}
           <div className="md:flex mb-8">
               <div className="form-control md:w-1/2">
                   <label className="label">
                       <span className="label-text">Travel Time</span>
                   </label>
                   <label className="input-group">
                       <input type="text" defaultValue={travel_time} name="travel_time" placeholder="like- 7 days" className="input input-bordered w-full" />
                   </label>
               </div>
               <div className="form-control md:w-1/2 ml-4">
                   <label className="label">
                       <span className="label-text">Tota Visitors PerYear</span>
                   </label>
                   <label className="input-group">
                       <input type="text" defaultValue={totaVisitorsPerYear} name="totaVisitorsPerYear" placeholder="Tota Visitors PerYear" className="input input-bordered w-full" />
                   </label>
               </div>
           </div>
           {/* form Photo url row */}
           <div className="mb-8">
               <div className="form-control w-full">
                   <label className="label">
                       <span className="label-text">User Email</span>
                   </label>
                   <label className="input-group">
                       <input type="email" defaultValue={email} name="email" placeholder="User Email" className="input input-bordered w-full" />
                   </label>
               </div>
               </div>
                {/* user info */}
           <div className="mb-8">
               <div className="form-control w-full">
                   <label className="label">
                       <span className="label-text">User Name</span>
                   </label>
                   <label className="input-group">
                       <input type="text" defaultValue={name} name="name" placeholder="User Name" className="input input-bordered w-full" />
                   </label>
               </div>
           </div>
                {/* user info */}
           <div className="mb-8">
               <div className="form-control w-full">
                   <label className="label">
                       <span className="label-text"> use image URL</span>
                   </label>
                   <label className="input-group">
                       <input type="text" defaultValue={imgURL} name="imgURL" placeholder="use image URL" className="input input-bordered w-full" />
                   </label>
               </div>
           </div>
                {/* user info */}
           <div className="mb-8">
               <div className="form-control w-full">
                   <label className="label">
                       <span className="label-text"> short description</span>
                   </label>
                   <label className="input-group">
                       <input type="text" defaultValue={shortDescripion} name="shortDescripion" placeholder="short description" className="input input-bordered w-full" />
                   </label>
               </div>
           </div>
          
           <input type="submit" value="Submit" className="btn btn-block" />

       </form>
   </div>
   </div>
    );
};

export default UpdateLIst;