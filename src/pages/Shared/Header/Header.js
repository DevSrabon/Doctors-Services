import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo from '../../../assets/logo.svg';
const Header = () => {
    	const { user, logOut } = useContext(AuthContext);

			const handleLogOut = () => {
				logOut().then().catch();
			};
    const menuItems = (
		<>
			<li className="font-semibold">
				<Link to="/">Home</Link>
			</li>
			<li className="font-semibold">
				<Link to="/services">Services</Link>
			</li>
			<li className="font-semibold">
				<Link to="/blog">Blog</Link>
			</li>
			{user?.email ? (
				<>
					<li className="font-semibold">
						<button onClick={handleLogOut} className="btn-ghost">
							Sign Out
						</button>
					</li>
				</>
			) : (
				<li className="font-semibold">
					<Link to="/login">Login</Link>
				</li>
			)}
		</>
	);

    return (
			<div className="navbar h-20 mb-12 pt-12 bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							{menuItems}
						</ul>
					</div>
					<Link to="/" className="btn btn-ghost normal-case text-xl gap-2">
						<img src={logo} alt="" />
						<div className="mr-2 text-2xl font-bold text-orange-600">Doctor Service</div>
					</Link>
				</div>
				<div className="navbar-end hidden lg:flex">
					<ul className="menu menu-horizontal p-0">{menuItems}</ul>
				</div>
			</div>
		);
};

export default Header;