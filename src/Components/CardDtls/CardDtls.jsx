
import Banner from '../Banner/Banner';
import { Link, useLoaderData, useParams } from 'react-router-dom';


const CardDtls = () => {
    const loaderData=useLoaderData()

    if(!loaderData){
        return <span className="loading loading-bars loading-lg mt-20 mb-5 lg:ml-[700px]"></span>
    }
    const {_id,toristSportName,countryName,average_cost,seasonality,travel_time,totaVisitorsPerYear,email,name,shortDescripion,imgURL}=loaderData
    // const id =useParams()
    // const data =loaderData.find((fn)=>fn_id==id)

    return (
        <>
        <div >
        <div>
       <Banner></Banner>
        </div>
        
         {/* Card Image */}
         <div className='container w-[350px]   flex-col  mx-auto'>
           <div className=' flex flex-col mx-auto'>
           <img className="w-[350px] h-[190px] bg-gray-400 rounded-2xl" src={imgURL} alt="card navigate ui" />
           </div>
             {/* Card Heading */}
            
             <div className=''>
             <div className="space-y-2 w-[350px]">
             <h2 className="text-slate-800 font-medium ">Country Name : <span className='text-orange-300 text-xl'>{countryName} </span></h2>
                 <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg ">Torist Sport Name : <span >{toristSportName}</span></h2>
                 <h2 className="text-slate-800 "><span className='font-medium text-gray-600'>Description : </span><span className='text-gray-600'>{shortDescripion}</span></h2>
                 <p className='text-neutral-400  font-medium'>Seasonality :<span className='bg-green-300 p-1 rounded-3xl ml-2 text-slate-700'>{seasonality}</span></p>
                 {/* rating  */}
                 <p className='text-neutral-400  font-medium'>Travel Time : <span className='text-slate-700'>{travel_time}</span><span>Day</span></p>
                 <p className='text-neutral-400  font-medium'>Total Visitor : <span className='text-slate-700'>{totaVisitorsPerYear}</span></p>
                 
                
                 <div className="flex gap-1">
                 <h2 className="md:text-xl text-gray-800 font-medium"><span className=' font-medium text-gray-600'>Average Cost :</span> <span className='text-gray-600'>{average_cost}</span>$$</h2>
               
                  
                 </div>
                 <h2 className="md:text-xl "> <span className=' font-medium text-gray-600'>Name :</span> <span className='text-gray-600'>{name}</span></h2>
                 <h2 className="md:text-xl text-gray-800 font-medium"><span className=' font-medium text-gray-600' >Email :</span> <span className='text-gray-600'>{email}</span></h2>
                 
                 
             </div>
             {/* Price and action button */}
             <div className=" font-medium w-[350px] flex justify-around mt-5">
                
                <Link to='/'> <button className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">Back</button></Link>
                 <button className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">Buy Now</button>
             </div>
             </div>
             </div>
             </div>
         
       </>
    );
};

export default CardDtls;