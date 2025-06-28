import React from 'react';
import { useRouteError } from 'react-router-dom';
import Container from './components/Container';

export default function ViewError() {
	const error = useRouteError();
	return (
		<Container>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</Container>
	);
}
