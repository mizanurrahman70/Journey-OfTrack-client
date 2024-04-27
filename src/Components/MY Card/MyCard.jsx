import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MyCard = ({list}) => {
	const [user,setUser]=useState(list)
    const {toristSportName,countryName,average_cost,_id,name }=user
    const deltHandle=_id=>{
        console.log(_id)
        fetch(`http://localhost:5000/details/${_id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
			if(data.acknowledged){
             setUser(data)
			}
		})
		.catch(error=>console.log(error))
    }
    return (
        <tbody>
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
					<td className=" text-right">
						<span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
							<span onClick={()=>deltHandle(_id)}>Delete</span>
						</span>
					</td>
				</tr>
				
				
				
			</tbody>
    );
};

export default MyCard;