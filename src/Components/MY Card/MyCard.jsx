import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCard = ({list,deltHandle}) => {

	const [user,setUser]=useState(list)
	if(!user){
        return <span className="loading loading-bars loading-lg mt-20 mb-5 lg:ml-[700px]"></span>
    }
    const {toristSportName,countryName,average_cost,_id,name }=user
   
    return (
        <>
				<tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
					<td className="p-3">
						<p>{_id}</p>
					</td>
					<td className="p-3">
						<p>{name}</p>
					</td>
					<td className="p-3">
						<p>{countryName}</p>
						
					</td>
					<td className="p-3">
						<p>{toristSportName}</p>
						
					</td>
					<td className="p-3 text-right">
						<p>{average_cost}</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
							<span>Pending</span>
						</span>
					</td>
					<td className=" text-right">
						<span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
						<NavLink to={`/update/${_id}`}>	<span>Update</span></NavLink>
						</span>
					</td>
					<td className=" text-right">
						<span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
						<NavLink to={`/details/${_id}`}>	<span>Details</span></NavLink>
						</span>
					</td>
					<td className=" text-right mr-5">
						<span className=" px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
							<span onClick={()=>deltHandle(_id)}>Delete</span>
						</span>
					</td>
				</tr>
				
				
				
			</>
    );
};

export default MyCard;