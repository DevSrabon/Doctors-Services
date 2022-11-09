import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';
import 'react-photo-view/dist/react-photo-view.css';
function App() {
	return (
		<div className="">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
