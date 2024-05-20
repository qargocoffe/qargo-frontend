'use client'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
//import './BannerHomepage.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import { ButtonCustomized } from '../../button/ButtonCustomized';


export const BannerHomepage = () => {

    const image1 = '/home/slide1.png';
    const image2 = '/home/slide2.png';

  return (
    <div className='fade-in-fwd mb-20 bg-grayBackground '>
      <Swiper pagination={true}
        navigation={ {
          nextEl: 'swiper-button-next',
          prevEl: '.swiper-button-prev'
        } }
        id='swiperHome' 
        modules={[Pagination]}
        className="mySwiper !pt-0 m-[-5rem] !max-h-[560px] !min-h-[500px]">
          <SwiperSlide>
            <div className='absolute flex flex-col place-content-center'>
                <img src={image1} className='h-full' alt="Menu" />
                  <div className='bottom-0 absolute m-0 p-0' style={{
                    position: 'absolute',
                    
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    
                  }}>
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
            <div className='absolute flex flex-col place-content-center'>
                <img src={image2} className='h-full' alt="Menu" />
                  <div className='bottom-0 absolute m-0 p-0' style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    
                  }}>
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
          
        
      </Swiper>
    </div>
  )
}
