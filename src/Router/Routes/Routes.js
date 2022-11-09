import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main/Main';
import AllServices from '../../pages/AllServices/AllServices';
import Details from '../../pages/Details/Details';
import Home from '../../pages/Home/Home';



const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/services',
				element: <AllServices></AllServices>,
			},
			{
				path: '/services/:id',
				element: <Details></Details>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/services/${params.id}`),
			},
		],
	},
]);
export default router;