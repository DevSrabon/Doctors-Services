import React from 'react';
import Banner from './Banner';
import Services from './Services';
import Usages from './Usages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className=' text-center text-3xl text-slate-700 font-medium mt-10 mb-5'>Best Doctors in Chittagong</h2>
            <Services></Services>
            <Usages></Usages>
        </div>
    );
};

export default Home;