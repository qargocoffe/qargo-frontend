import Image from 'next/image'
import React from 'react'

export const StoreCollapse = () => {
  return (
    <div>
            <label>
                  <input className="peer/showLabel absolute scale-0 w-100" type="checkbox" />
                  <img src='/blog/default.png' className='transition-all duration-300 hidden peer-checked/showLabel:block ' />

                  <div className="block max-h-14 w-full overflow-hidden rounded-lg py-0 transition-all duration-300 peer-checked/showLabel:max-h-52">
                  
                  
                  <div className="flex w-full justify-between px-5 h-14 cursor-pointer items-center">
                      <h2 className='text-xl font-normal text-lavazzaBlue'>Santa Monica Place</h2>
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
                  
                  <div className='px-6'>
                      <p className="mb-2 text-lavazzaBlue">You've crafted a sleek collapsible panel using Tailwind CSS without the need for JavaScript. Impressive! 😎</p>
                  </div>
                  </div>
                  <hr />
              </label>
    </div>
  )
}
