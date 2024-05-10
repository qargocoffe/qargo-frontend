import { Blog } from '@/interfaces/blog/blog.interface'
import { ButtonCustomized } from '../button/ButtonCustomized'


export const BlogCard = ({title , description, content, slug, thumbnail}: Blog) => {
  return (
    <div className='min-h-[460px] mt-9 w-full bg-beigeLight text-center' >
        <div className='relative'>
            <h3 className='absolute bg-lavazzaBlue text-white rounded p-1'>Latest News</h3>
            <img src={'http://localhost:1337/uploads/Blog_0004_Colorado_41de49dd8f.jpg'} />
              
        </div>
        <div className='p-7'>
            <h2 className='text-xl mt-4 text-lavazzaBlue'>{title}</h2>
            <p className='mt-4 text-gray'>{description}</p>
        </div>
        <ButtonCustomized
        type='link'
        key={title}
        url={slug}
        background={'bg-lavazzaBlue'}
        fontColor={'text-white'}
        title={'VIEW MORE'}          />
    </div>
  )
}
