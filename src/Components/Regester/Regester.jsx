import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Login/Auth Provider/AuthProvider';

const Regester = () => {
    const {userSinup , setUserInfo}=useContext(AuthContext)
    
  const Navigate=useNavigate()
    const regHandle=(e)=>{
        e.preventDefault()
        const form= e.target
        const name =form.name.value 
        const email=form.email.value 
        const password=form.password.value
        const photo=form.photo.value
        console.log(name,email,password,photo)
        if(password.length < 6){
            // SetError('please provide 6 charecter')
            toast.error('Please provide 6 charecter')
            return
           }
           
            if(!/^(?=.*[a-z]).+$/.test(password)){
                // SetError('you must have lower case charecter')
                toast.error('You must have Lowercase charecter')
                return
            }
            if(!/^(?=.*[A-Z]).+$/.test(password)){
                // SetError('you must have Uper case charecter')
                toast.error('You must have Upercase charecter')
                return
            }
            
           
            userSinup(email,password)
            .then((result)=>{
              setUserInfo(name,photo)
              .then(result=>console.log(result))
              .catch(error=>console.log(error))
                toast.success("Accout create seceefull")
                // alert ("Accout create seceefull")
                setTimeout(() => {
                  Navigate('/login')
                }, "1000");  
              })
                    
            .catch((error)=>console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Regester Now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={regHandle} className="card-body">
        {/*  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        {/*  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
        </div>
        {/*  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
                    Don&apos;t have an account?
                    <p href="#" className="underline hover:text-indigo-600 mb-5 font-semibold text-orange-400">
                        <NavLink to='/login'>Sign in</NavLink>
                    </p>
                </p>
    </div>
  </div>

</div>
    );
};

export default Regester;