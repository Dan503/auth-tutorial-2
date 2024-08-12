import { getServerSession } from 'next-auth'
import { WhoAmIButton } from './WhoAmIButton'

export default async function ServerActionPage() {
	async function whoAmI() {
		'use server'
		const session = await getServerSession()
		return session?.user?.name || '... No idea, log in first!'
	}

	return (
		<div>
			<WhoAmIButton whoAmIAction={whoAmI} />
		</div>
	)
}
