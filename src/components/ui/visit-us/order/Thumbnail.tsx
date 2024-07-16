import Image from "next/image"
import Link from "next/link"


interface Props {
    title: string,
    subtitle: string,
    image: string,
    
}
export const Thumbnail = ( {title, subtitle, image}: Props) => {
  return (
    <article className='w-full reveal-scroll transition-transform duration-300 ease-in-out transform hover:scale-110 slide-in-right'>
        <Link href={'/stores/tampa'} >
          <Image src={image} width={200} height={200} alt='Image' layout='responsive'/>   
          <div className='p-5 slide-in-top text-center'>
              <h2 className='text-lavazzaBlue'>{title}</h2>
              <p className="text-lavazzaBlue">{subtitle}</p>
          </div>
        </Link>
    </article>
  )
}
