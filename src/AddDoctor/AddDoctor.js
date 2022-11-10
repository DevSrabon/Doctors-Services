import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddDoctor = () => {
	const handleAdd = (e) => {
		e.preventDefault();
		const services = {
			title: e.target.title.value,
			img: e.target.img.value,
			fee: parseInt(e.target.fee.value),
			name: e.target.name.value,
			specialist: e.target.specialist.value,
			degree: e.target.degree.value,
			description: e.target.description.value,
			institute: e.target.institute.value,
			rating: parseInt(e.target.rating.value)
		};
		
		fetch('http://localhost:5000/services', {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(services)
		})
			.then(res => res.json())
		.then(data => console.log(data))
	};
	return (
		<div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 w-3/4 mx-auto my-20">
			<form className="space-y-6" onSubmit={handleAdd}>
				<h5 className="text-xl font-medium text-gray-900 dark:text-white">
					Add Your Doctor
				</h5>
				<div>
					<label
						htmlFor=""
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>
						Doctor Title
					</label>
					<input
						type="text"
						name="title"
						id="title"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="Medicine"
						required
					/>
				</div>
				 <div>
					<label
						htmlFor=""
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>
						Doctor Name
					</label>
					<input
						type="text"
						name="name"
						id="name"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="Dr. Golam Rabbani"
						required
					/>
				</div>
				<div>
					<label
						htmlFor=""
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>
						Doctor Image
					</label>
					<input
						type="text"
						name="img"
						id="img"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="Photo URL"
						required
					/>
				</div>
				<div>
					<label
						htmlFor=""
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>
						Doctor Degree
					</label>
					<input
						type="text"
						name="degree"
						id="degree"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="MBBS, FCPS"
						required
					/>
				</div>
				<div>
					<label
						htmlFor=""
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>
						Fee
					</label>
					<input
						type="number"
						name="fee"
						id="fee"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="50"
						required
					/>
				</div>
				<div>
					<label
						htmlFor=""
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>
						Rating
					</label>
					<input
						type="number"
						name="rating"
						id="rating"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="5"
						required
					/>
				</div>
				<div>
					<label
						htmlFor=""
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>
						Institute
					</label>
					<input
						type="text"
						name="institute"
						id="institute"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="Chittagong Medical College & Hospital."
						required
					/>
				</div>
				<div>
					<label
						htmlFor=""
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>
						Description
					</label>
					<input
						type="text"
						name="description"
						id="description"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-20 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="Prof. Dr. Golam Rabbani is a Medicine fee in Chittagong."
						required
					/>
				</div>
				<div>
					<label
						htmlFor=""
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>
						Specialist
					</label>
					<input
						type="text"
						name="specialist"
						id="specialist"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="Medicine Specialist"
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Add a Doctor
				</button>
				<div className="text-sm font-medium text-gray-500 dark:text-gray-300">
					Not registered?{' '}
					<Link
						to="/signup"
						className="text-blue-700 hover:underline dark:text-blue-500"
					>
						Create account
					</Link>
				</div>
			</form>
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

export default AddDoctor;
