import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface Props {
    title: string,
    image: string
}

export const BlogThumbnail = ({title, image }: Props) => {
  return (
    
    <Link href={'/blogs/blog'} >
      <article className='slide-in-left w-full bg-beigeLight reveal-scroll cursor-pointer'>
        <Image src={image} width={200} height={200} alt='Image' layout='responsive'/>   
        <div className='p-5 slide-in-top'>
            <h2 className='text-lavazzaBlue text-left mb-5 md:text-lg'>{title}</h2>
            <span className='text-lavazzaBlue underline text-sm md:text-xl' >Read more</span>
        </div>
    </article>
    </Link>
  )
}
