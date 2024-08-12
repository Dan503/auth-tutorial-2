'use client'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

interface Props {
	authSession: Session | null
	children: ReactNode
}

export function Providers({ children, authSession }: Props) {
	return <SessionProvider session={authSession}>{children}</SessionProvider>
}
