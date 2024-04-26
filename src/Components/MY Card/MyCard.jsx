import React from 'react';

const MyCard = ({list}) => {
    const {toristSportName,countryName,average_cost,_id,name }=list
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
							<span>update</span>
						</span>
					</td>
					<td className=" text-right">
						<span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
							<span>Details</span>
						</span>
					</td>
					<td className=" text-right">
						<span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
							<span>Delete</span>
						</span>
					</td>
				</tr>
				
				
				
			</tbody>
    );
};

export default MyCard;