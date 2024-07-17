'use client'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './BannerHomepage.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import { ButtonCustomized } from '../../button/ButtonCustomized';


export const BannerHomepage = () => {

    const image1 = '/home/slide1.png';
    const image2 = '/home/slide1-desktop.png';
    const image3 = '/campaign/summer/image1.png';
    const image4 = '/campaign/summer/image1-desktop.png';

  return (
    <div className='fade-in-fwd top-[-2rem] md:top-[-2rem] lg:top-[-1rem] xl:top-[-13rem] relative bg-grayBackground '>
      <Swiper pagination={true}
        id='swiperHome'
        modules={[Pagination]}
        autoHeight={true}
        className="mySwiper">
          <SwiperSlide>
            <div className='relative flex flex-col place-content-center'>
                <img src={image1} className='h-full md:!hidden' alt="Menu" />
                <img src={image2} className='!hidden h-full md:!block' alt="Menu" />
                  <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
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
          
          </SwiperSlide>
          <SwiperSlide>
            <div className=' relative flex flex-col place-content-center'>
                <img src={image3} className='h-full md:!hidden' alt="Menu" />
                <img src={image4} className='!hidden h-full md:!block ' alt="Menu" />
                  <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                     <ButtonCustomized
                    type="link"
                    key={'VIEW MORE'}
                    url={'/summer'}
                    background={'bg-beigeLight'}
                    fontColor={'text-beige'}
                    title={'VIEW MORE'}
                    />
                  </div>
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
  )
}
