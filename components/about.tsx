import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'

const Brevia = localFont({src: "/fonts/Brevia-ExtraBlackItalic.otf"})
const chalk = localFont({src: "/fonts/ChalkboardSE-Regular.woff2"})
const textShadow = "drop-shadow-md [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black;]"

const About = () => {
    return (
    <div className='container mx-auto py-20 flex items-start flex-wrap'>
        <div className='flex gap-4 flex-col w-full px-5'>
            <h1 className={`${Brevia.className} uppercase self-start text-[100px] md:text-[125px] text-secondary ${textShadow} drop-shadow-xl`}>
                about
            </h1>
            <p className={`${chalk.className} lg:text-[37px] sm:text-[30px] text-lg leading-tight mb-10`}>
                At &apos;The Last Pepe,&apos; we believe in the power of memes to connect people and create communities. Our coin celebrates the irreverent humor and creativity of meme enthusiasts everywhere, offering a unique opportunity to participate in a playful and vibrant digital ecosystem.
            </p>
            <p className={`${chalk.className} lg:text-[37px] sm:text-[30px] text-lg leading-tight`}>
                With &apos;The Last Pepe&apos; coin, you not only join a thriving community of like-minded individuals but also become part of a movement that embraces the spirit of internet culture. Whether you&apos;re a seasoned crypto investor or new to the world of digital currencies, &apos;The Last Pepe&apos; offers an exciting and accessible entry point into the world of meme-based cryptocurrencies.
            </p>
        </div>
        <div>
            <Image
                src="/PEPE3.svg"
                width={800}
                height={800}
                alt=''
                className='drop-shadow-xl'
            />
        </div>
    </div>
    )
}

export default About