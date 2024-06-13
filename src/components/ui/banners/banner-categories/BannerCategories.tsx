'use client'
// Import necessary hooks and components
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './BannerCategories.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Categories, Category } from '@/interfaces/our-menu/category.interface';
import { ButtonCustomized } from '@/components/ui';
import Image from 'next/image';

export const BannerCategories = ({categories}: any ) => {
  const [isActive, setIsActive] = useState(false);

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
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        onSlideChange={(swiper) => {
          setIsActive(swiper.activeIndex === swiper.realIndex); // Update state based on active slide
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper !pt-2"
      >
        {categories && categories.map((category: any, index: number) => (
          <SwiperSlide 
            key={index}
            className='!w-[260px] !h-[500px] bg-cover bg-center rounded-xl border border-grayLight' 
            style={{ backgroundImage: 'url(' + category.image +')' }}
          >
            <div className='h-full flex flex-row justify-center items-end text-center'>
              <div className='mb-5'>
                <ButtonCustomized
                  type="link"
                  url={'/categories/1'}
                  background={'bg-lavazzaBlue'}
                  fontColor={'text-white'}
                  title={category.slug.replace(/-/g, ' ').toUpperCase()}
                />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  );
}
