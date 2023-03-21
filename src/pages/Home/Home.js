import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Banner from './Banner';
import Services from './Services';
import { Statistic } from './Statistic';
import Usages from './Usages';

const Home = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
			return (
				<div className="flex justify-center mt-16">
					<button className="btn loading">loading</button>
				</div>
			);
		}
    return (
        <div>
            <Banner></Banner>
            <h2 className=' text-center text-3xl text-slate-700 font-medium mt-10 mb-5'>Best Doctors in Chittagong</h2>
            <Services></Services>
            <Statistic/>
            <Usages></Usages>
            {

            }
        </div>
      
    );
};

export default Home;