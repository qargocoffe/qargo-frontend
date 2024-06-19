'use client'
// Import necessary hooks and components
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './BannerCategories.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

export const BannerCategories = ({ categories }: any) => {
  const [animationKey, setAnimationKey] = useState<string | null>(categories[0].animation); // Initialize animationKey state
  const [isAnimating, setIsAnimating] = useState(true); // Track if animation is active
  

  useEffect(() => {
    if (isAnimating) {
      // Reset animation state to allow re-triggering
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 1000); // Assuming animation duration is 1s
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const handleSlideChange = (swiper: any) => {
    // Retrieve the active slide's animation key and update the state
    const activeSlide = categories[swiper.activeIndex];
    setAnimationKey(activeSlide ? activeSlide.animation : null);
    setIsAnimating(true); // Trigger animation
  };

  return (
    <div>
      {animationKey && (
        <figure className={`w-full absolute top-0 z-20 ${isAnimating ? 'scale-up-center' : ''}`}>
          <Image src={animationKey} width={300} height={300} layout='responsive' alt='Animation' />
        </figure>
      )}
      <Swiper
        id='bannerCategories'
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={70} // Separate by 70px between sliders
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
        onSlideChange={handleSlideChange}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper !pt-2"
      >
        {categories && categories.map((category : any, index: number) => (
          <SwiperSlide
            key={index} // Use animation as the key
            className='!w-[260px] !h-[500px] bg-cover bg-center rounded-xl border border-grayLight'
            style={{ backgroundImage: `url(${category.image})` }}
          >
            <div className='h-full flex flex-row justify-center items-end text-center'>
              <div className='mb-5'>
                <Link href={'/'} className='text-center m-auto rounded-full min-w-[12rem] bg-lavazzaBlue py-2 block mt-3'>
                  <span className='font-semibold text-sm text-white'>
                    {category.slug.replace(/-/g, ' ').toUpperCase()}
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
