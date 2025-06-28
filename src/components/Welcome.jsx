import React from 'react';
import Container from './Container';
import { Button } from 'primereact/button';
export default function Welcome() {
	return (
		<Container>
			<h1>Redux toolkit crud + API</h1>

			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<Button label="Check" icon="pi pi-check" />
		</Container>
	);
}
