'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { DrinkItem } from '@/components/ui'; // Assuming DrinkItem is the component to render each drink
import { EffectCoverflow, FreeMode, Pagination } from 'swiper/modules';


interface DrinksSwiperProps {
    drinks: Drink[];
  }
  
  interface Drink {
    title: string;
    description: string;
    image: string;
  }

  export const DrinksSwiper = ({ drinks }: DrinksSwiperProps) => {

    return (
        <div className='md:m-auto md:w-desktop my-9'>
        { /* EXCLUSIVE DRINKS TITLE*/ }
        <h3 className='text-lavazzaBlue text-center text-xl lg:text-2xl  tracking-widest font-semibold mb-8'>EXCLUSIVE DRINKS</h3>
        { /* For mobile the swiper */ }
            <div className='md:hidden'>
            <Swiper
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                        grabCursor: true,
                        effect: 'freemode',
                        centeredSlidesBounds: true,
                        centeredSlides: true,
                        centerInsufficientSlides: true
                    },
                    320: {
                        slidesPerView: 'auto',
                        grabCursor: false,
                    },
                }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                spaceBetween={70}
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
                modules={[EffectCoverflow, Pagination, FreeMode ]}
                className="mySwiper top-[-4rem] relative">
                {drinks.map((drink, index) => (
                    <SwiperSlide key={index} className='w-full'>
                        <DrinkItem {...drink} />
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>

        { /* For desktop grid products */ }
        <div className='hidden md:grid grid-cols-4 gap-10 mb-20'>
            {drinks.map((drink, index) => (
                <DrinkItem key={index} {...drink} />
            ))}
        </div>

        </div>
    );
};
