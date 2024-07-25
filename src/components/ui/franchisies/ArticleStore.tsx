import { setLeftOrRightPosition } from '@/utils'
import clsx from 'clsx'
import Image from 'next/image'

interface Props {
    id:number,
    image: string,
    title: string,
    description: string
}


export const ArticleStore = ({ id, image, title, description}: Props) => {
  return (
    <div className={clsx('pb-6 lg:p-0 md:flex items-center bg-graySoft', {
      'flex-row-reverse': setLeftOrRightPosition(id) === true
    })}>
      
        <figure className="w-full md:w-1/2">
                <Image src={image} layout='responsive' width={300} height={200} alt={title} />  
        </figure>
        <div className='md:w-1/2'>
          <h3 className=' w-3/4 m-auto text-lavazzaBlue text-center py-6 tracking-widest uppercase font-semibold'>{title}</h3>
          <p className='text-gray text-center w-3/4 m-auto md:text-lg'>{description}</p>
        </div>
        
    </div>
  )
}
