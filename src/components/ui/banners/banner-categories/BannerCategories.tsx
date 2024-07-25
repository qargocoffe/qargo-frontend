'use client'

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './BannerCategories.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import Link from 'next/link';
import Image from 'next/image';

interface Category {
  animation: string;
  image: string;
  slug: string;
}

interface BannerCategoriesProps {
  categories: Category[];
}

export const BannerCategories = ({ categories }: BannerCategoriesProps) => {
  const [animationKey, setAnimationKey] = useState<string | null>(categories[0]?.animation);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Assuming animation duration is 1s
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const handleSlideChange = (swiper: any) => {
    const activeSlide = categories[swiper.activeIndex];
    setAnimationKey(activeSlide ? activeSlide.animation : null);
    setIsAnimating(true);
  };

  return (
    <div >
      {animationKey && (
        <figure className={`w-full m-auto lg:w-1/2 absolute bottom-0 left-0 right-0 top-0 grid place-items-center !z-20 ${isAnimating ? 'scale-up-center' : ''}`}>
          <Image src={animationKey} width={300} height={300} layout='responsive' alt='Animation'  />
        </figure>
      )}
      <Swiper
        id='bannerCategories'
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={`auto`}
        spaceBetween={70}
        centeredSlidesBounds= {true}
        
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          1100: {
            centeredSlides: true,
            grabCursor: true,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 100,
              scale: 1,
              modifier: 1,
              slideShadows: false,
            }
          },
        }}
        centerInsufficientSlides={true}
        pagination={{
          el: '.swiper-custom-pagination',
        }}
        onSlideChange={handleSlideChange}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper !pt-2 lg:max-w-[1100px]">
        {categories.map((category, index) => (
          <SwiperSlide
            key={index}
            className='!w-[260px] lg:!w-[350px]'>
            <div
              className='h-full flex flex-row justify-center items-end text-center !bg-transparent rounded-3xl'>
              <Image src={category.image} height={30} width={30} layout='responsive' alt='sas' className='!h-[480px] md:!h-auto lg:!h-[640px] ' />
              <div className='absolute bottom-0 mb-5 px-6 w-full lg:px-10 lg:mb-5'>
                <Link href={'/categories/1'} className='text-center m-auto rounded-full min-w-[12rem] bg-lavazzaBlue py-2 block mt-3 text-white font-semibold text-sm'>
                    {category.slug.replace(/-/g, ' ').toUpperCase()}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-custom-pagination text-center mt-10"/>
    </div>
  );
};
