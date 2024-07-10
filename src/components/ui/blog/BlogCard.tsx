import { Blog } from '@/interfaces/blog/blog.interface'
import { ButtonCustomized } from '../button/ButtonCustomized'
import Image from 'next/image'


export const BlogCard = ({title , description, content, slug, thumbnail}: Blog) => {
  return (
    <div className='w-full md:flex items-center text-center min-h-[600px] md:min-h-[400px] h-auto' >
        <div className='relative md:w-1/2 md:h-full'>
            <h3 className='absolute bg-lavazzaBlue text-white rounded p-1'>Latest News</h3>
            <figure className='md:hidden'>
                <Image width={30} height={30} alt={title} layout='responsive' src={'/blog/default.png'} />
            </figure>
        </div>
        <div className='p-7 md:w-1/3 m-auto md:h-full'>
            <h2 className='text-2xl mt-4 text-lavazzaBlue md:text-3xl'>{title}</h2>
            <p className='mt-4 md:text-xl text-gray'>{description}</p>
            <ButtonCustomized
        type='link'
        key={title}
        url={slug}
        background={'bg-lavazzaBlue'}
        fontColor={'text-white'}
        title={'VIEW MORE'}          />

        {/**CUstom */}

        <div className='swiper-button-prev-custom'></div>
        <div className='swiper-button-next-custom'></div>
        <div className="swiper-pagination-custom"></div>
        </div>
    </div>
  )
}
