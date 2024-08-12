'use client'

import { useEffect, useState } from 'react'

export default function ApiTestPage() {
	const [name, setName] = useState('loading...')

	useEffect(() => {
		fetch('/api/whoAmI')
			.then((res) => res.json())
			.then((data) => setName(data.name))
			.catch(() => setName('Error loading name'))
	}, [])

	return (
		<div>
			<p>
				API route from <strong>Client</strong>
			</p>
			<p>Name: {name}</p>
		</div>
	)
}
