import React from 'react';
import Banner from '../Banner/Banner';
import ToristCard from '../Torist Card/ToristCard';
import MyCard from '../MY Card/MyCard';
import MyList from '../My List/MyList';
import ToristImg from '../Torist Image/ToristImg';
import Latest_torist from '../Latest Tourist/Latest_torist';
import Fetures from '../Fetures/Fetures';

const Home = () => {
    return (
        <div className='space-y-5'>
            <Banner></Banner>
            <ToristCard></ToristCard>
           <ToristImg></ToristImg>
           <Latest_torist></Latest_torist>
           <Fetures></Fetures>
        </div>
    );
};

export default Home;