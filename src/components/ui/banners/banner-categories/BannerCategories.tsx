'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './BannerCategories.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Categories, Category } from '@/interfaces/our-menu/category.interface';
import { ButtonCustomized } from '@/components/ui';


export const BannerCategories = ({categories}: any ) => {
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
       
        pagination={true}
        navigation={ {
          nextEl: 'swiper-button-next',
          prevEl: '.swiper-button-prev'
        } }
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper !pt-2">
        
        {
            categories && categories.map((category: Category) => (
              <SwiperSlide className='!w-[260px] !h-[400px] bg-cover bg-center rounded-xl' style={{
                backgroundImage: 'url(/our-menu/image1.png)',
              }}>
                <div className='h-full flex flex-row justify-center items-end text-center'>
                <div className='mb-5'>
                  <ButtonCustomized
                    type="link"
                    url={'/team'}
                    background={'bg-lavazzaBlue'}
                    fontColor={'text-white'}
                    title={'FRESH & COOL'}          />
                </div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </SwiperSlide>
            ))
        }
       
      </Swiper>
    </div>
  );
}
