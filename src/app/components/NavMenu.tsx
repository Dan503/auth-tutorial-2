'use client'
import { usePathname } from 'next/navigation'
import { AuthButton } from './AuthButton'
import Link from 'next/link'
import s from './NavMenu.module.css'

export function NavMenu() {
	const pathname = usePathname()
	const checkIsCurrentPage = (comparisonPath: string) =>
		pathname === comparisonPath ? 'page' : undefined

	return (
		<nav className={s.nav}>
			<AuthButton />
			<hr />
			<ul>
				<li>
					<Link href="/" aria-current={checkIsCurrentPage('/')}>
						Home
					</Link>
				</li>
				<li>
					<Link
						href="/protected"
						aria-current={checkIsCurrentPage('/protected')}
					>
						Protected route
					</Link>
				</li>
				<li>
					<Link
						href="/serverAction"
						aria-current={checkIsCurrentPage('/serverAction')}
					>
						Server action route
					</Link>
				</li>
				<li>
					<Link
						href="/apiFromClient"
						aria-current={checkIsCurrentPage('/apiFromClient')}
					>
						API from client
					</Link>
				</li>
			</ul>
		</nav>
	)
}
