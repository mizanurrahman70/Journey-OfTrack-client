import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../Login/Auth Provider/AuthProvider';
import MyCard from '../MY Card/MyCard';
import Swal from 'sweetalert2';

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
    },[])
    console.log(users)
	const deltHandle=_id=>{
        console.log(_id)
        // fetch(`http://localhost:5000/details/${_id}`,{
        //     method:"DELETE"
        // })
        // .then(res=>res.json())
        // .then(data=>{
		// 	if(data.acknowledged){
		// 		// const reaming=user.filter((torist)=>torist._id !== _id)
        //      setUser(data)
		// 	}
		// })
		// .catch(error=>console.log(error))
		
		
		Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:5000/details/${_id}`, {
      method: "DELETE"
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      if (data.acknowledged) {
        // Assuming `setUser` is a function to update your state
        // setUser(prevState => prevState.filter(item => item._id !== _id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
		
		 const reaming=users.filter((torist)=>torist._id !== _id)
          setUser(reaming)
      } else {
        console.error('Deletion failed:', data);
        Swal.fire({
          title: "Error!",
          text: "Deletion failed. Please check the server logs for details.",
          icon: "error"
        });
      }
    })
    .catch(error => {
      console.error('Error deleting data:', error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred during deletion. Please try again later.",
        icon: "error"
      });
    });
  }
});
    }

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
                    <th className='p-3 '>Update</th>
                    <th className='p-3'>Details</th>
                    <th className='p-3'>Delete</th>
                  
				</tr>
			</thead>
			<tbody>
			{
                users.map((user)=><MyCard key={user._id} list={user} deltHandle={deltHandle}></MyCard>)
            }
			</tbody>
		</table>
	</div>
</div>
    );
};

export default MyList;