import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='overflow-hidden border-t-[3px] border-white pt-10 h-[800px] relative'>
      <div className='container mx-auto flex flex-col items-center '>
        <Image
          src="/PEPE2.svg"
          width={0}
          height={0}
          alt=''
          className='w-1/4 h-auto rotate-[10deg]'
        />
        <div className='flex items-center gap-20'>
          <Link href="https://t.me/thelastpepejoin" target='_blank'>
            <Image
              src="/TELEGRAM.svg"
              width={0}
              height={0}
              alt=''
              className='w-32 h-auto'
            />
          </Link>
          <Link href="https://twitter.com/Tlptoken" target='_blank'>
            <Image
              src="/DEX.svg"
              width={0}
              height={0}
              alt=''
              className='w-32 h-auto'
            />
          </Link>
        </div>
        <Image
          src="/SPEECH.svg"
          width={0}
          height={0}
          alt=''
          className='w-1/3 h-auto mt-10 ml-32'
        />
        <Image
          src="/PEPEFOOTER.svg"
          alt=''
          height={0}
          width={0}
          className='-left-20 top-64 opacity-45 w-auto h-auto absolute'
        />
      </div>
    </div>
  )
}

export default Footer