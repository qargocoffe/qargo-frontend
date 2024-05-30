import Image from 'next/image'
import React from 'react'


interface Props {
    title: string,
    image: string
}

export const BlogThumbnail = ({title, image }: Props) => {
  return (
    
    <article className='slide-in-left w-full bg-beigeLight reveal-scroll'>
        <Image src={image} width={200} height={200} alt='Image' layout='responsive'/>   
        <div className='p-5 slide-in-top'>
            <h2 className='text-lavazzaBlue text-left mb-5'>{title}</h2>
            <a href='#' className='text-lavazzaBlue underline text-sm' >Read more</a>
        </div>
    </article>
  )
}
