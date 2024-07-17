import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Product {
    id:number,
    description: string,
    image: string,
}


interface ProductResponse {
  product: Product,
}


export const ProductArticleSummer = ({ product }: ProductResponse) => {
  return (
    <article className="slide-in-right">
            <figure className="w-full ">
                <Image src={product.image} alt={product.description} width={30} height={30} layout="responsive"  />
            </figure>
        
          <div className="w-full">
            <p className="text-gray text-sm py-4 text-center lg:text-lg">
                {product.description}
                <Link href={'/'} className='text-center rounded-full bg-lavazzaBlue py-2 m-auto w-1/3 lg:w-1/2 block mt-3  '>
                  <span className='font-semibold  text-sm text-white'>
                    ORDER HERE 
                  </span>
                </Link>
            </p>
          </div>
        
    </article>
  )
}
