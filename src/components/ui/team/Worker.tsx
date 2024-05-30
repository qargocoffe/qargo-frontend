import Image from 'next/image'
import React from 'react'

interface Props {
  image: string
}

export const Worker = ({ image}: Props) => {
  return (
    <div className='w-1/3'>
        <Image src={image} width={200} height={200} alt='Image' layout='responsive'/>
    </div>
  )
}
