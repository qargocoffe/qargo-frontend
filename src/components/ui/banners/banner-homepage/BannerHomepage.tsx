'use client'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import { ButtonCustomized } from '../../button/ButtonCustomized';

export const BannerHomepage = () => {

    const image1 = '/home/slide1.png';
    const image2 = '/home/slide2.png';

  return (
    <div className='slide-in-top mb-20 bg-grayBackground'>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper !pt-0 m-[-5rem]">
          <SwiperSlide className='!min-h-[600px] md:!min-h-full'>
          <div className='h-full'>
            <img src="/home/slide1.png" className='h-full' alt="" />
          </div>
          </SwiperSlide>
          <SwiperSlide className='!min-h-[600px] md:!min-h-full'>
          <div className='h-full'>
            <img src="/home/slide2.png" className='h-full' alt="" />
          </div>
          </SwiperSlide>
      </Swiper>
    </div>
  )
}
