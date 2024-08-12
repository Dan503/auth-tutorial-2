import { headers } from 'next/headers'

export default async function ApiFromServer() {
	const resp = await fetch('http://localhost:3000/api/whoAmI', {
		method: 'GET',
		// This is needed for the server to recognize that the user is logged in
		headers: headers(),
	}).then((res) => res.json())

	return (
		<div>
			<p>
				API route from <strong>server</strong>
			</p>
			<p>Name: {resp?.name}</p>
		</div>
	)
}
