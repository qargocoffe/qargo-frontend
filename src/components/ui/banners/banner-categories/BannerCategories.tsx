'use client'
// Import necessary hooks and components
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './BannerCategories.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

export const BannerCategories = ({categories}: any ) => {
  const [isActive, setIsActive] = useState(false);
  const [animationKey, setAnimationKey] = useState<number | null>(categories[0].animation); // Initialize animationKey state

  return (
    <div>
      
      <figure className='absolute z-2'>
      <Image src={animationKey} width={300} height={300} layout='responsive' alt='a'/>
      </figure>
      <Swiper
        id='bannerCategories'
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={70} // Separate by 70px between sliders
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
       
        onSlideChange={(swiper) => {
          setIsActive(swiper.activeIndex === swiper.realIndex); // Update state based on active slide

          // Retrieve the active slide's animation key and update the state
          const activeSlide = categories[swiper.activeIndex];
          setAnimationKey(activeSlide ? activeSlide.animation : null);
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper !pt-2">
        {categories && categories.map((category: any, index: number) => (

          

          <SwiperSlide 
            id='bannerCategories'
            key={category.animation} // Use animation as the key
            className='!w-[260px] !h-[500px] bg-cover bg-center rounded-xl border border-grayLight' 
            style={{ backgroundImage: 'url(' + category.image +')' }}>
            <div className='h-full flex flex-row justify-center items-end text-center'>
              <div className='mb-5'>
                <Link href={'/'} className='text-center m-auto rounded-full min-w-[12rem] bg-lavazzaBlue py-2 block mt-3'>
                  <span className='font-semibold text-sm text-white'>
                    {category.slug.replace(/-/g, ' ').toUpperCase()}
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
