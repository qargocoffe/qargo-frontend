'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  image: string;
}

export const Worker = ({ image }: Props) => {
  const [displayImage, setDisplayImage] = useState(false);

  return (
    <div 
      className='w-1/3 md:w-1/5 text-center grayscale hover:grayscale-0 cursor-pointer'
      onMouseEnter={() => setDisplayImage(true)}
      onMouseLeave={() => setDisplayImage(false)}
    >
      <Image 
          src={image} 
          width={200} 
          height={30} 
          alt='Image' 
          layout='responsive' 
        />
      <div
        className={clsx(
          "w-full hidden md:h-[100px] md:flex flex-col items-center justify-center backdrop-filter backdrop-blur-md bg-white/20 md:absolute md:bottom-0 py-8 transition-opacity duration-300",
          {
            "opacity-100 visible": displayImage,
            "opacity-0 invisible": !displayImage,
          }
        )}
      >
        <h3 className='text-white text-xl'>Angel Novel</h3>
        <p className='text-white text-lg'>Motion Designer</p>
      </div>
    </div>
  );
};
