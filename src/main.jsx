import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { PrimeReactProvider } from 'primereact/api';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx';
import ViewError from './ViewError.jsx';

const value = {
	ripple: true,
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ViewError />,
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<PrimeReactProvider value={value}>
			<RouterProvider router={router} />
		</PrimeReactProvider>
	</StrictMode>
);
