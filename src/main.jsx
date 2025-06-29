import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { PrimeReactProvider } from 'primereact/api';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, { loader as rootLoader } from './routes/Root.jsx';
import ViewError from './ViewError.jsx';
import Index from './routes/Index.jsx';

const value = {
	ripple: true,
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		loader: rootLoader,
		errorElement: <ViewError />,
		children: [{ index: true, element: <Index /> }],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<PrimeReactProvider value={value}>
			<RouterProvider router={router} />
		</PrimeReactProvider>
	</StrictMode>
);
