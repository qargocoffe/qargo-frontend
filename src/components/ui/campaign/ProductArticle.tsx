import { setLeftOrRightPosition } from "@/utils"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"


interface Product {
    id:number,
    title: string,
    description: string,
    image: string,
}


interface ProductResponse {
  product: Product,
}

export const ProductArticle = ({ product }: ProductResponse) => {
  return (
    <article className="py-5 slide-in-right">
      
        <div className={
          clsx('flex justify-center items-center lg:flex-col ', {
            'flex-row-reverse ':  setLeftOrRightPosition(product.id) === true
          }) 
        }>
          
          <figure className="w-1/2 lg:w-full ">
                <Image src={product.image} alt={product.title} width={30} height={30} layout="responsive" className="lg:max-h-[350px]" />
            </figure>
          <div className="w-1/2 text-center lg:w-full">
            <h3 className="tracking-widest text-lavazzaBlue text-xl uppercase lg:text-xl ">{product.title}</h3>
            <p className="text-gray text-sm py-4 text-center lg:text-lg">
                {product.description}
                <Link href={'/'} className='text-center rounded-full bg-lavazzaBlue py-2 m-auto w-2/3 block mt-3  '>
                  <span className='font-semibold  text-sm text-white'>
                    ORDER HERE 
                  </span>
                </Link>
            </p>
          </div>
        </div>  
    </article>
    
  )
}
