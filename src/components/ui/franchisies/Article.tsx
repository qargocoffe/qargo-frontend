import { setLeftOrRightPosition } from '@/utils'
import { clsx } from 'clsx'
import Image from 'next/image'
import React from 'react'


interface article {
    id:number,
    title:string,
    imageDesktop: string,
    description: string,
    image: string,
  }
  
  
  interface articleResponse {
    article: article,
  }
  

export const Article =  ({ article }: articleResponse) => {
  return (
    <div>
       <article className={clsx('reveal-scroll flex items-center flex-row justify-between gap-5 mb:gap-12 mb-12', {
            'flex-row-reverse': setLeftOrRightPosition(article.id) === true
       })}>
              <figure className="w-1/3 md:w-1/2">
                  <Image src={article.image} width={300} height={200} alt={article.title} className='md:hidden' />  
                  <Image src={article.imageDesktop} width={300} height={200} alt={article.title} className='hidden md:block w-full' />  
              </figure>
              
              <div className="text-left w-2/3 md:w-1/2">
                  <h3 className="text-lavazzaBlue uppercase font-semibold tracking-widest">
                  {article.title}
                  </h3>
                  <p className="text-gray mt-6">
                      {article.description}
                  </p>
              </div>
        </article>
        
    </div>
  )
}
