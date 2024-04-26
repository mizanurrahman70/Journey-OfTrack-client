import React from 'react'
import ReactDOM from 'react-dom/client'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Error from './Components/ErrorMassege/Error.jsx';
import Home from './Components/Home/Home.jsx';
import AddTorist from './Components/AddTorist/AddTorist.jsx';
import Regester from './Components/Regester/Regester.jsx';
import Login from './Login/Login.jsx';
import AuthProvider from './Login/Auth Provider/AuthProvider.jsx';
import Root from './Components/Root/Root.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    errorElement:<Error></Error>,
    children:([
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/addtorist',
        element:<AddTorist></AddTorist>
      },
      {
        path:'/reg',
        element:<Regester></Regester>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ])
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />
     <ToastContainer/>
     </AuthProvider>
  </React.StrictMode>,
)
