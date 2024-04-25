import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../Fire-Base/FireBaseConfig';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth/cordova';

export const AuthContext =createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState({})
    const [loading,setLoading]=useState(true)
 

//   user create 
const userSinup=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth , email, password)
    
}
// user Login 
   const UserLogin=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
    
   }
//    google singup 
const google=new GoogleAuthProvider();
const gooogleSingUp=()=>{
    setLoading(true)
    
    return  signInWithPopup(auth, google)
}
// loge Out 
const logOut =()=>{
    setLoading(true)
  return  signOut(auth)
}
// git guh ahithintication
const Gitprovider = new GithubAuthProvider();
const Gitsignin=()=>{
    setLoading(true)
    return signInWithPopup(auth, Gitprovider)
    
}
// onOth Change 

useEffect(()=>{
    const unsubsribe= onAuthStateChanged(auth,(carrenUser)=>{
        setLoading(false)
         setUser(carrenUser)    
         })
     return ()=>{
         unsubsribe()
     }

 },[])
 // user profile 
 const setUserInfo = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
    })
    .then(() => {
       
    //    alert(("Profile updated successfully"))
   
    
        // You can add any additional actions upon successful profile update
        // For example, dispatch an event, update UI, etc.
    })
    .catch((error) => {
        console.error('Error updating profile:', error);
        throw error; // Rethrow the error to propagate it to the caller
    });
};
    const userInfo={
        userSinup,
        UserLogin,
        gooogleSingUp,
        Gitsignin,
        user,
        setUser,
        logOut,
        setUserInfo,
        loading
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;