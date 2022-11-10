import React, { useContext } from 'react';
import {  useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const Details = ({ service }) => {
	const { user } = useContext(AuthContext);
	const {
		img,
		fee,
		title,
		name,
		specialist,
		degree,
		description,
		institute,
		rating,
	} = useLoaderData();
	const handleComment = e => {
		e.preventDefault();
		console.log(e.target.comment.value);
	}
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:gap-x-28 sm:gap-5 lg:flex-row">
				<div className="w-full max-w-lg text-center mb-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
					<div className="flex flex-col items-center py-10">
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
						<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
							{title}
						</h5>
						<span className="text-sm py-3  text-gray-500 dark:text-gray-400">
							{name}
						</span>
						<span className="text-sm px-5 pb-3 text-gray-500 dark:text-gray-400">
							{degree}
						</span>
						<span className="text-xs text-gray-500 dark:text-gray-400">
							{specialist}
						</span>
						<span className="text-sm pb-5 text-gray-500 dark:text-gray-400">
							{institute}
						</span>
						<span className="text-sm pb-3 px-5 text-justify text-gray-500 dark:text-gray-400">
							<>{description}</>
						</span>
						<span className="text-lg py-1 text-gray-500 dark:text-white-400">
							Fees: ${fee}
						</span>
						<span className="text-lg py-1 text-gray-500 dark:text-white-400">
							Rating: {rating}
						</span>
					</div>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form onSubmit={handleComment} className="card-body">
						<h5 className="text-2xl font-bold text-gray-900 dark:text-gray-900">
							Review Our Service
						</h5>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="text"
								placeholder="email"
								name="email"
								className="input input-bordered"
								required
								defaultValue={user?.email}
								readOnly
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								name="name"
								placeholder="name"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Number</span>
							</label>
							<input
								type="number"
								name="number"
								placeholder="+8801846-99999"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Date</span>
							</label>
							<input
								type="datetime-local"
								className="input input-bordered"
								required
								name="date"
								id=""
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Photo URL</span>
							</label>
							<input
								type="text"
								placeholder="Photo URL"
								name="photoURL"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Comment</span>
							</label>
							<textarea
								className="textarea textarea-error"
								placeholder="Comment"
								name="comment"
							></textarea>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Comment</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Details;
