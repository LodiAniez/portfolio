import './../styles/global.css'
import type { AppProps } from 'next/app'
import AOS from "aos"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init()
	}, [])
	const link: string = "px-4 py-2 font-semibold rounded hover:text-black"
	const linkClass: (path: string) => string = (path: string) => {
		return router.pathname == path
			? `${link} text-black font-extrabold`
			: `${link} text-gray-400`
	}
	const router = useRouter()
	return (
		<>
			<header className="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl">
				<div className="flex items-center justify-between mx-auto max-w-7xl">
					<div>
						<span className="text-2xl font-extrabold text-blue-600">Aniez, Dexter Louie</span>
					</div>
					<div className="flex items-center space-x-1">
						<ul className="hidden space-x-2 md:inline-flex">
							<li><Link href={"/"}><a className={linkClass("/")}>Home</a></Link></li>
							<li><Link href={"/bio"}><a className={linkClass("/bio")}>Bio</a></Link></li>
							<li><Link href={"/experiences"}><a className={linkClass("/experiences")}>Experiences</a></Link></li>
							<li><Link href={"/about"}><a className={linkClass("/about")}>About Me</a></Link></li>
							<li><Link href={"/passion"}><a className={linkClass("/passion")}>My Passion</a></Link></li>
							<li><Link href={"/projects"}><a className={linkClass("/projects")}>Personal Projects</a></Link></li>
							<li><Link href={"/contact"}><a className={linkClass("/contact")}>Contact</a></Link></li>
						</ul>
						<div className="inline-flex md:hidden">
							<button className="flex-none px-2 ">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
									stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
								</svg>
								<span className="sr-only">Open Menu</span>
							</button>
						</div>
					</div>
				</div>
			</header>

			<section className="w-screen p-4 bg-gray-100">
				<div className="mx-auto font-sans">
					<Component {...pageProps} />
				</div>
			</section>
		</>
	)
}

export default MyApp
