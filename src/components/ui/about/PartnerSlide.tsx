
import { setLeftOrRightPosition } from '@/utils'
import clsx from 'clsx'
import Image from 'next/image'

interface Props {
  id?:number,
  banner: string,
  imageDesktop?: string,
  title?: string,
  description: string
}

//export default function PartnerSlide({ title, banner, description, logo }: Partner) {
  export default function PartnerSlide({ id = 1, title, banner,imageDesktop, description}: Props) {

    // const urlBanner = banner!.data!.attributes.url;
    // const urlLogo = logo!.data!.attributes.url;
  return (
    <div className={
      clsx('bg-beigeLight reveal-scroll m-auto lg:flex', {
        'flex-row-reverse': setLeftOrRightPosition(id) === true
      })
    }>
        <figure className='lg:w-1/2'>
          <Image src={banner} alt="Partner" width={30} height={30} layout='responsive' className='md:hidden'/>
          {
            imageDesktop && (
              <Image src={imageDesktop} alt="Partners" width={30} height={30} layout='responsive' className='hidden md:block'/>
            )
          }
        </figure>
        <p className='lg:w-1/3 w-full px-5 py-9 text-center text-beige m-auto md:w-1/2 md:text-lg'>{description}
        </p>
        
    </div>
  )
}
