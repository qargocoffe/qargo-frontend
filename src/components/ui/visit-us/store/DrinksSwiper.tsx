'use client'
// Import necessary hooks and components

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { ButtonCustomized } from '@/components/ui';
import Image from 'next/image';
import Link from 'next/link';


interface Drink {
    title: string,
    description: string,
    image: string
}

export const DrinksSwiper = (drinks: Drink[]) => {
  
  return (
    <div>

        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={70} // Separate by 25px between sliders
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: false,
        }}
        centerInsufficientSlides={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper top-[-4rem] relative">
        
        <SwiperSlide 
            key={1}
            className='w-full ' 
            >
            <article className='flex flex-row justify-center items-center text-center '>
              <figure className='my-2 w-1/2'>
                <Image src={'/stores/drinks/image1.png'} layout='responsive' width={60} height={60} alt='Eny' />
              </figure>
              <div className='w-1/2 text-left tracking-widest '>
                <h3 className='text-lavazzaBlue mb-3 font-semibold'>GUATA </h3>
                <p className='text-gray'>Inspired by the Big Guava nickname, a classic latte with sweet guava notes|</p>
                <Link href={'/'} className='text-center rounded-full bg-lavazzaBlue py-2 w-2/3 block mt-3'>
                  <span className='font-semibold text-sm text-white'>
                    ORDER HERE
                  </span>
                </Link>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide 
            key={1}
            className='w-full ' 
            >
            <article className='flex flex-row justify-center items-center text-center '>
              <figure className='my-2 w-1/2'>
                <Image src={'/stores/drinks/image2.png'} layout='responsive' width={90} height={60} alt='Eny' />
              </figure>
              <div className='w-1/2 text-left tracking-widest '>
                <h3 className='text-lavazzaBlue mb-3 font-semibold'>COLORADO ROX FRAPPE </h3>
                <p className='text-gray'>Inspired by the Big Guava nickname, a classic latte with sweet guava notes|</p>
                <Link href={'/'} className='text-center rounded-full bg-lavazzaBlue py-2  w-2/3 block mt-3'>
                  <span className='font-semibold  text-sm text-white'>
                    ORDER HERE
                  </span>
                </Link>
              </div>
            </article>
          </SwiperSlide>
          
      </Swiper>
    </div>
  )
}
