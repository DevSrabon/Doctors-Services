import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
	const { user } = useContext(AuthContext);
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/orders')
			.then((res) => res.json())
			.then((data) => setOrders(data));
	}, [user?.email]);

	

	return (
		<div>
			<h2 className="text-3xl text-center my-5 text-slate-600">You have {orders.length} reviews</h2>
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
						{orders.map((order) => (
							<OrderRow
								key={order._id}
								order={order}
								handleDelete={handleDelete}
							></OrderRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Orders;
