import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
const Services = () => {
	const [services, setServices] = useState([]);
	console.log(services);
	const [page, setPage] = useState(0);
	const size = 3;
	const [count, setCount] = useState(0);
	useEffect(() => {
		const url = `https://doc-service-server.vercel.app/services?page=${page}&size=${size}`;
		console.log(page, size);
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setCount(data.count);
				setServices(data.services);
			});
	}, [page, size]);

	const pages = Math.ceil(count / size);

	return (
		<div className="w-3/4 mx-auto">
			<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{services.map((service) => (
					<ServiceCard key={service._id} service={service}></ServiceCard>
				))}
			</div>
			<div className="text-center my-5">
				<div className="btn-group">
					{[...Array(pages).keys()].map((number) => (
						<button
							key={number}
							className={page === number ? 'btn btn-active' : 'btn'}
							onClick={() => setPage(number)}
						>
							{number + 1}
						</button>
					))}
				</div>
				<br />
				<Link to="/services">
					<button className="btn btn-outline btn-accent mt-5">See All</button>
				</Link>
			</div>
		</div>
	);
};

export default Services;
