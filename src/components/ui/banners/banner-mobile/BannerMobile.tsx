'use client'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import { BlogCard } from '../../blog/BlogCard';
import { Blog } from '@/interfaces/blog/blog.interface';
import { Partner } from '@/interfaces';
import PartnerSlide from '../../about/PartnerSlide';

type Banners = 'blog' | 'banner' | 'partner';

export const BannerMobile = ({typeBanner, data }: { typeBanner: Banners, data: any}) => {

  return (
    <div>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {typeBanner === 'blog' && data.map((blog: Blog) => (
          <SwiperSlide key={blog.slug} className='!h-full bg-beigeLight pb-6 '>
            <BlogCard {...blog} />
          </SwiperSlide>
        ))}


      {typeBanner === 'partner' &&  data.map((partner: Partner) => (
          <SwiperSlide key={partner.title} className='!h-full bg-beigeLight pb-6 '>
            <PartnerSlide {...partner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}