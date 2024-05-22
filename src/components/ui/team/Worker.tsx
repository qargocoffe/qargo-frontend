import Image from 'next/image'
import React from 'react'

export const Worker = () => {
  return (
    <div className='w-1/3'>
        <Image src={'/team/alba.png'} width={200} height={200} alt='Image' layout='responsive'/>
    </div>
  )
}
