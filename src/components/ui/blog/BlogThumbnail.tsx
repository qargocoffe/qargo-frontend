import { Blog } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'

export const BlogThumbnail = ({title, thumbnail }: Blog) => {
  return (
  
    <Link href={'/blogs/blog'} >
      <article className='slide-in-left w-full bg-beigeLight reveal-scroll cursor-pointer'>
        <Image src={process.env.DOMAIN_API  + thumbnail.url} 
            width={200} 
            height={200} 
            className='!min-h-[250px]'
            alt='Image' 
            layout='responsive' />   
        <div className='p-5 slide-in-top'>
            <h2 className='text-lavazzaBlue text-left mb-5 md:text-lg'>{title}</h2>
            <span className='text-lavazzaBlue underline text-sm md:text-xl' >Read more</span>
        </div>
    </article>
    </Link>
  )
}
