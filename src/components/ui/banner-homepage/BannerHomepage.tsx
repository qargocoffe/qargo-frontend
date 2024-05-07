'use client'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

export const BannerHomepage = () => {

    const image1 = '/home/slide1.png';
    const image2 = '/home/slide2.png';

  return (
    <div>

      <Swiper pagination={true} modules={[Pagination]} className="mySwiper bottom-20">
          <SwiperSlide>
          <div style={{
            backgroundImage: `url('/home/slide1.png')`,
            backgroundRepeat: 'no-repeat'
          }} className={`bg-cover bg-center min-h-[600px] relative`}>
                <button className="absolute bottom-0 left-0 right-0 w-full p-4 bg-white text-gray-900 text-center">
                    VIEW 
                </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div style={{
            backgroundImage: `url('/home/slide2.png')`,
            backgroundRepeat: 'no-repeat'            
          }} className={`bg-cover bg-center min-h-[600px] relative`}>
                <button className="absolute bottom-0 left-0 right-0 w-full p-4 bg-white text-gray-900 text-center">
                    VIEW 
                </button>
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
  )
}
