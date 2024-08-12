'use client'
import { useState } from 'react'
import { whoAmI } from './whoAmI'

export function WhoAmIButton() {
	const [name, setName] = useState<string>()

	return (
		<div>
			<button
				onClick={async () => {
					setName(await whoAmI())
				}}
			>
				Who am I?
			</button>
			{name && <p>You are {name}</p>}
		</div>
	)
}
