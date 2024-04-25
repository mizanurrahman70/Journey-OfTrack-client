import React from 'react';
import Navber from './Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

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