import { Partner } from '@/interfaces'
import Image from 'next/image'
import React from 'react'

//export default function PartnerSlide({ title, banner, description, logo }: Partner) {
  export default function PartnerSlide({ title, banner, description, logo }: any) {

    // const urlBanner = banner!.data!.attributes.url;
    // const urlLogo = logo!.data!.attributes.url;
    
  return (
    <div className='bg-beigeLight'>
        <figure className='w-auto h-auto'>
            {/* <Image src={'http://localhost:1337' + banner} 
            alt={title}
            layout='responsive'
            width={20}
            height={20}
            /> */}

          <img src={banner} 
          className='max-h-[300px] '
            alt={title}
            />
        </figure>
        <figure className='flex flex-col items-center w-full text-center'>
            {/* <Image 
            className='p-5'
            src={'http://localhost:1337' + logo} 
            alt={title}
            width={220}
            height={113}
            /> */}
             <img 
        
            className='p-5 max-w-[200px]'
            src={logo} 
            alt={title}
            />
        </figure>
        <p className='p-5 text-center text-beige'>{description}</p>
    </div>
  )
}
