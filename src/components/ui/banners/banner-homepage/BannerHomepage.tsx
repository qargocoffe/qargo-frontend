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
    <div>

      <Swiper pagination={true} modules={[Pagination]} className="mySwiper bottom-20">
          <SwiperSlide>
          <div style={{
            backgroundImage: `url('/home/slide1.png')`,
            backgroundRepeat: 'no-repeat'
          }} className={`bg-cover bg-center min-h-[600px] relative`}>
                <ButtonCustomized
                  type='link'
                  url={'/team'}
                  background={'bg-lavazzaBlue'}
                  fontColor={'text-white'}
                  title={'VIEW MORE'}          />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div style={{
            backgroundImage: `url('/home/slide2.png')`,
            backgroundRepeat: 'no-repeat'            
          }} className={`bg-cover bg-center min-h-[600px] relative`}>
                <ButtonCustomized
                  type='link'
                  url={'/team'}
                  background={'bg-lavazzaBlue'}
                  fontColor={'text-white'}
                  title={'VIEW MORE'}          />
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
  )
}
