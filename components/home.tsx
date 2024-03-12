import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'

const Brevia = localFont({src: "/fonts/Brevia-ExtraBlackItalic.otf"})
const chalk = localFont({src: "/fonts/ChalkboardSE-Regular.woff2"})
const textShadow = "drop-shadow-md [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black;]"

const Home = () => {
  return (
    <div className="relative pb-52 flex flex-col items-center border-b-[3px] border-white">
        <div className='flex items-center flex-col w-fit container mx-auto md:px-0 px-10'>
            <h1 className={`${Brevia.className} self-start text-[100px] md:text-[125px] text-secondary ${textShadow} drop-shadow-md`}>
                $TLP
            </h1>
            <p className={`${chalk.className} lg:text-[37px] sm:text-[30px] text-lg leading-tight md:max-w-[850px]`}>
                    The Last Pepe&quot; is a digital phenomenon. Born out of the internet&apos;s love for Pepe the Frog and the meme culture that surrounds it, &quot;The Last Pepe&quot; coin is a fun and innovative project with a mission to make memes great again.
            </p>
        </div>
        <Image
            src="/homeBg.png"
            alt="tlp background"
            width={800}
            height={800}
            className="absolute opacity-45 right-0 md:-top-[215px] -top-[170px]"
            quality={100}
        />
    </div>
  )
}

export default Home