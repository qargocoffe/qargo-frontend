import Image from 'next/image'
import React from 'react'

export const Breadcrumb = () => {
  return (
    <div className='flex gap-4 items-center p-5 slide-in-left'>
        <figure className=''>
            <Image src={'/logos/arrow-left.png'}
                                width={10}
                                alt="Arrow down"
                                height={11}/>
        </figure>
        <p className='text-lavazzaBlue tracking-wider'>BACK TO OUR MENU</p>
    </div>
  )
}
