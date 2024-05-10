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


export const BannerCategories = (categories: Category[] ) => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper">
        
        {
            categories && categories.map((category: Category) => (
                <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
            ))
        }
       
      </Swiper>
    </>
  );
}
