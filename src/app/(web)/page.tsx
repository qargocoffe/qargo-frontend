'use client'

import { BannerMobile, ButtonCustomized } from "@/components/ui";
import { getBlogs } from "@/utils";
import { getHomePage } from "@/utils/homepage";
import Image from "next/image";
import { BannerHomepage } from "@/components/ui";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export default async function () {

  const blogs = await getBlogs(4);
  const homePage = await getHomePage();

  return (
    <div className="bg-ceramic">

      <BannerHomepage />
     <article style={{
       backgroundImage: `url('/home/background-gray.png')`,
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover',
       margin: 0,
       padding: 0,
      }}>
     <section 
     className="w-100 flex justify-around items-center min-h-[17rem]">
        <img src="./home/coffee1.png" alt="chocolato" className="slide-in-left  w-[72%] left-0 h-auto block absolute" />
        <img src="./home/coffee2.png" alt="chocolato" className="slide-in-right  right-0 w-[52%] h-auto block absolute" />
      </section>
          <h2 className="px-7 py-5 text-2xl tracking-widest font-normal text-lavazzaBlue text-left">ITALY’S FINEST  <br />COFFEE & PASTRIES</h2>
          <div className='px-7 py-2 flex w-full text-center' >
              <p className="mt-4 mb-14 text-gray text-left">Capturing the essence of Italian tradition and standards, we redefine the essence of coffee culture with unique recipes, taken to a new level with the premium quality of Lavazza, and freshly baked Italian pastries, creating a wide spectrum of flavor profiles and textures.</p>
              <figure className="w-full">
                <Image className="mb-4" src={'./footer/coffee.png'} alt="Coffe" width={120} height={120} />
              </figure>
            </div>
        </article>
        <div className="reveal-scroll">


        <div className='reveal-scroll bg-beigeLight'>
        <Swiper pagination={true}
        navigation={ {
          nextEl: 'swiper-button-next',
          prevEl: '.swiper-button-prev'
        } }
        id='swiperMobile'
        modules={[Pagination]} className="mySwiper">
          
          <SwiperSlide className='!h-full pb-6 '>
              <div className='w-full text-center min-h-[600px] h-auto' >
                <div className='relative'>
                    <h3 className='absolute bg-lavazzaBlue text-white rounded p-1'>Latest News</h3>
                    <img src={'./blog/default.png'} />
                </div>
              <div className='p-7'>
                  <h2 className='text-2xl mt-4 text-lavazzaBlue'>{' Coffee Spreads Christmas Cheer to Long Beach Rescue Mission'}</h2>
                  <p className='mt-4 text-gray'>{'Expresses gratitude to the Long Beach Rescue Mission for the opportunity to contribute to their Christmas celebration.'}</p>
              </div>
                <ButtonCustomized
                type='link'
                key={'title'}
                url={'slug'}
                background={'bg-lavazzaBlue'}
                fontColor={'text-white'}
                title={'VIEW MORE'}          />
            </div>
          </SwiperSlide>
          <SwiperSlide className='!h-full pb-6 '>
              <div className='w-full text-center min-h-[600px] h-auto' >
                <div className='relative'>
                    <h3 className='absolute bg-lavazzaBlue text-white rounded p-1'>Latest News</h3>
                    <img src={'./blog/default.png'} />
                </div>
              <div className='p-7'>
                  <h2 className='text-2xl mt-4 text-lavazzaBlue'>{'Qargo Coffee Spreads Christmas Cheer to Long Beach Rescue Mission'}</h2>
                  <p className='mt-4 text-gray'>{'Expresses gratitude to the Long Beach Rescue Mission for the opportunity to contribute to their Christmas celebration.'}</p>
              </div>
                <ButtonCustomized
                type='link'
                key={'title'}
                url={'slug'}
                background={'bg-lavazzaBlue'}
                fontColor={'text-white'}
                title={'VIEW MORE'}          />
            </div>
          </SwiperSlide>
        
      </Swiper>
    </div>

        </div>

        <div className="mt-6 flex justify-center">
        <Image className="mb-4" src={'./footer/coffee.png'} alt="Coffe" width={60} height={60} />
        </div>

    </div>
  );
}