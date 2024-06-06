import Image from "next/image"
import Link from "next/link"


interface Props {
    title: string,
    image: string,
    url: string,
}


export const ProductItem = ({title, url, image}: Props) => {
  return (
    <Link href={'/product/1'} >
      <div className=" py-3 grid gap-1 justify-items-center items-center grid-cols-3">
              <Image src={image}
                                      width={65}
                                      
                                      alt="Image"
                                      height={11}/>

              <span className="block text-lavazzaBlue font-semibold tracking-wider uppercase w-full">{title}</span>

              <Image src={'/logos/arrow-right.png'}
                                      width={10}
                                      className="justify-self-end"
                                      alt="Arrow down"
                                      height={11}/>
          </div>
    </Link>
  )
}
