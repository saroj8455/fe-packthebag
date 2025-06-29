import { Outlet, Link, useLoaderData } from 'react-router-dom';
import Container from '../components/Container';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';
import axios from 'axios';

export async function loader() {
	// This is where you would fetch data for the root route if needed.
	// For this example, we are not fetching any data.
	console.log('Root loader called');
	// Simulate a delay to mimic data fetching
	// await new Promise((resolve) => setTimeout(resolve, 1000));
	const { data: contacts, status } = await axios.get(
		'https://jsonplaceholder.typicode.com/users'
	);
	if (status === 200) {
		// Assuming the API returns an array of contacts
		return { contacts }; // ✅ Return as object
	}
	return { contacts: [] }; // Optional: fallback
}

export default function Root() {
	const { contacts } = useLoaderData();
	console.log(contacts);

	return (
		<>
			<aside>
				<h1>React Router Contacts</h1>
				<Divider />
				<div className="flex gap-3 align-items-center">
					<form id="search-form" role="search">
						<div className="flex flex-column gap-2">
							<label htmlFor="username">Search contacts</label>
							<InputText
								id="username"
								aria-describedby="username-help"
								aria-label="Search contacts"
								placeholder="Search"
							/>
							<small id="username-help">
								Enter your username to reset your password.
							</small>
						</div>
						<div id="search-spinner" aria-hidden hidden={true} />
						<div className="sr-only" aria-live="polite"></div>
					</form>
					<form method="post">
						<Button
							type="submit"
							className="mt-1"
							label="New"
							icon="pi pi-check"
						/>
					</form>
				</div>
				<nav>
					{contacts && contacts.length > 0 ? (
						<ul>
							{contacts.map((contact) => (
								<li key={contact.id}>
									<Link to={`contacts/${contact.id}`}>
										{contact.name ? <>{contact.name}</> : <i>No Name</i>}{' '}
										{contact.favorite && <span>★</span>}
									</Link>
								</li>
							))}
						</ul>
					) : (
						<p>No contacts!</p>
					)}
				</nav>
			</aside>
			<main id="detail">
				<Outlet />
			</main>
		</>
	);
}
