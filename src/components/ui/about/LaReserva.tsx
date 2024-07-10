import Image from 'next/image'
import React from 'react'
import { ButtonCustomized } from '../button/ButtonCustomized'

export const LaReserva = () => {
  return (
    <>
        <div className="bg-coffeStrong w-full min-h-[300px] md:max-h-[500px] mt-[5rem] relative ">
        <article className="md:w-desktop m-auto relative md:flex md:justify-center md:items-center h-full">
              <div className="ml-5 w-1/2 md:w-1/2 text-beigeLight max-h-[300px] md:max-h-screen px-4 py-5 ">
                  <h2 className="text-2xl slide-in-left-scroll md:text-3xl">Sustainability</h2>
                  <p className="mt-5 mb-7 slide-in-left-scroll md:text-lg">
                  With Lavazza ¡Tierra! in every coffee cup, our commitment to the planet is at the forefront of our philosophy.
                  </p>
                  <div className="slide-in-left-scroll">
                    <ButtonCustomized
                      type="link"
                      key={'VIEW MORE'}
                      url={'/sustainability'}
                      background={'bg-beigeLight'}
                      fontColor={'text-beige'}
                      title={'VIEW MORE'}
                      />
                  </div>
              </div>
              <figure className="md:hidden absolute bottom-0 right-0 slide-in-right-scroll">
                  <Image src="/about/sustainability.png" alt="Sustainability" width={180} height={40} />
              </figure>
              <figure className="hidden md:block md:w-2/3 ">
                  <Image src="/about/desktop/lareserva.png" alt="Sustainability" width={180} height={40} layout="responsive" />
              </figure>
          </article>
     </div>
    </>
  )
}
