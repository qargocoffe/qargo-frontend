import Image from 'next/image'
import React from 'react'


interface Props {
    image: string, title: string, description: string 
}

export const Descriptive = ({ image, title, description }: Props) => {
  return (
    <div>
        <section className='bg-beigeLight reveal-scroll md:flex items-center'>
            <Image src={image} className='mb-2' alt={title} width={30} height={30} layout='responsive' />
            <div className='p-6'>
                <h2 className='text-lavazzaBlue mb-5 text-xl md:text-2xl'>{title}</h2>
                <p className='text-left text-gray md:text-lg'>{description}</p>
            </div>
        </section>

    </div>
  )
}
