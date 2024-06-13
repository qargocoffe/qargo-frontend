import Image from 'next/image'



interface Props {
    image: string,
    title: string,
    description: string
}


export const ArticleStore = ({ image, title, description}: Props) => {
  return (
    <div className='mb-6'>
        <figure className="w-full">
                <Image src={image} layout='responsive' width={300} height={200} alt={title} />  
        </figure>
        <h3 className=' w-3/4 m-auto text-lavazzaBlue text-center py-6 tracking-widest uppercase font-semibold'>{title}</h3>
        <p className='text-gray text-center w-3/4 m-auto'>{description}</p>
    </div>
  )
}
