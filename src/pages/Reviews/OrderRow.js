import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
	const { _id, serviceName, phone, name, customer, fee, service, date,
			email, message, degree } = order;
    const [orderService, setOrderService] = useState({});
    const { user } = useContext(AuthContext);
	useEffect(() => {
		fetch(`http://localhost:5000/services/${service}`)
			.then((res) => res.json())
			.then((data) => setOrderService(data));
	}, [service]);

	return (
		<tr>
			<th>
				<label>
					<button
						onClick={() => handleDelete(_id)}
						className="btn btn-square btn-outline"
					>
						X
					</button>
				</label>
			</th>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="rounded w-28 h-28">
							{orderService?.img && (
								<img
									src={orderService.img}
									alt="Avatar Tailwind CSS Component"
								/>
							)}
						</div>
					</div>
					<div>
						<div className="font-bold">{name}</div>
						<div className="text-sm opacity-50 w-2">{degree}</div>
					</div>
				</div>
			</td>
			<td>
				{serviceName}
				<br />
				<span className="badge badge-ghost badge-sm">${fee}</span>
			</td>
			<td>{message}</td>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="mask mask-circle w-16 h-16">
							{order?.photoURL && (
								<img src={order.photoURL} alt="Avatar Tailwind CSS Component" />
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
							<form className="card-body">
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
										defaultValue={user?.displayName}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Phone Number</span>
									</label>
									<input
										type="text"
										name="phone"
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
										className="input input-bordered"
										required
										type="date"
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
										defaultValue={user?.photoURL}
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
						<div className="modal-action">
							<label htmlFor="my-modal" className="btn">
								Done
							</label>
						</div>
					</div>
				</div>
			</th>
		</tr>
	);
};

export default OrderRow;
