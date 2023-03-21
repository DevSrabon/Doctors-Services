import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import StarRatings from "react-star-ratings";
import moment from "moment";
const ReviewSlider = ({reviews}) => {
	return (
		<div className="mb-20">
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				slidesPerView={1}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2.5,
					slideShadows: false,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination, Autoplay]}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}>
				{reviews.length &&
					reviews?.map((review) => {
						return (
							<SwiperSlide key={review._id}>
								<div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
									<div className="flex justify-between p-4">
										<div className="flex space-x-4">
											<div>
												<img
													src={review.photoURL}
													alt=""
													className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
												/>
											</div>
											<div>
												<h4 className="font-bold">{review.customer}</h4>
												<span className="text-xs dark:text-gray-400">
													{moment(review.date).fromNow()}
												</span>
											</div>
										</div>
										<div className="flex items-center space-x-2 dark:text-yellow-500">
											<span className="text-xl font-semibold">
												<StarRatings
													rating={review?.myRating}
													starDimension="25px"
													starSpacing="5px"
													starRatedColor="orange"
												/>
											</span>
										</div>
									</div>
									<div className="p-4 space-y-2 text-sm dark:text-gray-400">
										<p>{review.message}</p>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
			</Swiper>
		</div>
	);
};

export default ReviewSlider;
