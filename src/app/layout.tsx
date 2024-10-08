import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './components/Providers'
import { getServerSession } from 'next-auth'
import { NavMenu } from './components/NavMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const authSession = await getServerSession()
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers authSession={authSession}>
					<NavMenu />
					{children}
				</Providers>
			</body>
		</html>
	)
}
