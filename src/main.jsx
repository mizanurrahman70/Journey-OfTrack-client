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
import CardDtls from './Components/CardDtls/CardDtls.jsx';
import AllTorist from './Components/All Tosrist List/AllTorist.jsx';
import AverageData from './Components/Average Data/AverageData.jsx';
import MyList from './Components/My List/MyList.jsx';
import UpdateLIst from './Components/Update Torist  List/UpdateLIst.jsx';
import PrivetRoute from './Privet Route/PrivetRoute.jsx';
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
        element:<PrivetRoute><AddTorist></AddTorist></PrivetRoute>
      },
      {
        path:'/reg',
        element:<Regester></Regester>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/details/:id',
        loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`),
        element:<PrivetRoute><CardDtls></CardDtls></PrivetRoute>
      },
      {
        path:'/allsports',
       loader:()=>fetch('http://localhost:5000/torists_sides'),
        element:<AllTorist></AllTorist>
      },
      {
        path:'/average',
       loader:()=>fetch('http://localhost:5000/torists_sides'),
        element:<AverageData></AverageData>
      },
      {
        path:'/toristlist',
    
        element:<PrivetRoute><MyList></MyList></PrivetRoute>
      },
      {
        path:'/update/:id',
        loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`),
        element:<PrivetRoute><UpdateLIst></UpdateLIst></PrivetRoute>
      },
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
