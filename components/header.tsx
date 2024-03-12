import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'

const Brevia = localFont({src: "/fonts/Brevia-ExtraBlackItalic.otf"})
const textShadow = "drop-shadow-md [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black;]"

const Header = () => {
  return (
    <nav className="flex items-start justify-between relative container mx-auto h-[400px]">
        <div className="absolute -left-10 h-fit z-10">
            <Image
            src="/PEPE1.svg"
            alt="Picture of the author"
            width={300}
            height={300}
            quality={100}
            />
        </div>
        <div className={`w-full flex mt-12 pb-4 justify-end items-center gap-12 h-fit ${Brevia.className} text-2xl uppercase tracking-tight border-b-[3px] border-b-white`}>
            <ul className="flex items-center gap-12 py-10 ">
            <li className={`drop-shadow-md ${textShadow}`}>Home</li>
            <li className={`drop-shadow-md ${textShadow}`}>about</li>
            <li className={`drop-shadow-md ${textShadow}`}>chart</li>
            <li className={`drop-shadow-md ${textShadow}`}>telegram</li>
            </ul>
            <button className={`${textShadow} uppercase text-secondary border-[3px] rounded-full px-4 py-2 shadow-inner drop-shadow-md`}>
            buy now
            </button>
        </div>
    </nav>
  )
}

export default Header