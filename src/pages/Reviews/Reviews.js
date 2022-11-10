import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Reviews = () => {
	const { user } = useContext(AuthContext);
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/reviews')
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, [user?.email]);

	const handleDelete = (id) => {
		const proceed = window.confirm(
			'Are you sure, you want to cancel this order'
		);
		if (proceed) {
			fetch(`http://localhost:5000/reviews/${id}`, {
				method: 'DELETE',
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount > 0) {
						toast.success('Deleted successfully');
						const remaining = reviews.filter((rev) => rev._id !== id);
						setReviews(remaining);
					}
				});
		}
	};

	return (
		<div>
			<h2 className="text-3xl text-center my-5 text-slate-600">
				You have {reviews.length} reviews
			</h2>
			<div className="overflow-x-auto w-full">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Job</th>
							<th>Review</th>
							<th>Customer</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{reviews.map((review) => (
							<ReviewRow
								key={review._id}
								review={review}
								handleDelete={handleDelete}
							></ReviewRow>
						))}
					</tbody>
				</table>
			</div>
			<ToastContainer
				position="top-center"
				autoClose={1000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</div>
	);
};

export default Reviews;
