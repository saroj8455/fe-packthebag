import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { PrimeReactProvider } from 'primereact/api';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, { loader as rootLoader } from './routes/Root.jsx';
import ViewError from './ViewError.jsx';
import Index from './routes/Index.jsx';
import ContactProfile, {
	loader as contactLoader,
} from './pages/ContactProfile.jsx';

const value = {
	ripple: true,
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		loader: rootLoader,
		errorElement: <ViewError />,
		children: [
			{ index: true, element: <Index /> },
			{
				path: 'contact/:contactId',
				element: <ContactProfile />,
				loader: contactLoader,
				errorElement: <ViewError />,
				shouldRevalidate: ({ currentParams, nextParams }) => {
					return currentParams.contactId !== nextParams.contactId;
				},
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<PrimeReactProvider value={value}>
			<RouterProvider router={router} />
		</PrimeReactProvider>
	</StrictMode>
);
