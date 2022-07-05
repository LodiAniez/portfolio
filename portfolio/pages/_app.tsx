import './../styles/global.css'
import type { AppProps } from 'next/app'
import Link from "next/link"

function MyApp({ Component, pageProps }: AppProps) {
	const linkClass: string = "px-4 py-2 font-semibold text-gray-600 rounded hover:text-black hover:underline"
	return (
		<>
			<header className="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl">
				<div className="flex items-center justify-between mx-auto max-w-7xl">
					<div>
						<span className="text-2xl font-extrabold text-blue-600">Aniez, Dexter Louie</span>
					</div>
					<div className="flex items-center space-x-1">
						<ul className="hidden space-x-2 md:inline-flex">
							<li><Link href={"/"}><a className={linkClass}>Home</a></Link></li>
							<li><Link href={"/bio"}><a className={linkClass}>Bio</a></Link></li>
							<li><Link href={"/experiences"}><a className={linkClass}>Experiences</a></Link></li>
							<li><Link href={"/about"}><a className={linkClass}>About Me</a></Link></li>
							<li><Link href={"/passion"}><a className={linkClass}>My Passion</a></Link></li>
							<li><Link href={"/projects"}><a className={linkClass}>Personal Projects</a></Link></li>
							<li><Link href={"/contact"}><a className={linkClass}>Contact</a></Link></li>
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

			<section className="p-4 mx-auto max-w-7xl">
				<div className="mx-auto font-sans">
					<div className="bg-gray-100">
						<Component {...pageProps} />
					</div>
				</div>
			</section>
		</>
	)
}

export default MyApp
