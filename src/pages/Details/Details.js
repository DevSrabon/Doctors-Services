import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
const Details = ({ service }) => {
    const {
			img,
			fee,
			title,
			name,
			specialist,
			degree,
			description,
        institute,
            rating
		} = useLoaderData();
    return (
			<div class="w-3/4 mx-auto max-w-sm text-center mb-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
				<div class="flex flex-col items-center py-10">
					<PhotoProvider>
						<div className="foo">
							<PhotoView src={img}>
								<img
									className="mb-3 w-24 h-24 rounded-full shadow-lg"
									src={img}
									alt=""
								/>
							</PhotoView>
						</div>
					</PhotoProvider>
					<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
						{title}
					</h5>
					<span class="text-sm py-3  text-gray-500 dark:text-gray-400">
						{name}
					</span>
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
						<>{description}</>
					</span>
					<span class="text-lg py-1 text-gray-500 dark:text-white-400">
						Fees: ${fee}
					</span>
					<span class="text-lg py-1 text-gray-500 dark:text-white-400">
						Rating: {rating}
					</span>
					<div class="flex mt-4 space-x-3 md:mt-6">
						<Link class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
							Review
						</Link>
					</div>
				</div>
			</div>
		);
};

export default Details;