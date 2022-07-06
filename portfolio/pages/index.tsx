import type { NextPage } from 'next'
import Head from 'next/head'
import { IGospel, ISupportingVerses } from './../models/index'

const Home: NextPage = () => {
	/**
	 * 
	 * Note: If `imagePosition` is not set, hide the image from the display
	 */
	const gospelItems: IGospel[] = [
		{
			description: "We are appointed to die one day, we don't know when.",
			verses: [
				{
					text: "And as it is appointed unto men once to die, but after this the judgment:",
					verse: "Hebrews 9:27 KJV"
				}
			],
			imagePath: "/cemetery.jpg",
			imageAlt: "image of a cemetery",
			imagePosition: "left"
		},
		{
			description: "No one is perfect, EVERYONE is a sinner, no one is exempted.",
			verses: [
				{
					text: "For all have sinned, and come short of the glory of God;",
					verse: "Romans 3:23 KJV"
				}
			],
			imagePath: "/sin.png",
			imageAlt: "sinner image",
			imagePosition: "left"
		},
		{
			description: "The main reason why we die is because we have sinned against God.",
			verses: [
				{
					text: "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.",
					verse: "Romans 6:23 KJV"
				}
			],
			imagePath: "/punishment.png",
			imageAlt: "punishment image",
			imagePosition: "left"
		},
		{
			description: "The bible talks about second death, and it will be in hell, that's the place of punishment for sinners.",
			verses: [
				{
					text: " And death and hell were cast into the lake of fire. This is the second death.",
					verse: "Revelation 20:14 KJV"
				}
			],
			imagePath: "/hell.jfif",
			imageAlt: "hell image",
			imagePosition: "left"
		},
		{
			description: "The bible talks about second death, and it will be in hell, that's the place of punishment for sinners.",
			verses: [
				{
					text: " And death and hell were cast into the lake of fire. This is the second death.",
					verse: "Revelation 20:14 KJV"
				}
			],
			imagePath: "/hell.jfif",
			imageAlt: "hell image",
			imagePosition: "left"
		}
	]

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Dexter Louie Aniez Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/** Start main wrapper */}
			<div className='h-full flex flex-col'>
				{/** Top verse section */}
				<div className="w-full flex items-center justify-center">
					<div
						className="
							flex
							flex-col
							items-center
							justify-center
							p-6
							max-w-screen-xl
							rounded-lg 
							py-10
							border-b
							border-t
						"
					>
						<h5
							className="
								mb-2 
								text-2xl 
								font-bold 
								tracking-tight 
								text-gray-900 
								italic 
								text-center
							"
						>
							"(For he saith, I have heard thee in a time accepted, and in the day of salvation have I succoured thee: behold, now is the accepted time; behold, now is the day of salvation.)"
						</h5>
						<p className="text-gray-700 font-semibold">2 Corinthians 6:2 KJV</p>
					</div>
				</div>

				{/** Intro section */}
				<div className='w-full flex flex-col items-center justify-center mt-5 px-60'>
					{
						gospelItems.map((item: IGospel, index: number) => (
							<div
								key={index}
								className={`
									flex 
									flex-col 
									items-center 
									bg-white 
									rounded-lg 
									border 
									shadow-md 
									md:flex-row 
									md:max-w-screen-lg 
									dark:border-gray-700 
									dark:bg-gray-800
									${index !== gospelItems.length - 1 ? 'mb-3' : ''}
								`}
							>
								{
									item.imagePosition && item.imagePosition === "left"
										? <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-64 md:rounded-none md:rounded-l-lg" src={item.imagePath} alt={item.imageAlt} />
										: null
								}
								<div className="flex flex-col justify-between p-4 leading-normal">
									<h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.description}</h5>

									{/** This should be an array of supporting verses */}
									{
										item.verses.map((verses: ISupportingVerses, index: number) => (
											<div
												key={`supporting-verse-${index}`}
												className={index !== item.verses.length - 1 ? 'mb-2' : ''}
											>
												<p className="mb-1 font-normal text-gray-700 dark:text-gray-400 italic">"{verses.text}"</p>
												<p className="mb-3 text-gray-700 dark:text-gray-400 font-semibold">{verses.verse}</p>
											</div>
										))
									}
								</div>
								{
									item.imagePosition && item.imagePosition === "right"
										? <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-64 md:rounded-none md:rounded-l-lg" src={item.imagePath} alt={item.imageAlt} />
										: null
								}
							</div>
						))
					}
				</div>
			</div>
			{/** End main wrapper */}
		</div>
	)
}

export default Home
