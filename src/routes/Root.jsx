import { Outlet } from 'react-router-dom';
import Container from '../components/Container';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';

export default function Root() {
	return (
		<>
			<Container>
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
						<ul>
							<li>
								<a href={`/contacts/1`}>Your Name</a>
							</li>
							<li>
								<a href={`/contacts/2`}>Your Friend</a>
							</li>
						</ul>
					</nav>
				</aside>
				<main id="detail">
					<Outlet />
				</main>
			</Container>
		</>
	);
}
