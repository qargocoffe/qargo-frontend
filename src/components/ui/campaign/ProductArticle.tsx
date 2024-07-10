import Image from "next/image"
import Link from "next/link"


interface Props {
    title: string,
    description: string,
    image: string,
}

export const ProductArticle = ({ title, description, image}: Props) => {
  return (
    <article className="py-5 slide-in-right">
        <h3 className="tracking-widest text-center text-lavazzaBlue text-xl uppercase py-3">{title}</h3>
        <div className="flex justify-center items-end">
            <figure className="w-2/3">
                <Image src={image} alt={title} width={30} height={30} layout="responsive" />
            </figure>
            <p className="text-gray text-sm w-2/3 relative right-8 text-center">
                {description}
                <Link href={'/'} className='text-center rounded-full bg-lavazzaBlue py-2 m-auto w-2/3 block mt-3'>
                  <span className='font-semibold  text-sm text-white'>
                    ORDER HERE
                  </span>
                </Link>
            </p>
            
        </div>  
    </article>
    
  )
}
