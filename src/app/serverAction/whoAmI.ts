'use server'
import { getServerSession } from 'next-auth'

export async function whoAmI() {
	const session = await getServerSession()
	return session?.user?.name || '... No idea, log in first!'
}
