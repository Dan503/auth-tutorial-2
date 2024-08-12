'use client'
import { useState } from 'react'

interface Props {
	whoAmIAction: () => Promise<string>
}

export function WhoAmIButton({ whoAmIAction }: Props) {
	const [name, setName] = useState<string>()

	return (
		<div>
			<button
				onClick={async () => {
					setName(await whoAmIAction())
				}}
			>
				Who am I?
			</button>
			{name && <p>You are {name}</p>}
		</div>
	)
}
