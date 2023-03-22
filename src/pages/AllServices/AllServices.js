import React, { useEffect, useState } from 'react';
import AllServicesCards from './AllServicesCards';

const AllServices = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		const url = `https://doc-service-server.vercel.app/services`;
		fetch(url)
			
			.then((res) => res.json() )
			.then((data) => {
				setServices(data.services);
				
			});
	}, []);
	return (
		<div>
			<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
				{services?.map((service) => (
					<AllServicesCards
						key={service._id}
						service={service}
						></AllServicesCards>
				))}
			</div>
		</div>
	);
};

export default AllServices;
