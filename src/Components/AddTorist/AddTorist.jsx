import React, { useContext } from 'react';
import { AuthContext } from '../../Login/Auth Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddTorist = () => {
    const { user } = useContext(AuthContext);
    
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
        const authEmail=user.email

        const newTorist = {authEmail,toristSportName,countryName,average_cost,seasonality,travel_time,totaVisitorsPerYear,email,name,shortDescripion,imgURL }
        console.log(newTorist)
        fetch('https://toreist-server-side.vercel.app/torists_sides',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newTorist)
        })
        .then(res=>res.json())
        .then(data=>{
            Swal.fire("Upload Successful");
            console.log(data)
            form.reset( )
        })

       


     
    }
    return (
        <div>
        <div className="bg-[#dacba1] p-24 rounded-2xl">
       <h2 className="text-3xl font-extrabold">Add  Toruist sport</h2>
       <form onSubmit={handleAddCoffee}>
           {/* form name and quantity row */}
           <div className="md:flex mb-8">
               <div className="form-control md:w-1/2">
                   <label className="label">
                       <span className="label-text">Tourists Spot Name</span>
                   </label>
                   <label className="input-group">
                       <input type="text"required name="toristSportName" placeholder="Tourists Spot Name" className="input input-bordered w-full" />
                   </label>
               </div>
               <div className="form-control md:w-1/2 ml-4">
                   <label className="label">
                       <span className="label-text">Country Name</span>
                   </label>
                   <label className="input-group">
                       <input type="text" required name="countryName" placeholder="Country Name" className="input input-bordered w-full" />
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
                       <input type="text" required name="average_cost" placeholder="Supplier Name" className="input input-bordered w-full" />
                   </label>
               </div>
               <div className="form-control md:w-1/2 ml-4">
                   <label className="label">
                       <span className="label-text">Seasonality</span>
                   </label>
                   <label className="input-group">
                       <input type="text" required name="seasonality" placeholder="like summer, winter" className="input input-bordered w-full" />
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
                       <input type="text" required name="travel_time" placeholder="like- 7 days" className="input input-bordered w-full" />
                   </label>
               </div>
               <div className="form-control md:w-1/2 ml-4">
                   <label className="label">
                       <span className="label-text">Tota Visitors PerYear</span>
                   </label>
                   <label className="input-group">
                       <input type="text" required name="totaVisitorsPerYear" placeholder="Tota Visitors PerYear" className="input input-bordered w-full" />
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
                       <input required type="email" name="email" placeholder="User Email" className="input input-bordered w-full" />
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
                       <input required type="text" name="name" placeholder="User Name" className="input input-bordered w-full" />
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
                       <input required type="text" name="imgURL" placeholder="use image URL" className="input input-bordered w-full" />
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
                       <input required type="text" name="shortDescripion" placeholder="short description" className="input input-bordered w-full" />
                   </label>
               </div>
           </div>
          
           <input type="submit" value="Submit" className="btn btn-block" />

       </form>
   </div>
   </div>
    );
};

export default AddTorist;