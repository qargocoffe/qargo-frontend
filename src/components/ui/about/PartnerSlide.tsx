
import Image from 'next/image'

interface Props {
  banner: string,
  title?: string,
  description: string
}

//export default function PartnerSlide({ title, banner, description, logo }: Partner) {
  export default function PartnerSlide({ title, banner, description}: Props) {

    // const urlBanner = banner!.data!.attributes.url;
    // const urlLogo = logo!.data!.attributes.url;
    
  return (
    <div className='bg-beigeLight reveal-scroll md:flex items-center justify-center'>
        <figure>
          <Image src={banner} alt="Partner" width={30} height={30} layout='responsive'/>
        </figure>
        <p className='px-5 py-9 text-center text-beige'>{description}</p>
    </div>
  )
}
