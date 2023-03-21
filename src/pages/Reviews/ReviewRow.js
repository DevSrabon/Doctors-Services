import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import { toast } from 'react-toastify';

const ReviewRow = ({ review, handleDelete, setRefetch }) => {
	const {
		_id,
		serviceName,
		phone,
		name,
		customer,
		fee,
		img,
		date,
		email,
		message,
		myRating,
		degree,
		reviewLength
	} = review;
	const [updateRating, setUpdateRating] = useState(review.myRating);
	console.log(
		"🚀 ~ file: ReviewRow.js:21 ~ ReviewRow ~ updateRating:",
		updateRating
	);
	const changeRating = (newRating) => {
		setUpdateRating(newRating);
	};
	const handleStatusUpdate = (e) => {
		e.preventDefault();
		const form = e.target;
		const message = form.comment.value;
		const body = {
			myRating: updateRating,
			message: message,
			reviewLength: reviewLength? reviewLength : 0,
		};
		fetch(`http://localhost:5000/updatereview/${_id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(body),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					setRefetch(true)
					toast.success("updated Successfully ✅")
			}});
	};
	return (
		<tr>
			<th>
				<label>
					<button
						onClick={() => handleDelete(_id)}
						className="btn btn-square btn-outline">
						X
					</button>
				</label>
			</th>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="rounded w-28 h-28">
							{img && <img src={img} alt="Avatar Tailwind CSS Component" />}
						</div>
					</div>
					<div className="max-w-2">
						<div className="font-bold">{name}</div>
						<div className="text-sm opacity-50 ">
							{degree.length > 30 ? degree.slice(0, 30) : degree}
						</div>
					</div>
				</div>
			</td>
			<td>
				{serviceName}
				<br />
				<span className="badge badge-ghost badge-sm">${fee}</span>
			</td>
			<td>{message?.length > 30 ? message.slice(0, 30) : message}</td>
			<td className="font-semibold ">
				<StarRatings
					rating={myRating}
					starDimension="25px"
					starSpacing="5px"
					starRatedColor="orange"
				/>
			</td>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="mask mask-circle w-16 h-16">
							{review?.photoURL && (
								<img
									src={review.photoURL}
									alt="Avatar Tailwind CSS Component"
								/>
							)}
						</div>
					</div>
					<div>
						<div className="font-bold">{customer}</div>
						<div className="text-sm opacity-50">{phone}</div>
						<div className="text-sm opacity-50">{email}</div>
						<div className="text-sm opacity-50">{date}</div>
					</div>
				</div>
			</td>
			<th>
				<label htmlFor="my-modal" className="btn">
					Edit
				</label>

				{/* Put this part before </body> tag */}
				<input type="checkbox" id="my-modal" className="modal-toggle" />
				<div className="modal">
					<div className="modal-box">
						<div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
							<form onSubmit={handleStatusUpdate} className="card-body">
								<h5 className="text-2xl font-bold text-gray-900 dark:text-gray-900">
									Review Our Service
								</h5>

								<StarRatings
									rating={updateRating}
									starDimension="25px"
									starSpacing="5px"
									starRatedColor="orange"
									changeRating={changeRating}
								/>

								<div className="form-control">
									<label className="label">
										<span className="label-text">Comment</span>
									</label>
									<textarea
										className="textarea textarea-error"
										placeholder="Comment"
										name="comment"></textarea>
								</div>
								<div className="form-control mt-6">
									<button type="submit" className="btn btn-primary">
										Comment
									</button>
								</div>
							</form>
						</div>
						<div className="modal-action">
							<label
								htmlFor="my-modal"
								className="btn btn-sm btn-circle absolute right-2 top-2">
								✕
							</label>
						</div>
					</div>
				</div>
			</th>
		</tr>
	);
};

export default ReviewRow;
