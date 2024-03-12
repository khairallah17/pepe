import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'

const Brevia = localFont({src: "/fonts/Brevia-ExtraBlackItalic.otf"})
const textShadow = "drop-shadow-md [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black;]"

const Header = () => {
  return (
    <nav className="flex items-start justify-between relative container mx-auto h-[400px]">
        <div className="absolute left-0 sm:-left-10 h-fit z-10">
            <Image
            src="/PEPE1.svg"
            alt="Picture of the author"
            width={0}
            height={0}
            quality={100}
            className='w-1/2 md:w-1/4 h-auto'
            />
        </div>
        <div className={`w-full flex mt-12 md:pb-4 pb-0 px-5 justify-end items-center gap-12 h-[180px] md:h-fit ${Brevia.className} text-2xl uppercase tracking-tight border-b-[3px] border-b-white`}>
            <ul className="flex items-center gap-12 py-10 md:flex relative z-[99]">
              <li className={`drop-shadow-md ${textShadow}`}>
                <Link href="https://twitter.com/Tlptoken" target="_blank">X</Link>
              </li>
              <li className={`drop-shadow-md ${textShadow}`}>
                <Link href="https://t.me/thelastpepejoin" target="_blank">telegram</Link>
              </li>
            </ul>
            {/* <Link className={`${textShadow} uppercase text-secondary border-[3px] rounded-full px-4 py-2 shadow-inner drop-shadow-md`} href="https://t.me/thelastpepejoin" target="_blank">BUy NOW</Link> */}
        </div>
    </nav>
  )
}

export default Header