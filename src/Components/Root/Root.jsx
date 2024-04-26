import React from 'react';

import { Outlet } from 'react-router-dom';

import Navber from '../Navber/Navber';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div >
            <div className='container mx-auto mt-10'>
             <Navber></Navber>
            <Outlet></Outlet>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;