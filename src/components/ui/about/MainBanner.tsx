import Image from 'next/image'
import React from 'react'

export const MainBanner = () => {
  return (
    <>
        <section className="w-full flex justify-around items-center min-h-[300px]  relative bottom-[-4rem]">
        <figure className="slide-in-left  w-[40%] md:w-1/3 left-0 h-auto block absolute">
          <Image src="/about/croazan.png" alt="chocolato" width={30} height={30} layout="responsive" />
        </figure>
        

        <figure className="slide-in-top w-[30%] md:w-1/3 h-auto block absolute left-20 top-[11rem]">
          <Image src="/about/chocolato.png" alt="chocolato" width={30} height={30} layout="responsive" />
        </figure>
        
        <figure className="slide-in-right  md:w-1/3 right-0 w-4/5 h-auto block bottom-3 absolute">
          <Image src="/about/coffee.png" alt="chocolato" width={30} height={30} layout="responsive" />
        </figure>
      </section>
    </>
  )
}
