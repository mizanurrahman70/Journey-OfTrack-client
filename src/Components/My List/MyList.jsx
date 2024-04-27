import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../Login/Auth Provider/AuthProvider';
import MyCard from '../MY Card/MyCard';

const MyList = () => {
    const { user } = useContext(AuthContext);
    const userEmail=user.email
    const [users,setUser]=useState([])
    useEffect(()=>{
      fetch(`http://localhost:5000/mylist/${userEmail}`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setUser(data)
      })
      .catch(error=>console.log(error))
    },[user])
    console.log(users)
    return (
        <div className="container p-2 mx-auto sm:p-4 text-gray-100">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="bg-gray-700">
				<tr className="text-left">
					<th className="p-3">ID</th>
					<th className="p-3">Name</th>
					<th className="p-3">Country Name</th>
					<th className="p-3">Torist Name</th>
					<th className="p-3 text-right">Amount</th>
					<th className="p-3">Status</th>
                    <th className='p-3'>Update</th>
                    <th className='p-3'>Details</th>
                    <th className='p-3'>Delete</th>
                  
				</tr>
			</thead>
			{
                users.map((user)=><MyCard key={user._id} list={user}></MyCard>)
            }
		</table>
	</div>
</div>
    );
};

export default MyList;