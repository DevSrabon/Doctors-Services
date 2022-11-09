import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
	const {
		_id,
		img,
		fee,
		title,
		name,
		specialist,
		degree,
		description,
		institute,
	} = service;
	return (
		<div class="w-full max-w-sm text-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
			<div class="flex flex-col items-center py-10">
				<img class="mb-3 w-24 h-24 rounded-full shadow-lg" src={img} alt="" />
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
					{title}
				</h5>
				<span class="text-sm py-3  text-gray-500 dark:text-gray-400">{name}</span>
				<span class="text-sm px-5 pb-3 text-gray-500 dark:text-gray-400">
					{degree}
				</span>
				<span class="text-xs text-gray-500 dark:text-gray-400">
					{specialist}
				</span>
				<span class="text-sm pb-5 text-gray-500 dark:text-gray-400">
					{institute}
				</span>
				<span class="text-sm pb-3 px-5 text-justify text-gray-500 dark:text-gray-400">
					{description.length > 100 ? (
						<>
							{description.slice(0, 100) + '...'}
							<Link to={`/services/${_id}`}>See More</Link>
						</>
					) : (
						<>{description}</>
					)}
				</span>
				<span class="text-lg py-1 text-gray-500 dark:text-white-400">
					Fees: ${fee}
				</span>
				<div class="flex mt-4 space-x-3 md:mt-6">
					<Link
						to={`/services/${_id}`}
						class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
					>
						Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
