import Image from 'next/image'
import Link from 'next/link'

interface Drink {
    title: string,
    description: string,
    image: string
}

export const DrinkItem= ({title, description, image}: Drink) => {
  return (
    <article className='flex flex-row justify-center items-center text-center lg:flex-col lg:gap-20 '>
    <figure className='my-2 w-1/2 lg:w-full transition-transform duration-300 ease-in-out transform hover:scale-110 '>
      <Image src={image} layout='responsive' width={60} height={60} alt={title}   />
    </figure>
    <div className='w-1/2 text-left tracking-widest lg:w-full lg:text-center'>
      <h3 className='text-lavazzaBlue mb-3 font-semibold'>{title}</h3>
      <p className='text-gray lg:text-center'>{description}</p>
      <Link href={'/'} className='text-center rounded-full bg-lavazzaBlue py-2 w-2/3 block mt-3 lg:m-auto lg:mt-6'>
        <span className='font-semibold text-sm text-white lg:w-m-auto'>
          ORDER HERE
        </span>
      </Link>
    </div>
  </article>
  )
}


