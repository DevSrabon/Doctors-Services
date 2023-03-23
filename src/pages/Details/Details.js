import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { FaStar } from "react-icons/fa";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import ReviewSlider from "../../components/ReviewSlider/ReviewSlider";
import { toast } from "react-toastify";
import StarRatings from "react-star-ratings";
const colors = {
	orange: "#FFBA5A",
	grey: "#a9a9a9",
};
const Details = () => {
	const { user } = useContext(AuthContext);
	const [currentValue, setCurrentValue] = useState(0);
	const [hoverValue, setHoverValue] = useState(0);
	const [refetch, setFetch] = useState(false);
	const [refetch2, setFetch2] = useState(false);
	const [avgStars, setAvgStars] = useState(0);
	const [reviews, setReviews] = useState([]);
	console.log("🚀 ~ file: Details.js:26 ~ Details ~ reviews:", reviews)
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
		reviewLength,
	} = useLoaderData();

	const handleComment = (e) => {
		e.preventDefault();
		const form = e.target;
		const message = form.comment.value;
		const review = {
			service: _id,
			serviceName: title,
			name: name,
			degree: degree,
			fee,
			customer: user.displayName,
			date: new Date(),
			email: user?.email || "unregistered",
			message,
			photoURL: user.photoURL,
			img: img,
			myRating: currentValue || 0,
		};

		fetch("https://doc-service-server.vercel.app/review", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(review),
		})
			.then((res) => res.json())
			.then((data) => {
				
				if (data.acknowledged) {
					toast.success("Review placed successfully");
					form.reset();
					setFetch(true);

					fetch(`https://doc-service-server.vercel.app/updatereview/${_id}`, {
						method: "PUT",
						headers: {
							"content-type": "application/json",
						},
						body: JSON.stringify({
							myRating: review.myRating,
							message: review.message,
							reviewLength: reviews.length + 1,
							avgStars: avgStars,
						}),
					})
						.then((res) => res.json())

						.then((data) => {
							if (data) {
								setFetch2(true);
								toast.success("updated Successfully ✅");
							}
						});
				}
			})
			.catch((er) => console.error(er));
	};

	useEffect(() => {
		fetch(`https://doc-service-server.vercel.app/singlereview?id=${_id}`)
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, [refetch, _id, refetch2]);
		useEffect(() => {
			const starsReview = reviews?.map((stars) => stars.myRating);
			if (starsReview.length > 0) {
				const totalReview =
					starsReview?.reduce((a, b) => a + b, 0) / starsReview.length;

				setAvgStars(totalReview);
			}
		}, [reviews]);
	return (
		<div>
			<div>
				{!user && (
					<h2 className="text-4xl font-semibold my-5 text-warning text-center">
						Please log in first !!
					</h2>
				)}
			</div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:gap-x-28 sm:gap-5 lg:flex-row">
					<div className="w-full max-w-lg text-center mb-10  rounded-lg border border-gray-200 shadow-md bg-gray-800 dark:border-gray-700">
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
							<h5 className="mb-1 text-xl font-medium text-white">{title}</h5>
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
								<StarRatings
									rating={avgStars}
									starDimension="25px"
									starSpacing="5px"
									starRatedColor="orange"
								/>
							<span className="text-xl px-1 text-gray-500 dark:text-white-400">
								({reviews.length ? reviews.length : 0})
							</span>
							</span>
						</div>
					</div>
					<div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 text-gray-100">
						<form
							onSubmit={handleComment}
							className="flex flex-col items-center w-full">
							<h2 className="text-3xl font-semibold text-center">
								Your opinion matters!
							</h2>
							<div className="flex flex-col items-center py-6 space-y-3">
								<span className="text-center">How was your experience?</span>
								<div className="flex space-x-3">
									{[1, 2, 3, 4, 5].map((_, index) => {
										return (
											<FaStar
												key={index}
												size={24}
												onClick={() => setCurrentValue(index + 1)}
												onMouseOver={() => setHoverValue(index + 1)}
												onMouseLeave={() => setHoverValue(0)}
												color={
													(hoverValue || currentValue) > index
														? colors.orange
														: colors.grey
												}
												className="cursor-pointer space-x-3"
											/>
										);
									})}
								</div>
							</div>

							<div className="flex flex-col w-full">
								<textarea
									name="comment"
									rows="3"
									required
									placeholder="Message..."
									className="p-4 rounded-md resize-none text-gray-100 bg-gray-900 textarea textarea-primary"></textarea>
								<button
									type="submit"
									disabled={currentValue === 0 || !user?.email}
									className="my-8 btn btn-primary text-white">
									Leave feedback
								</button>
							</div>
						</form>
						<div className="flex items-center justify-center">
							<Link to={"/services"} className="text-sm text-gray-400">
								Maybe later
							</Link>
						</div>
					</div>
				</div>
			</div>
			<ReviewSlider reviews={reviews} />
		</div>
	);
};

export default Details;
