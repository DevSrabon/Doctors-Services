import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AllServicesCards from './AllServicesCards';

const AllServices = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		const url = `https://doc-service-server.vercel.app/services`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setServices(data.services);
			});
	}, []);
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
			<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
				{services.map((service) => (
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
