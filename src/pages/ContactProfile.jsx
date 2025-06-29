import axios from 'axios';
import React from 'react';
import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import { Divider } from 'primereact/divider';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
	const { data: contact, status } = await axios.get(
		`https://jsonplaceholder.typicode.com/users/${params.contactId}`
	);
	if (status === 200) {
		// Assuming the API returns an array of contacts
		return { contact }; // ✅ Return as object
	}
	return { contact: null }; // Optional: fallback
}

export default function ContactProfile() {
	const { contact } = useLoaderData();
	const { name, username, email, phone, website, address, company } = contact;

	return (
		<Card
			title={name}
			subTitle={`@${username}`}
			className="shadow-2 surface-card p-4 border-round w-full "
		>
			<div className="flex align-items-center gap-3 mb-3">
				<Avatar label={name.charAt(0)} size="large" shape="circle" />
				<div className="flex flex-column">
					<span className="text-xl font-semibold">{name}</span>
					<span className="text-sm text-color-secondary">{email}</span>
				</div>
			</div>

			<Divider />

			<div className="mb-3">
				<h4 className="text-900">Contact Info</h4>
				<p>
					<i className="pi pi-phone mr-2"></i>
					{phone}
				</p>
				<p>
					<i className="pi pi-globe mr-2"></i>
					{website}
				</p>
			</div>

			<Divider />

			<div className="mb-3">
				<h4 className="text-900">Address</h4>
				<p>
					{address.street}, {address.suite}
					<br />
					{address.city} - {address.zipcode}
				</p>
				<Tag severity="info" className="mt-2">
					Lat: {address.geo.lat}, Lng: {address.geo.lng}
				</Tag>
			</div>

			<Divider />

			<div className="mb-3">
				<h4 className="text-900">Company</h4>
				<p className="font-semibold">{company.name}</p>
				<p className="italic text-color-secondary">"{company.catchPhrase}"</p>
				<small className="text-sm text-color-secondary">{company.bs}</small>
			</div>

			<Divider />

			<Button
				label="Send Email"
				icon="pi pi-envelope"
				severity="primary"
				className="w-full"
			/>
		</Card>
	);
}
