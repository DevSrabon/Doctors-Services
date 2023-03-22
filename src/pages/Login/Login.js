import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FcGoogle} from 'react-icons/fc'
const Login = () => {
	const { login, signInWithGoogle, setLoading , loading} = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const from = location.state?.from?.pathname || '/';
	const { user } = useContext(AuthContext)
	if(user?.email){
		return navigate(from, { replace: true })
	}
	const saveUser = (name, email) => {
		const user = { name, email };
		fetch(`https://doc-service-server.vercel.app/users`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {});
	};

	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		login(email, password)
			.then((result) => {
				const user = result.user;
				
				toast.success('Succesfull Login');
				form.reset();
				navigate(from, { replace: true });
			})
			.catch((err) => {
				alert(err);
			});
	};
	const handleGoogleLogin = () => {
		setError("");
		signInWithGoogle()
			.then((result) => {
				const user = result.user;
				saveUser(user.displayName, user.email);
				toast.success("Login Successful");
				navigate(from, { replace: true });
			})
			.catch((err) => {
				console.log(err);
				setError(err.message);
				setLoading(false);
			});
	};
	if (loading) {
		return (
			<div className="flex justify-center mt-16">
				<button className="btn loading">loading</button>
			</div>
		);
	}
	return (
		<div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 w-3/4 mx-auto my-20">
			<form className="space-y-6" onSubmit={handleLogin}>
				<h5 className="text-xl font-medium text-gray-900 dark:text-white">
					Sign in to our platform
				</h5>
				<div>
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						Your email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="name@company.com"
						required
					/>
				</div>
				<div>
					<label
						htmlFor="password"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						Your password
					</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="••••••••"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Login to your account
				</button>
				<div className="text-sm font-medium text-gray-500 dark:text-gray-300 pb-2.5">
					Not registered?{" "}
					<Link
						to="/signup"
						className="text-blue-700 hover:underline dark:text-blue-500">
						Create account
					</Link>
				</div>
			</form>
			<button
				onClick={handleGoogleLogin}
				disabled={loading}
				className="btn btn-outline w-full max-w-sm">
				<span><FcGoogle className='text-4xl'/></span>
				
			</button>
		</div>
	);
};

export default Login;
