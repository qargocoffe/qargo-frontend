import { Partner } from '@/interfaces'
import Image from 'next/image'
import React from 'react'

export default function PartnerSlide({ title, banner, description, logo }: Partner) {

    const urlBanner = banner!.data!.attributes.url;
    const urlLogo = logo!.data!.attributes.url;
    
  return (
    <div className='bg-beigeLight'>
        <figure className='w-auto h-auto'>
            <Image src={'http://localhost:1337' + urlBanner} 
            alt={title}
            layout='responsive'
            width={20}
            height={20}
            />
        </figure>
        <figure className='flex flex-col items-center'>
            <Image 
            className='p-5'
            src={'http://localhost:1337' + urlLogo} 
            alt={title}
            width={220}
            height={113}
            />
        </figure>
        <p className='p-5 text-center text-beige'>{description}</p>
    </div>
  )
}
