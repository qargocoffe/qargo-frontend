import Image from 'next/image'
import { ButtonCustomized } from '../../button/ButtonCustomized'


interface Props {
  isOpen: boolean,
  title: string
}

export const StoreCollapse = ({ isOpen, title }): Props => {
  return (
    <div className='slide-in-left reveal-scroll'>
            {
              isOpen && (
                <label>
                  <input className="peer/showLabel absolute scale-0 w-100" type="checkbox" />
                    <Image src='/blog/default.png' height={100} width={100}
                    layout='responsive' alt='Main' className='transition-all duration-1000 mb-4 hidden peer-checked/showLabel:block ' />

                    <div className="block max-h-16 w-full overflow-hidden rounded-lg py-0 transition-all duration-300 peer-checked/showLabel:max-h-96">
                    <div className="flex w-full justify-between px-5 h-14 cursor-pointer items-center">
                        <h2 className='text-xl font-normal text-lavazzaBlue'>{title}</h2>
                        <Image src={'/logos/arrow-down.png'}
                                width={20}
                                alt="Arrow down"
                                height={11}/>

                        <Image src={'/menu/blue/close.png'}
                                width={20}
                                alt="Arrow down"
                                className='hidden peer/showLabel:block'
                                height={11}/>
                    </div>
                    {/*Direction and phone number of store */}
                    <div className='px-6'>
                        <article className='flex items-start gap-6 mb-6 mt-5'>
                          <Image src={'/logos/ubication.png'} width={30} height={20} alt='Phone' />
                          <p className='text-gray w-2/3'>
                            707 E Ocean Blvd. Unit B-106,Long Beach, CA 90802
                          </p>
                        </article>
                        <article className='flex items-center gap-6'>
                          <Image src={'/logos/phone.png'} width={26} height={20} alt='Phone' />
                          <a href='tel:9051290512' className='text-lavazzaBlue underline w-1/2'>
                          (562)-733-8300
                          </a>
                        </article>
                        {/*Buttons  */}
                        <br />
                        <div className='flex items-left gap-3'>
                          
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
                    </div>                  </div>
                    <hr className='text-beige' />
                </label>
              )
            }

            {
              !isOpen && (
                <label>
                  <input className="peer/showLabel absolute scale-0 w-100" type="checkbox" />
                  <Image src='/blog/open-soon.png' 
                    height={100} width={100}
                    layout='responsive' 
                    alt='Main' 
                    className='transition-all duration-300 mb-4 hidden peer-checked/showLabel:block' />
                  <div className="block mt-2 max-h-16 w-full overflow-hidden rounded-lg py-0 transition-all duration-300 peer-checked/showLabel:max-h-96">
                  <div className="flex w-full justify-between px-5 h-14 cursor-pointer items-center">
                      
                      <h2 className='text-xl font-normal text-beige'>
                      <span className='block text-beige font-light text-sm'>OPEN SOON</span>
                        {title}</h2>
                      <Image src={'/logos/arrow-down.png'}
                              width={20}
                              alt="Arrow down"
                              height={11}/>

                      <Image src={'/menu/blue/close.png'}
                              width={20}
                              alt="Arrow down"
                              className='hidden peer/showLabel:block'
                              height={11}/>
                  </div>
                  {/*Direction and phone number of store */}
                  <div className='px-6'>
                      <article className='flex items-start gap-6 mb-6 mt-5'>
                        <Image src={'/logos/ubication.png'} width={30} height={20} alt='Phone' />
                        <p className='text-gray w-2/3'>
                          707 E Ocean Blvd. Unit B-106,Long Beach, CA 90802
                        </p>
                      </article>
                  </div>                  </div>
                  <hr className='text-beige' />
              </label>
              )
            }
    </div>
  )
}
