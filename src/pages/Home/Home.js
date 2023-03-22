import Banner from './Banner';
import Services from './Services';
import { Statistic } from './Statistic';
import { Subscribe } from './Subscribe';

import Usages from './Usages';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <h2 className=' text-center text-3xl text-slate-700 font-medium mt-10 mb-5'>Best Doctors in Chittagong</h2>
            <Services></Services>
            <Statistic/>
            <Usages></Usages>
            <Subscribe/>
            {

            }
        </div>
      
    );
};

export default Home;