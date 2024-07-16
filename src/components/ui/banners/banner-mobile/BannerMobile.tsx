'use client'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './BannerMobile.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { BlogCard } from '../../blog/BlogCard';
import { Blog } from '@/interfaces/blog/blog.interface';
import PartnerSlide from '../../about/PartnerSlide';
import Image from 'next/image';
import { useState } from 'react';

type Banners = 'blog' | 'banner' | 'partner';

export const BannerMobile = ({ typeBanner, data }: { typeBanner: Banners, data: any }) => {
  const [currentImage, setCurrentImage] = useState(data[0].banner);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage(data[currentIndex].banner);
      setIsTransitioning(false);
    }, 300); // Duration should match the transition duration in Tailwind classes
  };

  return (
    <div className='bg-beigeLight'>
      <div className='md:flex items-center lg:w-desktop lg:m-auto'>
        <figure className='hidden md:block md:relative md:w-full md:h-auto'>
          <Image 
            src={currentImage} 
            alt="Partner" 
            width={30} 
            height={30} 
            layout='responsive' 
            className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          />
        </figure>
        <Swiper 
          pagination={{ clickable: true }}
          grabCursor={true}
          navigation={true}
          onSlideChange={handleSlideChange}
  
          breakpoints={{
            0: {
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }
            },
            768: {
              
            },
          }}
          id='swiperMobile'
          modules={[Pagination, Navigation]} 
          className="mySwiper"
        >
          {typeBanner === 'blog' && data.map((blog: Blog) => (
            <SwiperSlide key={blog.slug} className='!h-full pb-6'>
              <BlogCard {...blog} />
              <div className="swiper-pagination"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </SwiperSlide>
          ))}

          {typeBanner === 'partner' && data.map((partner: any) => (
            <SwiperSlide key={partner.title} className='!h-full pb-6'>
              <PartnerSlide title={partner.title} banner={partner.banner} description={partner.description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
