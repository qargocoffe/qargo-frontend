import Image from 'next/image'
import React from 'react'



interface Props {
    direction?: boolean,
    image: string,
    title: string,
    description: string
}

export const Article = ({ direction = false, image, title, description}: Props) => {
  return (
    <div>
        { direction ? (
          <article className="reveal-scroll flex items-center justify-between gap-5 mb-12">
              <figure className="w-1/3">
                  <Image src={image} width={300} height={200} alt={title} />  
              </figure>
              
              <div className="text-left w-2/3">
                  <h3 className="text-lavazzaBlue uppercase font-semibold tracking-widest">
                  {title}
                  </h3>
                  <p className="text-gray mt-6">
                      {description}
                  </p>
              </div>
        </article>
        ) : (
          <article className="reveal-scroll flex items-center justify-between gap-5 mb-12">
              <div className="text-left w-2/3">
                  <h3 className="text-lavazzaBlue uppercase font-semibold tracking-widest">
                  {title}
                  </h3>
                  <p className="text-gray mt-6">
                      {description}
                  </p>
              </div>
              <figure className="w-1/3">
                  <Image src={image} width={300} height={200} alt={title} />  
              </figure>
          </article>
        )}
    </div>
  )
}
