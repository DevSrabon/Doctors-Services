import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Reviews = () => {
	const { user } = useContext(AuthContext);
	const [reviews, setReviews] = useState([]);
	const [refetch, setRefetch] = useState(false)

	useEffect(() => {
		fetch(`http://localhost:5000/reviews?email=${user?.email}`)
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, [user?.email, refetch]);

	const handleDelete = (id) => {
		const proceed = window.confirm(
			"Are you sure, you want to cancel?"
		);
		if (proceed) {
			fetch(`http://localhost:5000/reviews/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount > 0) {
						toast.success("Deleted successfully");
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
						<tr className="text-center">
							<th> Delete</th>
							<th>Name</th>
							<th>Job</th>
							<th>Review</th>
							<th>Rating</th>
							<th>Customer Info</th>
							<th>Edit</th>
						</tr>
					</thead>
					<tbody>
						{reviews?.map((review) => (
							<ReviewRow
								key={review._id}
								review={review}
								handleDelete={handleDelete}
								setRefetch={setRefetch}></ReviewRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Reviews;
