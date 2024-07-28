import { ButtonCustomized } from '@/components/ui/button/ButtonCustomized'
import { Store } from '@/interfaces'
import Image from 'next/image'


export const Opened =({ telephone, title, direction, thumbnail }: Store) => {
  return (
    <div className="join join-vertical w-full">
             <div className="collapse collapse-arrow join-item ">
               <input type="radio" name="my-accordion-4" />
               <h2 className='collapse-title text-xl font-normal text-lavazzaBlue border-b-[0.1rem] border-beige slide-in-left'>{title}</h2>
               <div className="collapse-content p-0 md:flex items-center w-full lg:w-desktop">
               {thumbnail.url && (
                  <Image
                  src={process.env.DOMAIN_API  + thumbnail.url}
                  className="md:w-1/2"
                  height={100}
                  width={100}
                  layout="responsive"
                  alt="Main"
                />
                )}
                       <div className='md:w-1/2 p-6'>
                       <h2 className='flex items-start gap-6 mb-6 mt-5 px-6 text-2xl font-normal text-lavazzaBlue slide-in-left'>{title}</h2>
                          <article className='flex items-start gap-6 mb-6 mt-5 px-6'>
                            <Image src={'/logos/ubication.png'} width={30} height={20} alt='Phone' />
                            <p className='text-gray w-2/3'>
                              {direction}
                            </p>
                          </article>
                          <article className='flex items-center gap-6 px-6'>
                            <Image src={'/logos/phone.png'} width={26} height={20} alt='Phone' />
                            <a href='tel:9051290512' className='text-lavazzaBlue underline w-1/2'>
                            {telephone}
                            </a>
                          </article>
                          {/*Buttons  */}
                          <br />
                          <div className='flex items-left gap-3 px-6'>
                            
                          <ButtonCustomized
                                type="link"
                                url={'/contact'}
                                background={'bg-lavazzaBlue'}
                                fontColor={'text-white'}
                                title={'ORDER'}          />
                                <ButtonCustomized
                                type="link"
                                url={'/contact'}
                                background={'bg-lavazzaBlue'}
                                fontColor={'text-white'}
                                title={'LEARN MORE'}          />
                          </div>
                       </div>
                   </div>  
               
             </div>
           </div>
  )
}
