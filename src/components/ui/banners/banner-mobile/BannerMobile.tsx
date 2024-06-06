'use client'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './BannerMobile.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import { BlogCard } from '../../blog/BlogCard';
import { Blog } from '@/interfaces/blog/blog.interface';
import PartnerSlide from '../../about/PartnerSlide';

type Banners = 'blog' | 'banner' | 'partner';

export const BannerMobile = ({typeBanner, data }: { typeBanner: Banners, data: any}) => {

  return (
    <div className='reveal-scroll bg-beigeLight'>
        <Swiper pagination={true}
        navigation={ {
          nextEl: 'swiper-button-next',
          prevEl: '.swiper-button-prev'
        } }
        id='swiperMobile'
        modules={[Pagination]} className="mySwiper">
        {typeBanner === 'blog' && data.map((blog: Blog) => (
          <SwiperSlide key={blog.slug} className='!h-full pb-6 '>
            <BlogCard {...blog} />
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </SwiperSlide>
        ))}


      {typeBanner === 'partner' &&  data.map((partner: any) => (
          <SwiperSlide key={partner.title} className='!h-full pb-6 '>
            <PartnerSlide title={partner.title} banner={partner.banner} description={partner.description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}