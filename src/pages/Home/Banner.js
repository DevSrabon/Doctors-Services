import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
			<div className='banner text-slate-800 flex flex-col items-center gap-5 justify-center'>
				<h1 className="text-7xl text-center font-extrabold">
					Complete Health Solution
				</h1>
				<h4 className='text-2xl text-center font-semibold w-2/4 mx-auto'>
					Consulting a healthcare professional and improving your health and wellbeing, all can be done 24/7
					with Doctor Service!
				</h4>
			</div>
		);
};

export default Banner;